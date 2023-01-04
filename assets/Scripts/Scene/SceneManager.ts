import { _decorator, Component, Node, director, Prefab, instantiate, Button, EventHandler, Scene } from 'cc';
import EventManager from '../Base/EventManager';
import { RenderManager } from '../Base/RenderManager';
import { EventEnum, SceneEnum } from '../Common/Enum';
import { DataManager } from '../Runtime/DataManager';
import PackageManager from '../UI/PackageManger';
const { ccclass, property } = _decorator;

@ccclass('SceneManager')
export abstract class SceneManager extends RenderManager {
    type: string

    @property(Prefab)
    menu: Prefab = null

    @property(Prefab)
    packagePrefab: Prefab

    onLoad() {
        if (this.menu) {
            const menu = instantiate(this.menu)
            menu.setParent(this.node)
            const btn = menu.getComponent(Button)
            const handle = new EventHandler()
            handle.target = this.node
            handle.component = this.type
            handle.handler = 'handleMenuClick'
            btn.clickEvents = [handle]
        }

        if (this.packagePrefab) {
            const pkg = instantiate(this.packagePrefab)
            pkg.getComponent(PackageManager)
            pkg.setParent(this.node)
        }
    }

    changeScene(scene: SceneEnum) {
        DataManager.Instance.currScene = scene
    }

    handleMenuClick() {
        director.loadScene(SceneEnum.Menu)
    }

    render() {}
}

