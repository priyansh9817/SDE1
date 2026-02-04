import React from "react";

const Child = React.memo(function Child({ name }) {
  console.log("Child rendered");

  return <h3>Child Name: {name}</h3>;
});

export default Child;
