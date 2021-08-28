import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== "") {
      var items = localStorage.getItem("todo-items");
      var itemsArrs = JSON.parse(items);
      var newItem = { text: `${value}` };
      itemsArrs.push(newItem);
      localStorage.setItem("todo-items", JSON.stringify(itemsArrs));
    }
    console.log(value);
    value && addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={styles.taskInput}
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" style={styles.todoIconAdd}>
        <AddIcon />
      </button>
    </form>
  );
};

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([]);
  };

  const removeTask = (index) => {
    var itemsArr = JSON.parse(localStorage.getItem("todo-items"));
    itemsArr.splice(index, 1);
    localStorage.setItem("todo-items", JSON.stringify(itemsArr));

    setTasks([]);
  };

  function fetchItems() {
    var items = localStorage.getItem("todo-items");

    if (items === null) {
      var newItem1 = { text: "Star this Project on Github 🌟" };
      var newItem2 = {
        text: "Will contribute to open source 😋",
      };
      var newItem3 = {
        text: "Start my bloging career 🔥",
      };
      var itemsArr = [];
      itemsArr.push(newItem1);
      itemsArr.push(newItem2);
      itemsArr.push(newItem3);
      localStorage.setItem("todo-items", JSON.stringify(itemsArr));
    }

    var items2 = localStorage.getItem("todo-items");
    var itemsArr2 = JSON.parse(items2);
    try {
      for (var i = 0; i < itemsArr2.length; i++) {
        tasks.push(itemsArr2[i]);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>Make comitments to yourself.🎯 </h1>
      <div style={styles.todoContainer}>
        <AddTaskForm addTask={addTask} />
        {fetchItems()}
        {tasks.map((task, index) => (
          <div style={styles.todoContent} key={index}>
            <span>{task.text}</span>
            <button style={styles.todoIcon} onClick={() => removeTask(index)}>
              <DeleteIcon style={{ fontSize: "1.2rem" }} />
            </button>
          </div>
        ))}
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
  todoContainer: {
    height: "auto",
    padding: "3%",
    textAlign: "center",
    margin: "5% 3%",
    borderRadius: "7px",
  },
  taskInput: {
    height: "40px",
    padding: " 0 10px",
    margin: "auto",
    width: "60%",
    outline: "none",
    background: "#ffff",
    color: "#252429",
    fontWeight: 600,
    fontFamily: "'Rubik', sans-serif",
    border: "3px solid #e0e6edcc",
    borderRadius: "28px",
    display: "flex",
  },
  todoIcon: {
    background: "#aaaaaac4",
    maxHeight: "1.5rem",
    border: "none",
    color: "#ffff",
    padding: "1%",
    margin: "1% 0 0 1%",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  todoIconAdd: {
    background: "#5bc0de",
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

  todoContent: {
    width: "80%",
    height: "auto",
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "'Rubik', sans-serif",
    margin: "4% auto",
    padding: "5%",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "7px",
    display: "flex",
    textAlign: "left",
    justifyContent: "space-between",
  },
};

export default Todo;
