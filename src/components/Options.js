import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth0 } from "@auth0/auth0-react";
// import ScrollToBottom from "react-scroll-to-bottom";

const socket = io("https://devessential.herokuapp.com/");

const Options = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", (payload) => {
      setChat([...chat, payload]);
    });
    socket.on("DB-messages", (payload) => {
      if (payload.length) {
        payload.map((msg) => {
          chat.push({ userName: msg.name, message: msg.message });
        });
      }
    });
  });

  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  if (isLoading) return <div>Hang on...</div>;

  function sendMessage(e) {
    const userName = user.name;
    e.preventDefault();
    socket.emit("message", { userName, message });
    setMessage("");
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <div style={styles.optionHeader}>
            <div style={styles.headerBar}>
              <h1 style={styles.headerTitle}>
                Dev Essentials
                <span style={{ color: "#f75858", fontSize: 30 }}>.</span>
              </h1>
              <div style={styles.headerLinks}>
                <p>Blog</p>
                &nbsp; &nbsp; &nbsp;
                <p>Github</p>
                &nbsp; &nbsp; &nbsp;
                <p>Chat</p>
              </div>

              <button style={styles.logoutButton} onClick={() => logout()}>
                Logout
              </button>
            </div>
            <div style={styles.headerContainer}>
              <div style={styles.headerLeft}>
                <p style={styles.headerTag}>Stay Updated, Stay Informed...</p>
                <h1 style={styles.headerText}>
                  I will keep you updated with the latest happenings, upcoming
                  contests and, new tech innovations.😋
                </h1>
                <a
                  style={styles.readMoreButton}
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>

              <img
                style={styles.headerImages1}
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1630264393567/5wESuIll8.png"
                alt="ss1"
              />
              <img
                style={styles.headerImages2}
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1630265661012/-5kDb280e.png"
                alt="ss2"
              />
              <img
                style={styles.headerImages3}
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1630265797830/I4IMeOD9s.png"
                alt="ss3"
              />
            </div>
          </div>
          <div
            style={{ background: "linear-gradient(to bottom, #ffff, #eee)" }}
          >
            <div style={styles.optionYoutube}>
              <iframe
                style={styles.videoPlayer}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bJpj4mb8Ydk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div style={styles.videoText}>
                <br />
                <h1 style={{ fontSize: 34 }}>
                  <span style={{ textDecoration: "underline wavy #f75858" }}>
                    Sample Space
                  </span>
                  👽
                </h1>

                <p style={{ color: "black", margin: "7% auto" }}>
                  Open Source ❤️ Chrome Extension Build for Developers by
                  Developer. 💎
                </p>

                <a
                  style={styles.readMoreButton}
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check On Github
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ background: "linear-gradient(to bottom, #eee, #ffff)" }}
          >
            <div style={styles.chatForum}>
              <div style={styles.chatText}>
                <p style={styles.headerTag}>Community Forums</p>
                <h1 style={styles.headerText}>
                  Discuss, Report Bugs and give your Feedback. 🎁
                </h1>
                <a
                  style={styles.moreInfoContainer}
                  href=" https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fhardikk2002%2FDev-Essentials&via=%40hardikk2002&text=Check%20out%20Dev%20Essentials%2C%20It%20will%20keep%20you%20updated%20with%20the%20latest%20happenings%20and%20contests%2C%20so%20that%20you%20will%20never%20miss%20the%20opportunities.&hashtags=devcommunity%2C%20hashnode%2C%20productivity%2C%20opensource"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐦 Share a word
                </a>
              </div>
              <div style={styles.messageForm}>
                <form onSubmit={sendMessage}>
                  <input
                    style={styles.messageInput}
                    type="text"
                    name="message"
                    placeholder="Type message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    required
                  ></input>
                  <button type="submit" style={styles.sendButton}>
                    Send
                  </button>
                </form>
                <div style={styles.chatContainer}>
                  {chat.map((payload, index) => {
                    return (
                      <p key={index}>
                        <span
                          style={{
                            fontFamily: "'Rubik', sans-serif",
                            fontWeight: "500",
                            fontSize: 12,
                          }}
                        >
                          {payload.userName}:
                        </span>{" "}
                        <span
                          style={{
                            fontFamily: "'Rubik', sans-serif",
                            fontWeight: "400",
                          }}
                        >
                          {payload.message}
                        </span>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        loginWithRedirect()
      )}
    </>
  );
};
export default Options;

