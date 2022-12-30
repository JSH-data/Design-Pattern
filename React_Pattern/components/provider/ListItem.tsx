import { useContext } from "react";
import { ThemeContext } from "../../context/provider";

export default function ListItem() {
  const context = useContext(ThemeContext);

  return (
    <li className="item" style={context ? context.theme : {}}>
      zz
    </li>
  );
}
