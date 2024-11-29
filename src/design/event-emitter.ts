export class EventEmitter {
  private _listeners: Record<string, Function[]> = {}

  on(event: string, listener: Function) {
    if (!this._listeners[event]) {
      this._listeners[event] = []
    }

    this._listeners[event].push(listener)
  }

  remove(event: string, listener: Function) {
    if (!this._listeners[event]) {
      return
    }

    this._listeners[event] = this._listeners[event].filter(l => l !== listener)
  }

  emit(event: string, ...args: any[]) {
    if (!this._listeners[event]) {
      return
    }

    this._listeners[event].forEach(cb => {
      cb(...args)
    })
  }
}