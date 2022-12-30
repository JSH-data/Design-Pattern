import { useContext } from "react";
import { ThemeContext } from "../context/provider";

function useThemeContext() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw Error("Context 없이 Hooks를 실행할 순 없습니다.");
  }

  return theme;
}

export default useThemeContext;
