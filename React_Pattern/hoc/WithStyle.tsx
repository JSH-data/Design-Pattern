interface WithStyleProps {
    style?: styleType
}

type styleType = {
    width: string
    height: string
    color: string
}

function WithStyle(WrappedComponent: React.ComponentType<WithStyleProps>) {
    return function NewCom() {
        return <WrappedComponent style={{ width: '100px', height: '100px', color: 'orange' }} />
    }
}

export default WithStyle