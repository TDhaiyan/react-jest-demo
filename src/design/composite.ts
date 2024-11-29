export class Composite {
  private _children: Composite[] = []

  add(child: Composite) {
    this._children.push(child)
  }

  remove(child: Composite) {
    this._children = this._children.filter(c => c !== child)
  }

  getChildren() {
    return this._children
  }
}