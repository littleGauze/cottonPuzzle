import { Sprite, SpriteFrame, _decorator } from "cc";
import { ItemStateEnum, ItemTypeEnum, SceneEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from "../Common/Enum";
import { DataManager } from "../Runtime/DataManager";
import TriggerItem from "./TriggerItem";

const { ccclass, property } = _decorator

@ccclass('DoorManager')
export default class DoorManager extends TriggerItem {
  type = TriggerItemTypeEnum.Door

  @property(SpriteFrame)
  opendSF: SpriteFrame

  handleTriggered(): void {
    const door = DataManager.Instance.triggerItems.find(it => it.type === this.type)
    if (door && door.state === TriggerItemStateEnum.Pending) {
      DataManager.Instance.currScene = SceneEnum.H2A
    }
  }

  render(): void {
    const door = DataManager.Instance.triggerItems.find(it => it.type === this.type)
    if (door.state === TriggerItemStateEnum.Triggered) {
      this.node.active = false
    }
  }
  
}
