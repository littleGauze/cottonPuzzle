import { _decorator, Component, Node } from 'cc';
import { EventEnum } from '../Common/Enum';
import EventManager from './EventManager';
const { ccclass, property } = _decorator;

@ccclass('RenderManager')
export abstract class RenderManager extends Component {
    start() {
        EventManager.Instance.on(EventEnum.Render, this.render, this)
        this.render()
    }

    onDestroy() {
        EventManager.Instance.off(EventEnum.Render, this.render, this)
    }

    abstract render(): void
}

