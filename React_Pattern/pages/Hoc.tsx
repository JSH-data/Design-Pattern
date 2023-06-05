import type { NextPage } from "next";
import BType from "../components/hoc/BType";
import AType from "../components/hoc/AType";

const Hoc: NextPage = () => {
    const giveFirstGrade = () => {
        localStorage.setItem("grade", '1');
    }
    const giveSecondGrade = () => {
        localStorage.setItem("grade", '2');
    }
    const removeGrade = () => {
        localStorage.removeItem("grade");
    }

    return (
        <div>
            <div> HOC Pattern</div>
            <div>A타입, B타입의 포스트는 각자 서로 다른 권한을 갖고 있습니다.</div>
            <br />
            <div>A 컴포넌트는 1등급만 B등급은 2등급부터 확인이 가능합니다</div>
            <br />
            <div>로그인 하지 않은 경우 어떤 포스트도 볼 수 없음</div>
            <button onClick={giveFirstGrade}>1등급 권한 부여</button>
            <button onClick={giveSecondGrade}>2등급 권한 부여</button>
            <button onClick={removeGrade}>권한 제거</button>
            <br />
            <br /><br />
            <br />
            <AType />
            <br />
            <br />
            <BType />
        </div>
    );
};

export default Hoc;
