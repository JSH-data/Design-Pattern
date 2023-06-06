import Command from './CommandBase'
import Speaker from './Speaker'

export default class SpeakerCommand extends Command {
    speaker: Speaker

    constructor(speaker: Speaker) {
        super()
        this.speaker = speaker
    }

    execute() {
        this.speaker.turnOnSpeaker()
    }
    cancel() {
        this.speaker.turnOffSpeaker()
    }
}