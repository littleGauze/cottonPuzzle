import { ItemStateEnum, ItemTypeEnum, TriggerItemStateEnum, TriggerItemTypeEnum } from "./Enum";

export interface IItem {
  type: ItemTypeEnum,
  state: ItemStateEnum,
}

export interface ITriggerItem {
  type: TriggerItemTypeEnum,
  state: TriggerItemStateEnum,
}

export interface ICb {
  cb: Function,
  ctx: unknown,
}
