import { _decorator, Component, Node, SpriteFrame } from 'cc';
import { RenderManager } from '../Base/RenderManager';
import { DataManager } from '../Runtime/DataManager';
import { Circle } from './Circle';
const { ccclass, property } = _decorator;

@ccclass('CircleManager')
export class CircleManager extends RenderManager {
    @property([SpriteFrame])
    contentRight: SpriteFrame[]

    @property([SpriteFrame])
    contentWrong: SpriteFrame[]

    render() {
        const children = this.node.children
        const pos = DataManager.Instance.circlePos
        for (let i = 0; i < children.length; i++) {
            const idx = pos[i]
            const container = children[i]
            container.removeAllChildren()
            if (idx === null) continue
            const right = this.contentRight[idx]
            const wrong = this.contentWrong[idx]
            const circle = new Circle('Content')
            circle.init(i, right, wrong).render(idx)
            circle.setParent(container as Circle)
        }
    }
}
