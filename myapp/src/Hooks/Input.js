import React from "react";

function Input({ type, placeholder }, refe) {
  return <input ref={refe} type={type} placeholder={placeholder} />;
}

const forwarded = React.forwardRef(Input);

console.log(forwarded);

export default forwarded;
