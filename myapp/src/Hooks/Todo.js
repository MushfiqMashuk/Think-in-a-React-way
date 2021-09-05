import React from "react";

export default function Todo() {
  const [item, setItem] = React.useState("");
  const [warning, setWarning] = React.useState(null);

  const handleClick = (e) => {
    const target = e.target;

    const updateWarning = target.value.includes(".js")
      ? "You need Javascript knowledge!"
      : null;

    setItem(target.value);
    setWarning(updateWarning);
  };

  return (
    <div>
      <p>{item}</p>
      <textarea name="todo" value={item} onChange={handleClick}></textarea>

      <hr />

      <h1 value={warning}>{warning || "Good Choice!"}</h1>
    </div>
  );
}
