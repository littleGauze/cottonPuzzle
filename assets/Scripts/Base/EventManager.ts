import Singleton from "./Singleton";
import { EventEnum } from "../Common/Enum";

interface IItem {
  cb: Function;
  ctx: unknown;
}

export default class EventManager extends Singleton {
  static get Instance() {
    return super.GetInstance<EventManager>();
  }

  private map: Map<EventEnum | string, Array<IItem>> = new Map();

  on(event: EventEnum | string, cb: Function, ctx: unknown) {
    if (this.map.has(event)) {
      this.map.get(event).push({ cb, ctx });
    } else {
      this.map.set(event, [{ cb, ctx }]);
    }
  }

  off(event: EventEnum | string, cb: Function, ctx: unknown) {
    if (this.map.has(event)) {
      const index = this.map.get(event).findIndex((i) => cb === i.cb && i.ctx === ctx);
      index > -1 && this.map.get(event).splice(index, 1);
    }
  }

  emit(event: EventEnum | string, ...params: unknown[]) {
    if (this.map.has(event)) {
      this.map.get(event).forEach(({ cb, ctx }) => {
        cb.apply(ctx, params);
      });
    }
  }

  clear() {
    this.map.clear();
  }
}