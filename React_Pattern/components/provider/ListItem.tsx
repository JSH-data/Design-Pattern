import useThemeContext from "../../hooks/useThemeContext";

export default function ListItem() {
  const theme = useThemeContext();

  return (
    <li className="item" style={theme.theme}>
      zz
    </li>
  );
}
