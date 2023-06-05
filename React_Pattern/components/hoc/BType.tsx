import React from "react"
import WithStyle from "../../hoc/WithStyle"
import withLoader from "../../hoc/withLoader"
import withIdentify from "../../hoc/withIdentify"

function BType(props: any) {
    return <React.Fragment><div style={props.style}>
        B타입 포스트입니당
    </div> </React.Fragment>
}

export default BType

// export default WithStyle(BType)

// export default withIdentify(WithStyle(BType), 2)

// export default withLoader(withIdentify(WithStyle(BType), 2))