import { useState, useEffect } from "react"
import Forbidden from "../components/hoc/Forbidden"

export default function WithIdentify<P extends object>(Component: React.ComponentType<P>, grade: number): React.FC<P> {
    return function withIdentify(props) {
        const [myGrade, setMyGrade] = useState<null | number>(null)
        useEffect(() => {
            const currentGrade = localStorage.getItem('grade')
            setMyGrade(() => currentGrade === null ? currentGrade : Number(currentGrade))
        }, [])
        if (myGrade === null || myGrade > grade) return <Forbidden {...props as P} />
        else return <Component {...props as P} />;
    };
}