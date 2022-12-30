import React, { useMemo, useState } from "react";
import type { NextPage } from "next";
import { ThemeContext } from "../context/provider";
import Toggle from "../components/provider/Toggle";
import Boxes from "../components/provider/Boxes";

type themeIndexType = "light" | "dark";

const Provider: NextPage = () => {
  const themes = useMemo(
    () => ({
      light: { background: "#red", color: "#000" },
      dark: { background: "#171717", color: "#fff" },
    }),
    []
  );

  const [theme, setTheme] = useState<themeIndexType>("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const providerValue = { theme: themes[theme], toggleTheme };

  return (
    <ThemeContext.Provider value={providerValue}>
      <div>프로바이더 패턴 테스트</div>
      <Toggle></Toggle>
      <Boxes></Boxes>
    </ThemeContext.Provider>
  );
};

export default Provider;
