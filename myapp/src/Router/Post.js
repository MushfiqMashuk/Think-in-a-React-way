import React from "react";

export default function Post({match}) {
console.log(match);
const {params} = match;
  return (
    <div>
      <h1>This is {params.category} page and {params.topic} is a framework</h1>
    </div>
  );
}
