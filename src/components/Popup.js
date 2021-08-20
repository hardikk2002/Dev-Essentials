import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const arrayList = [1, 2, 3, 4, 5, 6, 7, 8];

function Popup() {
  return (
    <div style={styles.main}>
      <h1>Dev Essentials</h1>
      <div style={styles.optionsList}>
        {arrayList.map((item) => (
          <div style={styles.optionItem}>
            <div style={styles.iconBackground}>
              <div style={styles.icon}>
                <LibraryBooksIcon />
              </div>
            </div>

            <div style={styles.info}>
              <h1 style={styles.title}>Tite</h1>
              <p style={styles.para}>This is lovebly Para para</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  main: {
    width: "420px",
    height: "600px",
    background: "#f9fafc",
    border: "2px solid red",
    overflow: "auto",
    boxSizing: "border-box",
  },
  optionItem: {
    background: "#e0e6ed",
    width: "85%",
    height: "70px",
    padding: "3%",
    margin: "3% auto",
    borderRadius: "7px",
    display: "flex",
  },
  iconBackground: {
    width: "20%",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "45px",
    width: "45px",
    color: "white",
    margin: "auto",
    background: "#e1306c",
    borderRadius: "7px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  info: {
    padding: "2% 3%",
    width: "80%",
    lineHeight: "5px",
    margin: "auto 0",
    // border: "1px solid orange",
    fontFamily: "'Rubik', sans-serif",
  },
  title: {
    fontSize: 25,
    color: "#252429",
    fontWeight: 600,
  },
  para: {
    fontSize: 15,
    fontWeight: 400,
  },
};

export default Popup;
