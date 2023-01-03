import { Label, Sprite, SpriteFrame, _decorator, Node } from "cc";
import { GrandmaTalks1, GrandmaTalks2 } from "../Common/Constants";
import { ItemStateEnum, ItemTypeEnum, SceneEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from "../Common/Enum";
import { DataManager } from "../Runtime/DataManager";
import TriggerItem from "./TriggerItem";

const { ccclass, property } = _decorator

@ccclass('GrandmaManager')
export default class GrandmaManager extends TriggerItem {
  type = TriggerItemTypeEnum.Grandma

  private _content: Label
  private _idx = 0
  private _triggered = false
  private _dialog: Node

  onLoad() {
    super.onLoad()
    this._dialog = this.node.getChildByName('Dialog')
    this._content = this._dialog.getComponentInChildren(Label)
  }

  handleTriggered(): void {
    const ins = DataManager.Instance
    const ticket = ins.getItemByType(ItemTypeEnum.Ticket)
    const items = ins.items.slice()
    const triggerItems = ins.triggerItems.slice()
    const grandma = triggerItems.find(it => it.type === this.type)
    if (
      ins.isSelected &&
      ins.currItem &&
      grandma.state === TriggerItemStateEnum.Pending &&
      ins.currItem.type === ItemTypeEnum.Ticket
    ) {
      grandma.state = TriggerItemStateEnum.Triggered
      ins.triggerItems = [...triggerItems]
      const idx = items.indexOf(ticket)
      items.splice(idx, 1)
      ins.items = [...items]
    }

    this._triggered = true
    this.render()
  }

  render(): void {
    if (!this._triggered) return
    this._triggered = false
    this._dialog.active = true
    const grandma = DataManager.Instance.triggerItems.find(it => it.type === this.type)
    if (grandma.state === TriggerItemStateEnum.Pending) {
      this._content.string = GrandmaTalks1[this._idx++ % GrandmaTalks1.length]
    } else if (grandma.state === TriggerItemStateEnum.Triggered) {
      this._content.string = GrandmaTalks2[0]
    }
  }
}
