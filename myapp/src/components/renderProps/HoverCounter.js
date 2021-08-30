export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === "dark" ? { backgroundColor: "black", color: "white" } : null;

  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h1>
      <button onClick={switchTheme}>Switch Theme</button>
    </div>
  );
}
