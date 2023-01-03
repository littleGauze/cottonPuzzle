import { _decorator, Component, Node, Vec2, Prefab, instantiate } from 'cc';
import { ItemStateEnum, ItemTypeEnum, SceneEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from '../Common/Enum';
import Key from '../Item/Key';
import { DataManager } from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('H2')
export class H2 extends SceneManager {
    type = SceneEnum.H2

    private _items: Node = null

    @property(Prefab)
    keyPf: Prefab = null

    @property(Vec2)
    positionPlaceholder: Vec2 = null

    onLoad() {
        super.onLoad()
        this._items = this.node.getChildByName('Items')
    }

    handleClickPrev() {
        this.changeScene(SceneEnum.H1)
    }

    handleClickNext() {
        this.changeScene(SceneEnum.H4)
    }

    handleUpStair() {
        if (DataManager.Instance.getTriggerItemByType(TriggerItemTypeEnum.Door).state === TriggerItemStateEnum.Triggered) {
            this.changeScene(SceneEnum.H3)
        }
    }

    render() {
        super.render()

        this._items.removeAllChildren()
        const item = DataManager.Instance.items.find(it => it.type === ItemTypeEnum.Key)
        if (!item || !this.positionPlaceholder) return
        if (item.state === ItemStateEnum.Scene) {
            const key = instantiate(this.keyPf)
            key.setPosition(this.positionPlaceholder.x, this.positionPlaceholder.y)
            key.setParent(this._items)
        }
    }
}
