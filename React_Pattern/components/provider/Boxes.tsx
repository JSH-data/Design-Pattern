import ListItem from "./ListItem";

export default function Boxes() {
  return (
    <ul>
      {new Array(10).fill(0).map((value, index) => (
        <ListItem key={index} />
      ))}
    </ul>
  );
}
