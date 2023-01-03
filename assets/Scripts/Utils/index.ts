import { ICb } from "../Common/Interface";

export const debounce = (cb: ICb, delay = 200) => {
  let timer
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      cb.cb.apply(cb.ctx, args)
      timer = null
    }, delay)
  }
}

export const throttle = (cb: ICb, interval = 200) => {
  let lastArgs: any[]
  let timer
  return (...args: any) => {
    lastArgs = args
    if (timer) return
    timer = setTimeout(() => {
      cb.cb.apply(cb.ctx, lastArgs)
      timer = null
    }, interval);
  }
}
