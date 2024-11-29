export  class Command { 
  private _commands: Function[] = []

  add(command: Function) {
    this._commands.push(command)
  }

  execute() {
    this._commands.forEach(command => {
      command()
    })
  }
}