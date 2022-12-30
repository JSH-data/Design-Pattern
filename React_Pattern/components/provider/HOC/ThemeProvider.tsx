import React, { useMemo, useState } from "react";
import { ThemeContext } from "../../../context/provider";

type themeIndexType = "light" | "dark";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const themes = useMemo(
    () => ({
      light: { background: "red", color: "#000" },
      dark: { background: "#171717", color: "#fff" },
    }),
    []
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [theme, setTheme] = useState<themeIndexType>("dark");

  const providerValue = { theme: themes[theme], toggleTheme };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}
