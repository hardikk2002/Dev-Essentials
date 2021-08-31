import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import QueueIcon from "@material-ui/icons/Queue";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Blogs from "./Blogs.js";
import Todo from "./Todo.js";
import Contest from "./Contest.js";
import News from "./News.js";
import MoreInfo from "./MoreInfo.js";

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

          <Link to="contest" style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.news }}>
                <ChromeReaderModeIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}>Coding Contests 🧑‍💻</h1>
            </div>
          </Link>
          <Link to="news" style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.music }}>
                <AcUnitIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}>Tech Hunt 🌈</h1>
            </div>
          </Link>
          <Link to="info" style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={{ ...styles.icon, ...styles.wod }}>
                <QueueIcon />
              </div>
            </div>
            <div style={styles.info}>
              <h1 style={styles.title}> +1 more thing 😋</h1>
            </div>
          </Link>
        </div>
        <div style={styles.gitWebContainer}>
          <a
            style={styles.gitContainer}
            href="https://github.com/hardikk2002/Dev-Essentials"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐ Star on Github
          </a>
          {/* <Link to="info" style={styles.moreInfoContainer}>
            🖤
          </Link> */}
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
          <Route exact path="/contest">
            <Contest />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/info">
            <MoreInfo />
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
    margin: "5% auto 2% auto",
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
    width: "80%",
    height: "auto",
    padding: "3%",
    margin: "3% auto",
    borderRadius: "7px",
    display: "flex",
    cursor: "pointer",
    textDecoration: "none",
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
  gitWebContainer: {
    padding: "3% 0%",
    width: "85%",
    margin: "2% auto 5% auto",
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
  moreInfoContainer: {
    fontWeight: 500,
    textDecoration: "none",
    border: "2px solid #353535",
    padding: "2.5%",
    color: "#353535",
    margin: "auto 1%",
    borderRadius: "7px",
    fontSize: 16,
    fontFamily: "'Rubik', sans-serif",
  },
};

export default Popup;
