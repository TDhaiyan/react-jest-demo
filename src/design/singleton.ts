type InstanceFactory<T, K> = (option: K) => T

export class Singleton<T, K> {
  private _instance: T | null = null

  private _factory: InstanceFactory<T, K>

  constructor(factory: InstanceFactory<T, K>) {
    this._factory = factory
  }

  create(option: K) {
    this._instance = this._factory(option)
  }

  get() {
    if (this._instance === null) {
      throw new Error('Instance not created')
    }

    return this._instance
  }
}