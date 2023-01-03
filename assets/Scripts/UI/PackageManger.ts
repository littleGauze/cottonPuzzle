import { _decorator, Component, Button, instantiate, Prefab, Node, Label } from "cc"
import { RenderManager } from "../Base/RenderManager";
import { ItemStateEnum, ItemTypeEnum } from "../Common/Enum";
import Item from "../Item/Item";
import Key from "../Item/Key";
import { DataManager } from "../Runtime/DataManager";
const { ccclass, property } = _decorator

@ccclass('PackageManager')
export default class PackageManager extends RenderManager {

  private _left: Button

  private _right: Button

  private _itemContainer: Node

  private _hand: Node

  private _tip: Label

  @property(Prefab)
  Key: Prefab

  @property(Prefab)
  Ticket: Prefab

  onLoad() {
    this._left = this.node.getChildByName('Left').getComponent(Button)
    this._right = this.node.getChildByName('Right').getComponent(Button)
    const container = this.node.getChildByName('Container')
    this._hand = container.getChildByName('Hand')
    this._tip = container.getChildByName('Tip').getComponentInChildren(Label)
    this._itemContainer = container.getChildByName('Items')

  }

  handleClickPrev() {
    const packages = DataManager.Instance.packages
    const idx = packages.indexOf(DataManager.Instance.currItem)
    DataManager.Instance.currItem = packages[idx - 1]
  }

  handleClickNext() {
    const packages = DataManager.Instance.packages
    const idx = packages.indexOf(DataManager.Instance.currItem)
    DataManager.Instance.currItem = packages[idx + 1]
  }

  render() {
    const packages = DataManager.Instance.packages
    if (!packages.length) {
      this.node.active = false
      return
    }

    this.node.active = true
    let currItem = DataManager.Instance.currItem
    if (!currItem) {
      currItem = DataManager.Instance.currItem = packages[0]
    }
    this._itemContainer.removeAllChildren()
    for (const pkg of packages) {
      const node = instantiate(this[pkg.type])
      const item = node.getComponent(Item)
      this._tip.string = item.itemName
      node.setParent(this._itemContainer)
      if (item.type === currItem.type) {
        node.active = true
      } else {
        node.active = false
      }
    }

    const curr = packages.indexOf(currItem)
    if (packages.length === 1) {
      this._left.interactable = false
      this._right.interactable = false
    } else {
      if (curr < packages.length - 1) {
        this._right.interactable = true
      } else {
        this._right.interactable = false
      }
      if (curr > 0) {
        this._left.interactable = true
      } else {
        this._left.interactable = false
      }
    }

    if (DataManager.Instance.isSelected) {
      this._hand.active = true
    } else {
      this._hand.active = false
    }
  }
}
