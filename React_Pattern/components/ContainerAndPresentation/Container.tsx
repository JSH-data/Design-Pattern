import { useState } from "react";
import Presentation from "./Presentaion"

export default function Container() {
    const [iuPicture, setIuPicture] = useState<string>("https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/17/104953245.2.jpg")
    return <Presentation iuPicture={iuPicture}></Presentation>
}