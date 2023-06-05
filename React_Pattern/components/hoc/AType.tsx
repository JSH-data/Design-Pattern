import WithStyle from "../../hoc/WithStyle"
import withLoader from "../../hoc/withLoader"
import withIdentify from "../../hoc/withIdentify"

function AType() {
    return <div>A타입 포스트입니당</div>
}

export default withLoader(withIdentify(WithStyle(AType), 1))