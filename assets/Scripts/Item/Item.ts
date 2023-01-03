import { _decorator, Component, Sprite, SpriteFrame, Input } from "cc"
import EventManager from "../Base/EventManager"
import { RenderManager } from "../Base/RenderManager"
import { ItemTypeEnum, ItemStateEnum, EventEnum } from "../Common/Enum"
import { DataManager } from "../Runtime/DataManager"
const { ccclass, property } = _decorator

@ccclass('Item')
export default class Item  extends RenderManager {
  type: ItemTypeEnum
  itemName:string = '物品'

  sprite: Sprite

  @property(SpriteFrame)
  inSceneSpriteFrame: SpriteFrame

  @property(SpriteFrame)
  inPackageSpriteFrame: SpriteFrame

  onLoad() {
    this.sprite = this.getComponent(Sprite)
    this.node.on(Input.EventType.TOUCH_END, this.handleClick, this)
  }

  onDestroy() {
    super.onDestroy()
    this.node.off(Input.EventType.TOUCH_END, this.handleClick, this)
  }

  handleClick() {
    const items = DataManager.Instance.items
    const item = items.find(it => it.type === this.type)
    if (!item) return

    if (item.state === ItemStateEnum.Scene) {
      item.state = ItemStateEnum.Package
    } else if (item.state === ItemStateEnum.Package) {
      DataManager.Instance.isSelected = !DataManager.Instance.isSelected 
    }

    DataManager.Instance.items = [...items]
  }

  render() {
    const item = DataManager.Instance.items.find(it => it.type === this.type)
    if (!item) return

    if (item.state === ItemStateEnum.Scene) {
      this.node.active = true
      this.sprite.spriteFrame = this.inSceneSpriteFrame
    } else if (item.state === ItemStateEnum.Package) {
      this.node.active = true
      this.sprite.spriteFrame = this.inPackageSpriteFrame
    } else {
      this.node.active = false
    }
  }
}
