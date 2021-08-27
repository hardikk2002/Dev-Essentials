import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const emptyArr = [];
const News = () => {
  const [loading, setLoading] = useState(false);
  const [apple, setApple] = useState(false);
  const [tesla, setTesla] = useState(false);
  const [keySearch, setKeySearch] = useState(false);

  const [searchKey, setSearchKey] = useState("");
  const [errorHandle, setErrorHandle] = useState("");

  const [newsList, setNewsList] = useState([]);
  const [appleList, setAppleList] = useState([]);
  const [teslaList, setTeslaList] = useState([]);

  async function listFetcherApple() {
    setLoading(true);
    setApple(true);
    setTesla(false);
    setKeySearch(false);
    try {
      const response = await fetch("http://localhost:5000/news-apple");
      const apiResponse = await response.json();
      {
        apiResponse === "error"
          ? setErrorHandle("Taking time to fetch, try later 🟠")
          : setAppleList(apiResponse);
      }

      // console.log(appleList);
      setLoading(false);
    } catch (error) {}
  }

  async function listFetcherTesla() {
    setLoading(true);
    setApple(false);
    setTesla(true);
    setKeySearch(false);
    try {
      const response = await fetch("http://localhost:5000/news-tesla");
      const apiResponse = await response.json();
      {
        apiResponse === "error"
          ? setErrorHandle("Taking time to fetch, try later 🟠")
          : setTeslaList(apiResponse);
      }
      // console.log(teslaList);
      setLoading(false);
    } catch (error) {
      setErrorHandle("Taking time to fetch, try later 🟠");
    }
  }

  async function newsListFetcher() {
    setLoading(true);
    setApple(false);
    setTesla(false);
    setKeySearch(true);

    // var currentTime = new Date().toJSON().slice(0, 10);
    if (searchKey !== "") {
      try {
        const response = await fetch("http://localhost:5000/news-keyword", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resource: searchKey,
          }),
        });

        const apiResponse = await response.json();
        {
          apiResponse === "error"
            ? setErrorHandle("Taking time to fetch, try later 🟠")
            : setNewsList(apiResponse);
        }

        // console.log(newsList);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    }
  }

  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>News Lab 🌈</h1>
      <div style={styles.platformDiv}>
        <div style={styles.platformInnerDiv} onClick={listFetcherApple}>
          <img
            style={styles.platformLogo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png"
            alt="https://www.apple.com/in/"
          />
        </div>
        <div style={styles.platformInnerDiv} onClick={listFetcherTesla}>
          <img
            style={styles.platformLogo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/800px-Tesla_Motors.svg.png"
            alt="https://www.tesla.com/"
          />
        </div>

        <div style={styles.searchKey}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              newsListFetcher();
            }}
          >
            <input
              style={styles.taskInput}
              type="text"
              // value={searchKey}
              placeholder="Enter a keyword..."
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button type="submit" style={styles.searchKeyIcon}>
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <div style={styles.postsContainer}>
        {appleList[0] && apple ? (
          <>
            {loading === true ? (
              <div>
                <h2>Fetching best posts for you 🏄🏼‍♂️</h2>
              </div>
            ) : (
              <div style={styles.postOuterContainer}>
                {appleList.map((post, index) => {
                  return (
                    <a
                      key={index}
                      style={styles.postsContainer}
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div style={styles.postContent}>
                        <img
                          style={styles.postImage}
                          src={post.urlToImage}
                          alt="cover-img"
                        />
                        <div style={styles.postInfo}>
                          <h3 style={styles.postTitle}>{post.title}</h3>
                          <p style={styles.postAuther}>✍️ {post.author}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </>
        ) : teslaList[0] && tesla ? (
          <>
            {loading === true ? (
              <div>
                <h2>Fetching best posts for you 🏄🏼‍♂️</h2>
              </div>
            ) : (
              <div style={styles.postOuterContainer}>
                {teslaList.map((post, index) => {
                  return (
                    <a
                      key={index}
                      style={styles.postsContainer}
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div style={styles.postContent}>
                        <img
                          style={styles.postImage}
                          src={post.urlToImage}
                          alt="cover-img"
                        />
                        <div style={styles.postInfo}>
                          <h3 style={styles.postTitle}>{post.title}</h3>
                          <p style={styles.postAuther}>✍️ {post.author}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </>
        ) : newsList[0] && keySearch ? (
          <>
            {loading === true ? (
              <div>
                <h2>Fetching best posts for you 🏄🏼‍♂️</h2>
              </div>
            ) : (
              <div style={styles.postOuterContainer}>
                {newsList.map((post, index) => {
                  return (
                    <a
                      key={index}
                      style={styles.postsContainer}
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div style={styles.postContent}>
                        <img
                          style={styles.postImage}
                          src={post.urlToImage}
                          alt="cover-img"
                        />
                        <div style={styles.postInfo}>
                          <h3 style={styles.postTitle}>{post.title}</h3>
                          <p style={styles.postAuther}>✍️ {post.author}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </>
        ) : { errorHandle } ? (
          `${errorHandle}`
        ) : (
          "Nothing"
        )}
      </div>
    </div>
  );
};

export default News;

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
    width: "80%",
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
    width: "50px",
    height: "50px",
    background: "#ffff",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  platformLogo: {
    width: "80%",
    height: "80%",
  },
  searchKey: {
    cursor: "pointer",
    margin: "3% 1%",
    maxWidth: "70%",
    height: "50px",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid red",
  },
  taskInput: {
    height: "40px",
    padding: " 0 10px",
    margin: "auto",
    outline: "none",
    background: "#ffff",
    color: "#252429",
    fontWeight: 600,
    fontFamily: "'Rubik', sans-serif",
    border: "3px solid #e0e6edcc",
    borderRadius: "28px",
  },
  searchKeyIcon: {
    background: "#aaaaaac4",
    border: "none",
    color: "#ffff",
    padding: "1%",
    margin: "1% 0 0 1%",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "2% auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  postsContainer: {
    height: "72%",
    padding: "2% 3%",
    textDecoration: "underline 2px rgba(248,252,251,.582)",
  },
};
