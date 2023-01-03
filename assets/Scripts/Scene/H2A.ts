import { _decorator, Component, Node } from 'cc';
import { SceneEnum } from '../Common/Enum';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('H2A')
export class H2A extends SceneManager {
    type = SceneEnum.H2A

    handleClickPrev() {
        this.changeScene(SceneEnum.H2)
    }

    reset() {

    }
}
