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
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <AddIcon />
      </button>
    </form>
  );
};

function Todo() {
  const [tasks, setTasks] = useState([
    {
      text: "Star this Project on Github",
      isCompleted: false,
    },
    {
      text: "Will contribute to open source",
      isCompleted: false,
    },
    {
      text: "Start my bloging carrier",
      isCompleted: false,
    },
  ]);

  const addTask = (text) => setTasks([...tasks, { text }]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

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
          <div className="todo">
            <span
              onClick={() => toggleTask(index)}
              className={
                task.isCompleted ? "todo-text todo-completed" : "todo-text"
              }
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>
              <DeleteIcon />
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
    height: "73%",
    textAlign: "center",
    padding: "4%",
  },
};

export default Todo;
