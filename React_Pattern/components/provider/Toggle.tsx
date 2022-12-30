import useThemeContext from "../../hooks/useThemeContext";

export default function Toggle() {
  const theme = useThemeContext();

  const onClickToggle = () => {
    theme.toggleTheme();
  };

  return <button onClick={onClickToggle}>토글 버튼</button>;
}
