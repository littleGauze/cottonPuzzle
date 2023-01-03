import { _decorator, Component, Node, SpriteFrame, Sprite, Layers } from 'cc';
const { ccclass, property } = _decorator;

export class Circle extends Node {
  private _idx: number
  private _key: number
  private _right: SpriteFrame
  private _wrong: SpriteFrame

  private _sprite: Sprite


  get key() {
    return this._key
  }

  get idx() {
    return this._idx
  }

  init(key: number, right: SpriteFrame, wrong: SpriteFrame) {
    this.layer = Layers.Enum.UI_2D
    this._sprite = this.addComponent(Sprite)
    this._key = key
    this._right = right
    this._wrong = wrong
    return this
  }

  render(idx: number) {
    this._idx = idx
    if (idx === this._key) {
      this._sprite.spriteFrame = this._right
    } else {
      this._sprite.spriteFrame = this._wrong
    }
  }
}
