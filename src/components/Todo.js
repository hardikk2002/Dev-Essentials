import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <button type="submit" style={styles.todoIcon}>
        <AddIcon />
      </button>
    </form>
  );
};

function Todo() {
  const [tasks, setTasks] = useState([
    {
      text: "Star this Project on Github 🌟",
      isCompleted: false,
    },
    {
      text: "Will contribute to open source 😋",
      isCompleted: false,
    },
    {
      text: "Start my bloging carrier 🔥",
      isCompleted: false,
    },
  ]);

  const addTask = (text) => setTasks([...tasks, { text }]);

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.headerTitle}>Make comitments to yourself.🎯 </h1>
      <div style={styles.todoContainer}>
        <AddTaskForm addTask={addTask} />
        {tasks.map((task, index) => (
          <div style={styles.todoContent}>
            <span>{task.text}</span>
            <button
              style={styles.todoIconDel}
              onClick={() => removeTask(index)}
            >
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
    overflow: "auto",
    height: "85%",
    textAlign: "center",
    margin: "5% 3%",
    borderRadius: "7px",
  },
  taskInput: {
    height: "40px",
    padding: " 0 10px",
    width: "60%",
    outline: "none",
    background: "#ffff",
    color: "#252429",
    fontWeight: 600,
    fontFamily: "'Rubik', sans-serif",
    border: "3px solid #e0e6edcc",
    borderRadius: "28px",
  },
  todoIcon: {
    background: "#aaaaaac4",
    border: "none",
    color: "#ffff",
    margin: "1% 0 0 1%",
    borderRadius: "7px",
    cursor: "pointer",
  },
  todoIconDel: {
    background: "#aaaaaac4",
    padding: "1%",
    border: "none",
    color: "#ffff",
    margin: "1% 0 0 1%",
    borderRadius: "7px",
    cursor: "pointer",
  },
  todoContent: {
    width: "80%",
    height: "auto",
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "'Rubik', sans-serif",
    margin: "4% auto",
    padding: "3%",
    background: "rgba(248,252,251,.582)",
    boxShadow: "2px 2px 1px #e0e6edcc",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default Todo;
