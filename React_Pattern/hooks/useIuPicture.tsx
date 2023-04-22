import { useState } from "react"

export default function useIuPicture() {
    const [iuPicture, setIuPicture] = useState<string>("https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/17/104953245.2.jpg")
    return { iuPicture, setIuPicture }
}