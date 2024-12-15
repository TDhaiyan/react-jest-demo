export class EventEmitter {

  private _listeners: { [key: string]: Array<(...args: any[]) => void> } = {}

  on(event: string, listener: (...args: any[]) => void) {
    if (!this._listeners[event]) {
      this._listeners[event] = []
    }

    this._listeners[event].push(listener)
  }

  remove(event: string, listener: (...args: any[]) => void) {
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