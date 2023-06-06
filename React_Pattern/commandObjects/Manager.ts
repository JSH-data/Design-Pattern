import Command from './CommandBase'

export default class AiManager {
    commands: Array<Command>
    executedList: Array<Command>

    constructor() {
        this.commands = []
        this.executedList = []
    }

    addCommand(command: Command) {
        this.commands.push(command)
    }

    execute() {
        if (this.commands.length) {
            this.executedList = []
            this.commands.forEach(command => {
                this.executedList.push(command)
                command.execute()
            })
        } else {
            console.error('추가된 기능이 없습니다. 기능을 추가해주세요')
        }
    }
    cancel() {
        if (this.executedList.length) {
            while (this.executedList.length) {
                const command = this.executedList.pop()
                command?.cancel()
            }
        } else {
            console.error('이전에 실행한게 없습니다!!!')
        }
    }
}