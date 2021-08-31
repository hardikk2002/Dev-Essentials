import React, { useState } from "react";
import "regenerator-runtime/runtime.js";

const Contest = () => {
  const [contestList, setcontestList] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  async function contestListFetcher(resource) {
    setLoading(true);

    var currentTime = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    setCurrentDate(currentTime);

    try {
      const response = await fetch(
        "https://devessential.herokuapp.com/api/contest",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resource: resource }),
        }
      );
      const apiResponse = await response.json();
      setcontestList(apiResponse.objects);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>Coding Contests 🧑‍💻</h1>
      <div style={styles.platformDiv}>
        <div
          style={styles.platformInnerDiv}
          onClick={() => {
            contestListFetcher("codechef.com");
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
            contestListFetcher("ctftime.org");
          }}
        >
          <img
            style={styles.platformLogo}
            src="https://ctftime.org/static/images/ct/logo.svg"
            alt="https://ctftime.org/"
          />
        </div>
      </div>
      <div style={styles.listOuterContainer}>
        {loading === true ? (
          <div style={styles.prePostsContent}>
            <h2>Fetching Upcoming contests 🏄🏼‍♂️</h2>
          </div>
        ) : (
          <>
            {!contestList[0] ? (
              <div style={styles.prePostsContent}>
                <h3>
                  Upcoming and Ongoing contests from your Favourite ❤️
                  Platforms!
                </h3>
                <br />
                <h4>🟠 Upcomming Contests and Challenges</h4>
                <h4>🟢 Ongoing | Past Contests and Challenges</h4>
                <br />
                <center>Codechef.com | Codeforces.com | Hackerearth.com</center>

                <center>Leetcode.com | CTFtime.org</center>

                <br />
              </div>
            ) : (
              <>
                <div style={styles.postOuterContainer}>
                  {contestList.map((post, id) => {
                    return (
                      <a
                        key={id}
                        style={styles.postsContainer}
                        href={post.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div style={styles.postContent}>
                          <div style={styles.postInfo}>
                            <h3 style={styles.postTitle}>
                              {post.event}{" "}
                              {currentDate <
                              post.start.slice(0, 10).replace(/-/g, "/")
                                ? "🟠"
                                : "🟢"}
                            </h3>
                            <p style={styles.postTiming}>
                              <strong>Start: </strong>{" "}
                              {post.start.slice(11, 19)}
                              {",  "}
                              {"  "}
                              {post.start.slice(0, 10).replace(/-/g, "/")}
                            </p>
                            <p style={styles.postTiming}>
                              <strong>End: </strong> {post.end.slice(11, 19)}
                              {",  "}
                              {"  "}
                              {post.end.slice(0, 10).replace(/-/g, "/")}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Contest;

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
    margin: "2% auto 0 auto",
    padding: "3%",
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
    transform: "skew(-12deg)",
    background: "#f0dab1",
    width: "70%",
    height: "30px",
    borderRadius: "7px",
  },
  platformDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  platformInnerDiv: {
    cursor: "pointer",
    margin: "3% 1%",
    width: "70px",
    height: "45px",
    background: "#ffff",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  platformLogo: {
    width: "80%",
    transform: "scale(1.2)",
  },
  listOuterContainer: {
    height: "68%",
    padding: "2% 3%",
  },
  listContainer: {
    height: "72%",
    padding: "2% 3%",
  },
  postsContainer: {
    height: "72%",
    padding: "2%",
    textDecoration: "underline 2px rgba(248,252,251,.582)",
  },
  postContent: {
    width: "90%",
    height: "auto",
    padding: "3%",
    background: "rgba(248,252,251,.582)",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    margin: "1% auto",
  },
  postInfo: {
    width: "100%",
    height: "auto",
    padding: "3%",
  },
  postTitle: {
    fontWeight: 500,
    fontSize: 18,
    color: "#252429",
    marginTop: "0",
    fontFamily: "'Rubik', sans-serif",
  },
  postTiming: {
    margin: "0",
    fontSize: 15,
    color: "#252429",
    fontFamily: "'Rubik', sans-serif",
  },
  prePostsContent: {
    margin: "auto",
    width: "90%",
    fontWeight: 500,
    fontSize: 15,
    color: "#252429",
    fontFamily: "'Rubik', sans-serif",
  },
};
