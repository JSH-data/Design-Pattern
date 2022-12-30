import type { NextPage } from "next";
import ThemeProvider from "../components/provider/HOC/ThemeProvider";
import Toggle from "../components/provider/Toggle";
import Boxes from "../components/provider/Boxes";

const Provider: NextPage = () => {
  return (
    <ThemeProvider>
      <div>프로바이더 패턴 테스트</div>
      <Toggle></Toggle>
      <Boxes></Boxes>
    </ThemeProvider>
  );
};

export default Provider;
