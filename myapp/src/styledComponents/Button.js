import React from "react";

export default function Button({ href, content }) {
  return (
    <a href={href} target="_blank">
      {content}
    </a>
  );
}
