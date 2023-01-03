import { _decorator, Component, Node } from 'cc';
import { SceneEnum } from '../Common/Enum';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('H3')
export class H3 extends SceneManager {
    type = SceneEnum.H3

    handleClickPrev() {
        this.changeScene(SceneEnum.H2)
    }
}
