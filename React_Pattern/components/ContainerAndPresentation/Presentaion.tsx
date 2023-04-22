interface state {
    iuPicture: string;
}

export default function Presentaion({ iuPicture }: state) {
    return <img src={iuPicture}></img>
}