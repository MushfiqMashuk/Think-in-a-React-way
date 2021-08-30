export default function HoverCounter({ count, incrementCount, theme }) {
  const style = theme === "dark" ? { backgroundColor: "black", color: "white" } : null;

  return (
    <h1 onMouseOver={incrementCount} style={style}>
      Hovered {count} times
    </h1>
  );
}
