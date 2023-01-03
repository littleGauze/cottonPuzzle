export default class Singleton {
  private static _instance: any = null

  static GetInstance<T>(): T {
    if (!this._instance) {
      this._instance = new this()
    }
    return this._instance
  }

  protected constructor() {}
}