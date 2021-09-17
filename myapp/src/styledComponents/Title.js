import React from "react";

// any dynamic css property can be recieved by props.className 

export default function Title({ className, text }) {
  return <span className={className}>{text}</span>;
}
