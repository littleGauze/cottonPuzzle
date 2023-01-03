import Item from "./Item";
import { _decorator, Component } from "cc"
import { ItemTypeEnum } from "../Common/Enum";

const { ccclass, property } = _decorator

@ccclass('Ticket')
export default class Ticket extends Item {
  type = ItemTypeEnum.Ticket
  itemName: string = '船票'
}
