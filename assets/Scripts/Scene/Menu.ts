import { _decorator, Component, Node, director } from 'cc';
import { SceneEnum } from '../Common/Enum';
import { DataManager } from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('Menu')
export class Menu extends Component {
    type = SceneEnum.Menu

    onLoad() {
        for (const scene in SceneEnum) {
            director.preloadScene(scene)
        }
    }

    newGame() {
        DataManager.Instance.newGame()
    }

    handleContinue() {
        DataManager.Instance.loadGame()
    }
}
