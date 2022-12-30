import { useContext } from "react";
import { ThemeContext } from "../../context/provider";

export default function Toggle() {
  const context = useContext(ThemeContext);

  const onClickToggle = () => {
    if (context) context.toggleTheme();
  };

  return <button onClick={onClickToggle}>토글 버튼</button>;
}
