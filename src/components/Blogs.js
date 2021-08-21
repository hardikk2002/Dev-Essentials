import React, { useState } from "react";

function Blogs() {
  const [hashnode, setHashnode] = useState(true);
  const [devto, setDevto] = useState(false);
  const [github, setGithub] = useState(false);

  const hashnodeFetcher = () => {
    setHashnode(true);
    setDevto(false);
    setGithub(false);
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>
        Get latest posts from your favourite platforms!
      </h1>
      <div style={styles.platformDiv}>
        <div style={styles.platformInnerDiv} onClick={hashnodeFetcher}>
          <img
            style={styles.platformLogo}
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
            alt="https://hashnode.com/"
          />
        </div>
        <div style={styles.platformInnerDiv}>
          <img
            style={styles.platformLogo}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png"
            alt="https://dev.to/"
          />
        </div>
        <div style={styles.platformInnerDiv}>
          <img
            style={styles.platformLogo}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="https://github.com/"
          />
        </div>
      </div>
      <div style={styles.postsContainer}></div>
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
  headerTitle: {
    fontSize: 20,
    color: "#252429",
    fontWeight: 700,
    margin: "1% auto",
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
    transform: "skew(-12deg)",
    background: "#f0dab1",
    width: "80%",
    borderRadius: "7px",
  },
  platformDiv: {
    display: "flex",
    justifyContent: "center",
  },
  platformInnerDiv: {
    cursor: "pointer",
    margin: "3%",
    width: "45px",
    height: "45px",
    background: "#ffff",
    boxShadow: "2px 2px 1px #f0dab1",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  platformLogo: {
    width: "25px",
    height: "25px",
  },
  postsContainer: {
    border: "2px solid red",
    height: "72%",
    padding: "3%",
  },
};

export default Blogs;
