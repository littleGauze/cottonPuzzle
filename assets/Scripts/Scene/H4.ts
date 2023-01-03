import { _decorator, Component, Node, Prefab, Vec2, instantiate } from 'cc';
import { ItemStateEnum, ItemTypeEnum, SceneEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from '../Common/Enum';
import { DataManager } from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('H4')
export class H4 extends SceneManager {
    type = SceneEnum.H4

    private _items: Node = null

    @property(Prefab)
    TicketPf: Prefab = null

    @property(Vec2)
    positionPlaceholder: Vec2 = null

    onLoad() {
        super.onLoad()
        this._items = this.node.getChildByName('Items')
    }

    start() {
        super.start()
    }

    handleClickPrev() {
        this.changeScene(SceneEnum.H2)
    }

    render() {
        super.render()

        this._items?.removeAllChildren()
        const item = DataManager.Instance.items.find(it => it.type === ItemTypeEnum.Ticket)
        const mailbox = DataManager.Instance.triggerItems.find(it => it.type === TriggerItemTypeEnum.MailBox)
        if (!item || !this.positionPlaceholder || mailbox.state !== TriggerItemStateEnum.Triggered) return
        if (item.state === ItemStateEnum.Scene) {
            const ticket = instantiate(this.TicketPf)
            ticket.setPosition(this.positionPlaceholder.x, this.positionPlaceholder.y)
            ticket.setParent(this._items)
        }
    }
}
