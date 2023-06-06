import { useState, useEffect } from "react"
import AiManager from "../commandObjects/Manager"
import LampCommand from "../commandObjects/LampCommand"
import Lamp from "../commandObjects/Lamp"
import SpeakerCommand from "../commandObjects/SpeakerCommand"
import Speaker from "../commandObjects/Speaker"

export default function ContainerAndPresentaion() {
    const [manager, setManager] = useState<null | AiManager>(null)

    const addLampCommand = () => {
        console.log('단축기에 램프 기능을 추가했습니다!')
        const lampInstance = new LampCommand(new Lamp())
        manager?.addCommand(lampInstance)
    }
    const addSpeakerCommand = () => {
        console.log('단축기에 스피커 기능을 추가했습니다!')
        const lampInstance = new SpeakerCommand(new Speaker())
        manager?.addCommand(lampInstance)
    }

    const executeAllAction = () => {
        manager?.execute()
    }

    const cancelPreviousAction = () => {
        manager?.cancel()
    }

    useEffect(() => {
        const managerInstance = new AiManager
        setManager(managerInstance)
    }, [])

    return <div>
        단축키 기능을 추가해보세요!
        <br />
        <br />
        원하는 옵션을 추가하세요
        <br />
        <button onClick={addLampCommand}>조명 추가</button>
        <button onClick={addSpeakerCommand}>스피커 추가</button>
        <br />
        <br />
        명령을 내려주세요
        <br />
        <button onClick={executeAllAction}>단축키 실행시켜줘~</button>
        <button onClick={cancelPreviousAction}>방금한거 취소 부탁해!</button>
    </div>
}