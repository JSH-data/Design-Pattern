import Command from './CommandBase'
import Lamp from './Lamp'

export default class LampCommand extends Command {
    lamp: Lamp

    constructor(lamp: Lamp) {
        super()
        this.lamp = lamp
    }

    execute() {
        this.lamp.turnOnLight()
    }
    cancel() {
        this.lamp.turnOffLight()
    }
}