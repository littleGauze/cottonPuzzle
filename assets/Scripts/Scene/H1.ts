import { _decorator, Component, Node } from 'cc';
import { SceneEnum } from '../Common/Enum';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('H1')
export class H1 extends SceneManager {
    type = SceneEnum.H1

    handleClickNext() {
        this.changeScene(SceneEnum.H2)
    }
}
