import React from "react";

function Todo() {
  return (
    <div style={styles.main}>
      <h1>I am TODOO page </h1>
    </div>
  );
}

const styles = {
  main: {
    maxWidth: "420px",
    height: "570px",
    background: "#f9fafc",
    overflow: "auto",
    boxSizing: "border-box",
  },
};

export default Todo;
