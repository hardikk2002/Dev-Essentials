import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime.js";
import { ThreeDots } from "svg-loaders-react";

const query = `{
    storiesFeed(type:BEST)
        {
            title,
            author
            {
                name,
                username,
                blogHandle,
                publicationDomain,
            },
            coverImage,
            brief,
            slug,
            cuid, 
        }
    }
  `;

function Blogs() {
  const [hashnode, setHashnode] = useState(false);
  const [devto, setDevto] = useState(false);
  const [github, setGithub] = useState(false);

  const [hashnodePosts, setHashnodePosts] = useState([]);
  const [devtoPosts, setDevtoPosts] = useState([]);
  const [githubPosts, setGithubPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  async function hashnodeFetcher() {
    setLoading(true);
    setHashnode(true);
    setDevto(false);
    setGithub(false);
    try {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const apiResponse = await response.json();
      setHashnodePosts(apiResponse.data.storiesFeed);
      setLoading(false);
      console.log(hashnodePosts);
    } catch (error) {
      console.log(error);
    }
  }

  async function devtoFetcher() {
    setLoading(true);
    setHashnode(false);
    setDevto(true);
    setGithub(false);
    try {
      const response = await fetch("https://dev.to/api/articles", {
        headers: {
          "Content-type": "application/json",
        },
      });
      const apiResponse = await response.json();
      setDevtoPosts(apiResponse);
      setLoading(false);
      console.log(devtoPosts);
    } catch (error) {
      console.log(error);
    }
  }

  async function githubFetcher() {
    setHashnode(false);
    setDevto(false);
    setGithub(true);

    const response = await fetch(
      "https://gtrend.yapie.me/repositories?since=daily"
    );
    const trendingRepos = await response.json();
    console.log(trendingRepos);

    setGithubPosts(trendingRepos);
  }

  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>Top posts from your ❤️ platforms!</h1>
      <div style={styles.platformDiv}>
        <div style={styles.platformInnerDiv} onClick={hashnodeFetcher}>
          <img
            style={styles.platformLogo}
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
            alt="https://hashnode.com/"
          />
        </div>
        <div style={styles.platformInnerDiv} onClick={devtoFetcher}>
          <img
            style={styles.platformLogo}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png"
            alt="https://dev.to/"
          />
        </div>
        <div style={styles.platformInnerDiv} onClick={githubFetcher}>
          <img
            style={styles.platformLogo}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="https://github.com/"
          />
        </div>
      </div>
      <div style={styles.postsContainer}>
        {hashnode ? (
          <>
            {loading === true ? (
              <div style={{ margin: "35%" }}>
                <ThreeDots fill="#6366F1" />
              </div>
            ) : (
              <div style={styles.postOuterContainer}>
                {hashnodePosts.map((post) => {
                  return (
                    <a
                      style={styles.postsContainer}
                      href={`https://${
                        post.author.publicationDomain === ""
                          ? post.author.blogHandle + ".hashnode.dev/"
                          : post.author.publicationDomain + "/"
                      }${post.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div style={styles.postContent}>
                        <img
                          style={styles.postImage}
                          src={
                            post.coverImage === ""
                              ? "https://picsum.photos/seed/picsum/200/150"
                              : post.coverImage
                          }
                          alt="cover-img"
                        />
                        <div style={styles.postInfo}>
                          <h3 style={styles.postTitle}>
                            {post.title.substr(0, 70)}...
                          </h3>
                          <p style={styles.postAuther}>
                            By: {post.author.name.split(" ")[0]}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <>
            {devto ? (
              <>
                {loading === true ? (
                  <div style={{ margin: "35%" }}>
                    <ThreeDots fill="#6366F1" />
                  </div>
                ) : (
                  <div style={styles.postOuterContainer}>
                    {devtoPosts.map((post) => {
                      return (
                        <a
                          style={styles.postsContainer}
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={styles.postContent}>
                            <img
                              style={styles.postImage}
                              src={
                                post.social_image === ""
                                  ? "https://picsum.photos/seed/picsum/200/150"
                                  : post.social_image
                              }
                              alt="cover-img"
                              className="rounded"
                            />
                            <div style={styles.postInfo}>
                              <h3 style={styles.postTitle}>
                                {post.title.substr(0, 70)} ...
                              </h3>
                              <p style={styles.postAuther}>
                                By: {post.user.name.split(" ")[0]}
                              </p>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <>
                {github ? (
                  <>
                    {" "}
                    <div style={styles.postsContainer}>
                      {githubPosts.map((repo) => {
                        return (
                          <div>
                            <a
                              style={styles.postsContainer}
                              href={repo.url}
                              target="-blank"
                              rel="noreffer"
                            >
                              <h3 className="text-xl font-semibold text-blue-500">
                                {repo.name}
                              </h3>
                              <span className="text-md">
                                {repo.description}
                              </span>

                              <div className="flex flex-row my-2">
                                <div className="flex mr-2 text-sm">
                                  <div
                                    className="m-1 h-4 w-4 rounded-full"
                                    style={{
                                      backgroundColor: `${repo.languageColor}`,
                                    }}
                                  ></div>
                                  <span className="m-1">{repo.language}</span>
                                </div>
                                {/* <div className="flex mr-2">
                                    <img
                                      src={starIcon}
                                      alt="star"
                                      className="m-1 h-4 w-4"
                                    />
                                    <span>{repo.stars}</span>
                                  </div>
                                  <div className="flex mr-2">
                                    <img
                                      src={forkIcon}
                                      alt="fork"
                                      className="m-1 h-4 w-4"
                                    />
                                    <span className="mx-2">{repo.forks}</span>
                                  </div> */}
                              </div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  "Nothing to show!"
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

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
  },
  platformInnerDiv: {
    cursor: "pointer",
    margin: "3%",
    width: "45px",
    height: "45px",
    background: "#ffff",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  platformLogo: {
    width: "25px",
    height: "25px",
  },
  postOuterContainer: {
    height: "95%",
    padding: "2% 3%",
    overflow: "auto",
  },
  postsContainer: {
    height: "72%",
    padding: "2% 3%",
    textDecoration: "underline 2px rgba(248,252,251,.582)",
  },
  postContent: {
    width: "100%",
    height: "100px",
    background: "rgba(248,252,251,.582)",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    marginBottom: "2%",
  },
  postImage: {
    width: "30%",
    height: "70px",
    margin: "auto 2% auto 3%",
    borderRadius: "7px",
    boxShadow: "2px 2px 5px #e0e6edcc",
  },
  postInfo: {
    width: "60%",
    height: "70px",
    padding: "2%",
  },
  postTitle: {
    fontWeight: 400,
    fontSize: 15,
    color: "#252429",
    marginTop: "0",
    fontFamily: "'Rubik', sans-serif",
  },
  postAuther: {
    margin: "0",
    fontSize: 12,
    textAlign: "right",
    color: "#252429",
    fontFamily: "'Rubik', sans-serif",
  },
};

export default Blogs;
