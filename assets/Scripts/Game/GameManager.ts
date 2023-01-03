import { _decorator, Component, Node, Input, EventTouch } from 'cc';
import { SceneEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from '../Common/Enum';
import { DataManager } from '../Runtime/DataManager';
import { Circle } from '../UI/Circle';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    onLoad() {
        const circles = this.node.children
        for (const circle of circles) {
            circle.on(Input.EventType.TOUCH_END, this._handleTouchEnd, this)
        }
    }

    private _handleTouchEnd(evt: EventTouch) {
        const target = evt.target as Node
        const circle = target.getChildByName('Content') as Circle
        if (!circle) return
        const pos = DataManager.Instance.circlePos
        const maps = DataManager.Instance.lineMaps
        const lines = maps.get(circle.key)
        const nullIdx = pos.indexOf(null)
        const idx = pos.indexOf(circle.idx)
        if (lines.indexOf(nullIdx) !== -1) {
            pos[nullIdx] = circle.idx
            pos[idx] = null
            DataManager.Instance.circlePos = [...pos]
            this._checkSuccess()
        }
    }

    handleReset() {
        DataManager.Instance.circlePos = [...DataManager.Instance.defaultCirclePos]
    }

    private _checkSuccess() {
        const pos = DataManager.Instance.circlePos.slice(0, -1)
        if (pos.every((p, i) => p === i)) {
            const items = DataManager.Instance.triggerItems
            const door = items.find(it => it.type === TriggerItemTypeEnum.Door)
            door.state = TriggerItemStateEnum.Triggered
            DataManager.Instance.triggerItems = items
            DataManager.Instance.currScene = SceneEnum.H2
        }
    }
}
