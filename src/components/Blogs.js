import React from "react";

function Blogs() {
  return (
    <div style={styles.main}>
      <h1>I am blog page</h1>
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

export default Blogs;
