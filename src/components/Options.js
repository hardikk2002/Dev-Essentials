import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Options = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  {
  }
  if (isLoading) return <div>Hang on...</div>;
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
                  Read more >>
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
          <div style={styles.optionYoutube}>
            <iframe
              style={styles.videoPlayer}
              width="700"
              src="https://www.youtube.com/embed/3SBltSuSvwg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
              ?
            </iframe>
            <div style={styles.videoText}>
              <h1>👆</h1>
              <br />
              <h1 style={{ fontSize: 34 }}>👈&nbsp;&nbsp; Sample Space 🌈👽</h1>
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
    background: "linear-gradient(to bottom, #ffff, #f7f7f7)",
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
    color: "#f75858",
    margin: "10% 3% 0 0",
    textAlign: "center",
    lineHeight: "0.5rem",
    fontFamily: "'Open Sans', sans-serif",
  },
};