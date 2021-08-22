import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import QueueIcon from "@material-ui/icons/Queue";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// import Blogs from "./blogs";
import Blogs from "./Blogs.js";
import Todo from "./Todo.js";

function Popup() {
  return (
    <Router>
      <div style={styles.main}>
        <h1 style={styles.headerTitle}>Dev Essentials</h1>
        <div style={styles.optionsList}>
          <Link to="blogs" style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.blog }}>
                <LibraryBooksIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}>Blog Space 😍</h1>
            </div>
          </Link>

          <Link to="todo" style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.todo }}>
                <AssignmentTurnedInIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}>Task List 🎯</h1>
            </div>
          </Link>

          <div style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.wod }}>
                <QueueIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}> Word of the day! 😋</h1>
            </div>
          </div>
          <div style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.news }}>
                <ChromeReaderModeIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}>News Lab 🌈</h1>
            </div>
          </div>
          <div style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.music }}>
                <PlayCircleFilledIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}>Music & Chill 🎧</h1>
            </div>
          </div>
        </div>
        <div style={styles.footer}>
          <h1>
            Login?{" "}
            <span style={{ cursor: "pointer" }}>
              {" "}
              🥳
              <SettingsIcon />
            </span>{" "}
          </h1>
        </div>
        <Switch>
          <Route exact path="/popup">
            <Popup />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/todo">
            <Todo />
          </Route>
          <Route exact path="/">
            <Redirect to="/options.html" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const styles = {
  main: {
    width: "420px",
    height: "570px",
    background: "#f9fafc",
    overflow: "auto",
    boxSizing: "border-box",
  },
  headerTitle: {
    fontSize: 30,
    color: "#252429",
    fontWeight: 400,
    margin: "5% auto",
    padding: "1%",
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
    transform: "skew(-12deg)",
    background: "#f0dab1",
    width: "80%",
    borderRadius: "7px",
  },
  optionsList: {
    overflow: "auto",
    height: "73%",
  },
  optionItem: {
    background: "rgba(248,252,251,.582)",
    boxShadow: "2px 2px 1px #e0e6edcc",
    width: "85%",
    height: "50px",
    padding: "2%",
    margin: "3% auto",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",
    textDecoration: "none",
    ":hover": {},
  },
  iconBackground: {
    width: "20%",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "42px",
    width: "42px",
    color: "white",
    margin: "auto",
    borderRadius: "7px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  blog: { background: "#e1306c" }, //red
  todo: { background: "#1da1f2" }, // blue
  news: { background: "#ff8c37" }, // orange
  wod: { background: "#a633d6" }, // purple
  music: { background: "#33d6a6" }, // green
  info: {
    padding: "2% 3%",
    width: "80%",
    lineHeight: "5px",
    margin: "auto 0",
    // border: "1px solid orange",
    fontFamily: "'Rubik', sans-serif",
  },
  title: {
    fontSize: 18,
    color: "#252429",
    fontWeight: 500,
    fontFamily: "'Rubik', sans-serif",
  },
  para: {
    fontSize: 15,
    fontWeight: 400,
  },
  footer: {
    fontWeight: 300,
    fontSize: 9,
    fontFamily: "'Rubik', sans-serif",
    textAlign: "center",
    marginTop: "-3%",
  },
};

export default Popup;
