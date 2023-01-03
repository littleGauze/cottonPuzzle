import Item from "./Item";
import { _decorator, Component, Vec2 } from "cc"
import { ItemStateEnum, ItemTypeEnum } from "../Common/Enum";
import { DataManager } from "../Runtime/DataManager";
const { ccclass, property } = _decorator

@ccclass('Key')
export default class Key extends Item {
  type = ItemTypeEnum.Key
  itemName: string = '信箱钥匙'

}
