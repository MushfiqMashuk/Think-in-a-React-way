import React from "react";

function Title() {
  console.log("Title Rendered");
  return <h1>useCallback Exmple</h1>;
}

export default React.memo(Title); // React will cache or memorize this component. Then we can stop rerender unnecessary components // Only when props or state changes, then a component can rerender.
