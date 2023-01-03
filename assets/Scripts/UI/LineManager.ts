import { _decorator, Component, Node, SpriteFrame, Sprite, Layers, UITransform, Size, Vec3 } from 'cc';
import { DataManager } from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

const CIRCLE_RADIUS = 80

@ccclass('LineManager')
export class LineManager extends Component {
  @property(SpriteFrame)
  line: SpriteFrame

  @property(Node)
  circlesNode: Node

  start() {
    this.render()
  }

  render() {
    const circles = this.circlesNode.children
    const maps = DataManager.Instance.lineMaps
    for (const [ from, targets ] of maps) {
      for (const to of targets) {
        if (from < to) {
          const { x: x1, y: y1 } = circles[from].position
          const { x: x2, y: y2 } = circles[to].position
          const node = new Node('Line')
          node.layer = Layers.Enum.UI_2D
          const x = (x1 + x2) / 2
          const y = (y1 + y2) / 2

          const side1 = Math.abs(x2 - x1)
          const side2 = Math.abs(y2 - y1)
          const side3 = Math.sqrt(side1 ** 2 + side2 ** 2)
          node.setPosition(x, y)
          const sp = node.addComponent(Sprite)
          sp.spriteFrame = this.line
          node.setParent(this.node)
          const ui = node.getComponent(UITransform)
          ui.setContentSize(new Size(side3 - 2 * CIRCLE_RADIUS , ui.contentSize.height))
          const angle = Math.atan(side2 / side1) / Math.PI * 180
          const dir = (x1 > x2 && y1 > y2) || (x1 < x2 && y1 < y2) ? 1 : -1
          node.setRotationFromEuler(new Vec3(0, 0, angle * dir))
        }
      }
    }
  }
}
