import { useState, useEffect } from "react"
import Loading from '../components/hoc/Loading'


export default function withLoader<P extends object>(Component: React.ComponentType<P>): React.FC<P> {
    return function WithLoader(props) {
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }, [])
        if (loading) return <Loading {...props as P} />
        return <Component {...props as P} />;
    };
}