const styles = {
  optionHeader: {
    width: "100%",
    height: "570px",
    background: "linear-gradient(to bottom, #eee, #ffff)",
    boxSizing: "border-box",
  },
  headerBar: {
    fontFamily: "'Open Sans', sans-serif",
    boxShadow: "1px 2px 2px #e0e6edcc",
    maxWidth: "80%",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0% auto",
    padding: "0 3%",
  },
  headerTitle: {
    fontSize: 27,
    color: "#252429",
    fontWeight: 400,
  },
  headerLinks: {
    display: "flex",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "'Rubik', sans-serif",
    color: "#252429",
  },
  logoutButton: {
    fontSize: 16,
    fontWeight: 400,
    padding: "12px 12px",
    fontWeight: "bold",
    cursor: "pointer",
    outline: "none",
    color: "#fcfaf8",
    borderRadius: "20px",
    boxShadow: "0px 2px 2px #e0e6edcc",
    background: "#f75858",
    border: "none",
  },
  headerContainer: {
    maxWidth: "80%",
    display: "flex",
    justifyContent: "space-between",
    padding: "4% 3%",
    margin: "3% auto",
  },
  headerTag: {
    color: "#f75858",
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "'Rubik', sans-serif",
  },
  headerLeft: {
    width: "40%",
  },
  headerText: {
    lineHeight: "2.2rem",
    marginBottom: "10%",
    fontSize: 30,
    fontWeight: 600,
    fontFamily: "'Open Sans', sans-serif",
  },
  readMoreButton: {
    fontWeight: 500,
    textDecoration: "none",
    border: "2px solid #353535",
    padding: "2.2%",
    color: "#353535",
    borderRadius: "7px",
    fontSize: 17,
    fontFamily: "'Rubik', sans-serif",
  },
  headerImages1: {
    height: "500px",
    position: "absolute",
    right: "20%",
    top: "27%",
    zIndex: "2",
    borderRadius: "11px",
    boxShadow: "0px 5px 10px #e0e6edcc",
  },
  headerImages2: {
    height: "450px",
    position: "absolute",
    transform: "skew(4deg)",
    right: "34%",
    top: "23%",
    zIndex: "1",
    borderRadius: "11px",
    boxShadow: "0px 5px 10px #e0e6edcc",
  },
  headerImages3: {
    height: "450px",
    position: "absolute",
    transform: "skew(-4deg)",
    right: "7%",
    top: "23%",
    zIndex: "1",
    borderRadius: "11px",
    boxShadow: "0px 5px 10px #e0e6edcc",
  },
  optionYoutube: {
    width: "100%",
    height: "470px",
    margin: "5% auto 0 auto",
    maxWidth: "80%",
    display: "flex",
    justifyContent: "space-between",
    padding: "4% 3%",
  },
  videoPlayer: {
    borderRadius: "11px",
    boxShadow: "5px 5px 5px #e0e6edcc",
    marginTop: "4%",
  },
  videoText: {
    margin: "10% 0% 0 0",
    color: "#f75858",
    textAlign: "center",
    lineHeight: "2.1rem",
    fontFamily: "'Open Sans', sans-serif",
  },
  chatForum: {
    maxWidth: "80%",
    display: "flex",
    justifyContent: "space-between",
    padding: "3%",
    margin: "auto",
  },

  chatText: {
    width: "40%",
  },
  messageForm: {
    height: "400px",
    width: "600px",
    boxShadow: "5px 5px 5px #e0e6edcc",
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
  messageInput: {
    height: "40px",
    padding: "0 10px",
    margin: "auto",
    width: "80%",
    outline: "none",
    background: "#ffff",
    color: "#252429",
    fontWeight: 600,
    fontFamily: "'Rubik', sans-serif",
    border: "3px solid #e0e6edcc",
    borderRadius: "20px",
  },
  sendButton: {
    fontSize: 14,
    fontWeight: 400,
    padding: "3%",
    margin: "0 1%",
    padding: "11px",
    fontWeight: "bold",
    cursor: "pointer",
    outline: "none",
    color: "#fcfaf8",
    borderRadius: "20px",
    boxShadow: "0px 2px 2px #e0e6edcc",
    background: "#f75858",
    border: "none",
  },
  chatContainer: {
    height: "300px",
    width: "100%",
    overflow: "auto",
    padding: "5% 0",
    flex: "auto",
  },
};
