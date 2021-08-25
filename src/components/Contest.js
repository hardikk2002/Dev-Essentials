import React, { useState } from "react";
import "regenerator-runtime/runtime.js";
const axios = require("axios");

const Contest = () => {
  // const [codechef, setCodechef] = useState(false);
  // const [codeforces, setCodeforces] = useState(false);
  // const [hackerearth, setHackerearth] = useState(false);
  // const [leetcode, setLeetcode] = useState(false);
  // const [hackerrank, setHackerrank] = useState(false);
  const [resourceName, setResourceName] = useState({});
  const [activeList, setActiveList] = useState("");

  async function contestListFetcher(resource) {
    try {
      const response = await fetch("http://localhost:5000/contest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resource: resource }),
      });
      const apiResponse = await response.json();
      setResourceName(apiResponse.objects);
      // console.log(resourceName);
    } catch (error) {
      console.log(error);
    }
  }

  function renderList(active) {
    switch (active) {
      case "codechef":
        return;

      case "codeforces":
        return;
      case "hackerearth":
        return;
      case "codechef":
        return;
      case "leetcode":
        return;
      case "hackerrank":
        return;
      default:
        return <h1>HIEHEIEHI</h1>;
    }
  }

  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>Coding Contests 🌈</h1>
      <div style={styles.platformDiv}>
        <div
          style={styles.platformInnerDiv}
          onClick={() => {
            contestListFetcher("codechef.com");
            setActiveList("codechef");
          }}
        >
          <img
            style={styles.platformLogo}
            src="https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg"
            alt="https://www.codechef.com/"
          />
        </div>
        <div
          style={styles.platformInnerDiv}
          onClick={() => {
            contestListFetcher("codeforces.com");
            setActiveList("codeforces");
          }}
        >
          <img
            style={styles.platformLogo}
            src="https://codeforces.org/s/85175/images/codeforces-logo-with-telegram.png"
            alt="https://codeforces.com/"
          />
        </div>
        <div
          style={styles.platformInnerDiv}
          onClick={() => {
            contestListFetcher("hackerearth.com");
            setActiveList("hackerearth");
          }}
        >
          <img
            style={styles.platformLogo}
            src="https://static-fastly.hackerearth.com/newton/production/static/images/common/he-header-logo.svg"
            alt="https://www.hackerearth.com/"
          />
        </div>
        <div
          style={styles.platformInnerDiv}
          onClick={() => {
            contestListFetcher("leetcode.com");
            setActiveList("leetcode");
          }}
        >
          <img
            style={styles.platformLogo}
            src="https://leetcode.com/static/packages/interview_landing/images/logo.svg"
            alt="https://leetcode.com/"
          />
        </div>
        <div
          style={styles.platformInnerDiv}
          onClick={() => {
            contestListFetcher("hackerrank.com");
            setActiveList("hackerrank");
          }}
        >
          <img
            style={styles.platformLogo}
            src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
            alt="https://www.hackerrank.com/"
          />
        </div>
      </div>
      <div style={styles.listOuterContainer}>{renderList({ activeList })}</div>
    </div>
  );
};

export default Contest;

const styles = {
  main: {
    width: "420px",
    height: "570px",
    background: "#f9fafc",
    overflow: "auto",
    boxSizing: "border-box",
  },
  headerTitle: {
    fontSize: 18,
    color: "#252429",
    margin: "2% auto 0 auto",
    padding: "3%",
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
    transform: "skew(-12deg)",
    background: "#f0dab1",
    width: "80%",
    height: "30px",
    borderRadius: "7px",
  },
  platformDiv: {
    display: "flex",
    justifyContent: "center",
  },
  platformInnerDiv: {
    cursor: "pointer",
    margin: "3% 1%",
    padding: "1%",
    width: "60px",
    height: "45px",
    background: "#ffff",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  platformLogo: {
    width: "60px",
    height: "20px",
  },
  listOuterContainer: {
    height: "68%",
    padding: "2% 3%",
    overflow: "auto",
    border: "2px solid red",
  },
  listContainer: {
    height: "72%",
    padding: "2% 3%",
    textDecoration: "underline 2px rgba(248,252,251,.582)",
  },
};
