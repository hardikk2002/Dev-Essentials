import React from "react";

const MoreInfo = () => {
  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>More about Us 🧑</h1>
      <div style={styles.upperHalf}>
        <p>
          I will keep you updated with the latest happenings, upcoming contests
          and, new tech innovations.🌈
        </p>
      </div>
      <div style={styles.communityButton}>
        <a
          style={styles.moreInfoContainer}
          href={chrome.runtime.getURL("options.html")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our community 🖤 now
        </a>
      </div>
      <div style={styles.upperHalf}>
        <p>and avail these benefits,</p>
        <li>
          🥸 <strong>Full usage Guide</strong>
        </li>
        <li>
          🌔 <strong>Info about APIs used</strong>
        </li>
        <li>
          🤙 <strong>Developer Support</strong>
        </li>
        <li>
          🙌 <strong>Community Chat support</strong>
        </li>
        <li>
          🐛 <strong>Report bugs | Request Features</strong>
        </li>
        <li>
          <strong>and much more...</strong>
        </li>
      </div>

      <div style={styles.gitWebContainer}>
        <pre>Fuel up my motivation, give me a favour, Thanks 😊</pre>

        <a
          style={styles.gitContainer}
          href="https://github.com/hardikk2002/Dev-Essentials"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⭐ Star on Github
        </a>
        <a
          style={styles.moreInfoContainer}
          href=" https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fhardikk2002%2FDev-Essentials&via=%40hardikk2002&text=Check%20out%20Dev%20Essentials%2C%20It%20will%20keep%20you%20updated%20with%20the%20latest%20happenings%20and%20contests%2C%20so%20that%20you%20will%20never%20miss%20the%20opportunities.&hashtags=devcommunity%2C%20hashnode%2C%20productivity%2C%20opensource"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐦 Share a word
        </a>
      </div>
    </div>
  );
};

export default MoreInfo;

const styles = {
  main: {
    maxWidth: "420px",
    height: "570px",
    background: "#f9fafc",
    boxSizing: "border-box",
  },
  headerTitle: {
    fontSize: 18,
    color: "#252429",
    margin: "2% auto 5% auto",
    padding: "3%",
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
    transform: "skew(-12deg)",
    background: "#f0dab1",
    width: "70%",
    height: "30px",
    borderRadius: "7px",
  },
  upperHalf: {
    padding: "1% 7%",
    fontWeight: 400,
    lineHeight: "1.3rem",
    fontSize: 15,
    color: "#252429",
    marginTop: "0",
    fontFamily: "'Rubik', sans-serif",
    listStyleType: "none",
  },
  communityButton: {
    padding: "3% 0%",
    width: "85%",
    margin: "1% auto",
    textAlign: "center",
  },
  gitContainer: {
    fontWeight: 500,
    textDecoration: "none",
    background: "#353535",
    padding: "3%",
    color: "#f9fafc",
    margin: "auto 1%",
    borderRadius: "7px",
    fontSize: 16,
    fontFamily: "'Rubik', sans-serif",
  },
  gitWebContainer: {
    textAlign: "center",
    padding: "3%",
    margin: "auto",
    lineHeight: "2.4rem",
    fontSize: 12,
  },
  moreInfoContainer: {
    cursor: "pointer",
    fontWeight: 500,
    textDecoration: "none",
    border: "2px solid #353535",
    padding: "2.5%",
    color: "#353535",
    margin: "1%",
    borderRadius: "7px",
    fontSize: 16,
    fontFamily: "'Rubik', sans-serif",
  },
};
