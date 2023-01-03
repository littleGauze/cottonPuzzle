import { _decorator, Component, Node } from 'cc';
import { SceneEnum } from '../Common/Enum';
import { DataManager } from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('Menu')
export class Menu extends SceneManager {
    type = SceneEnum.Menu

    newGame() {
        DataManager.Instance.newGame()
    }

    handleContinue() {
        DataManager.Instance.loadGame()
    }
}
