import React from "react";

/**
 * We always have to declare Hooks on the top level of a component.
 * We can not use Hooks in any other function except the Component func
 */

export default function Todo() {
  const [todo, setItem] = React.useState({
    title: "",
    description: "",
  });

  const handleClick = (e) => {
    const target = e.target;

    if (target.name === "title") {
      setItem({
        ...todo,
        title: target.value,
      });
    }

    if (target.name === "description") {
      setItem({
        ...todo,
        description: target.value,
      });
    }
  };

  const { title, description } = todo;

  return (
    <div>
      <p>{title}</p>

      <p>
        <input type="text" name="title" value={title} onChange={handleClick} />
      </p>

      <textarea
        name="description"
        value={description}
        onChange={handleClick}
      ></textarea>

      <hr />
    </div>
  );
}
