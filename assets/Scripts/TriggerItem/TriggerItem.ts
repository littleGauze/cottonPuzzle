import { _decorator, Sprite, Input } from "cc"
import { RenderManager } from "../Base/RenderManager"
import { TriggerItemTypeEnum } from "../Common/Enum"
const { ccclass, property } = _decorator

@ccclass('TriggerItem')
export default abstract class TriggerItem  extends RenderManager {
  type: TriggerItemTypeEnum

  onLoad() {
    this.node.on(Input.EventType.TOUCH_END, this.handleTriggered, this)
  }

  onDestroy() {
    super.onDestroy()
    this.node.off(Input.EventType.TOUCH_END, this.handleTriggered, this)
  }

  abstract handleTriggered(): void
}
