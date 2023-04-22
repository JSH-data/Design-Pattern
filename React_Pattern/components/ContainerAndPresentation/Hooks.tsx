import useIuPicture from "../../hooks/useIuPicture"
export default function Presentaion() {
    const { iuPicture, setIuPicture } = useIuPicture()
    return <img src={iuPicture}></img>
}