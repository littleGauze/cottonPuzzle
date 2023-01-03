import { _decorator, Component, Node, director, Prefab } from 'cc';
import { EventEnum, ItemStateEnum, ItemTypeEnum, PrefabEnum, SceneEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from '../Common/Enum';
import Singleton from '../Base/Singleton';
import { IItem, ITriggerItem } from '../Common/Interface';
import EventManager from '../Base/EventManager';
import { throttle } from '../Utils'

const CACHE_KEY = 'DATA_KEY'

export class DataManager extends Singleton {
    static get Instance() {
        return super.GetInstance<DataManager>()
    }

    defaultCirclePos: Array<number | null> = [1, 0, 3, 2, 5, 4, null]
    private _circlePos: Array<number | null> = [1, 0, 3, 2, 5, 4, null]
    lineMaps: Map<number, Array<number>> = new Map([
        [0, [1, 4, 6]],
        [1, [0, 5, 6]],
        [2, [4, 6]],
        [3, [5, 6]],
        [4, [0, 2, 5, 6]],
        [5, [1, 3, 4, 6]],
        [6, [0, 1, 2, 3, 4, 5]],
    ])

    private _currScene = SceneEnum.H1

    private _isSelected = false

    private _currItem: IItem | null = null

    get isSelected() {
        return this._isSelected
    }

    set isSelected(val: boolean) {
        this._isSelected = val
        this.render()
    }

    get currItem() {
        return this._currItem
    }

    set currItem(val: IItem) {
        this._currItem = val
        this.render()
    }

    private _items: IItem[] = [
        { type: ItemTypeEnum.Key, state: ItemStateEnum.Scene },
        { type: ItemTypeEnum.Ticket, state: ItemStateEnum.Scene },
    ]

    private _triggerItems: ITriggerItem[] = [
        { type: TriggerItemTypeEnum.MailBox, state: TriggerItemStateEnum.Pending },
        { type: TriggerItemTypeEnum.Door, state: TriggerItemStateEnum.Pending },
        { type: TriggerItemTypeEnum.Grandma, state: TriggerItemStateEnum.Pending },
    ]

    get packages() {
        return this._items.filter(it => it.state === ItemStateEnum.Package)
    }

    get currScene() {
        return this._currScene
    }

    set currScene(scene: SceneEnum) {
        this._currScene = scene

        // 加载场景
        director.loadScene(scene)
    }

    get items() {
        return this._items
    }

    set items(its: IItem[]) {
        this._items = [...its]

        this.render()
    }

    getItemByType(type: ItemTypeEnum): IItem {
        return this._items.find(it => it.type === type)
    }

    get triggerItems() {
        return this._triggerItems
    }

    set triggerItems(its: ITriggerItem[]) {
        this._triggerItems = [...its]

        this.render()
    }

    get circlePos() {
        return this._circlePos
    }

    set circlePos(pos: Array<number | null>) {
        this._circlePos = [...pos]
        this.render()
    }

    getTriggerItemByType(type: TriggerItemTypeEnum): ITriggerItem {
        return this._triggerItems.find(it => it.type === type)
    }

    // render() {
    //     EventManager.Instance.emit(EventEnum.Render)
    //     console.log('render')
    // }

    render = throttle({
        cb: () => {
            EventManager.Instance.emit(EventEnum.Render)
            this.saveGame()
        },
        ctx: this
    })

    newGame() {
        this.loadGame(JSON.stringify({
            currPos: this.defaultCirclePos.slice(),
            isSelelected: false,
            currIitem: null,
            currScene: SceneEnum.H1,
            items: [
                { type: ItemTypeEnum.Key, state: ItemStateEnum.Scene },
                { type: ItemTypeEnum.Ticket, state: ItemStateEnum.Scene },
            ],
            triggerItems: [
                { type: TriggerItemTypeEnum.MailBox, state: TriggerItemStateEnum.Pending },
                { type: TriggerItemTypeEnum.Door, state: TriggerItemStateEnum.Pending },
                { type: TriggerItemTypeEnum.Grandma, state: TriggerItemStateEnum.Pending },
            ]
        }))
    }

    saveGame() {
        const data = {
            currPos: this.defaultCirclePos.slice(),
            isSelected: this.isSelected,
            currItem: this.currItem,
            currScene: this.currScene,
            items: this.items.slice(),
            triggerItems: this.triggerItems.slice(),
        }
        localStorage.setItem(CACHE_KEY, JSON.stringify(data))
    }

    loadGame(data?: string) {
        data = data || localStorage.getItem(CACHE_KEY)
        if (!data) {
            this.newGame()
            return
        }
        try {
            data = JSON.parse(data)
            Object.keys(data).forEach(key => {
                this[key] = data[key]
            })
        } catch (err) {
            console.error(err)
        }
    }
}

