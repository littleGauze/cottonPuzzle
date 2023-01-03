import { Sprite, SpriteFrame, _decorator } from "cc";
import { ItemStateEnum, ItemTypeEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from "../Common/Enum";
import { DataManager } from "../Runtime/DataManager";
import TriggerItem from "./TriggerItem";

const { ccclass, property } = _decorator

@ccclass('MailBoxManager')
export default class MailBoxManager extends TriggerItem {
  type = TriggerItemTypeEnum.MailBox

  @property(SpriteFrame)
  opendSF: SpriteFrame

  private _sprite: Sprite

  onLoad() {
    super.onLoad()
    this._sprite = this.node.getChildByName('Box').getComponent(Sprite)
  }

  handleTriggered(): void {
    const ins = DataManager.Instance
    const triggerItems = ins.triggerItems.slice()
    const items = ins.items.slice()
    const currItem = items.find(it => it.type === ins.currItem.type)
    const mailbox = triggerItems.find(it => it.type === this.type)
    if (mailbox && mailbox.state === TriggerItemStateEnum.Pending && ins.isSelected && ins.currItem.type === ItemTypeEnum.Key) {
      mailbox.state = TriggerItemStateEnum.Triggered
      ins.triggerItems = triggerItems
      ins.isSelected = false
      currItem.state = ItemStateEnum.Used
      ins.items = [...items]
      ins.currItem = null
    }
  }

  render(): void {
    const mailbox = DataManager.Instance.triggerItems.find(it => it.type === this.type)
    if (mailbox.state === TriggerItemStateEnum.Triggered) {
      this._sprite.spriteFrame = this.opendSF
    }
  }
  
}
