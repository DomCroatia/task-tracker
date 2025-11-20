import { useState } from "react";
import styles from "./ToDoList.module.css";
import Task from "../Task/Task";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask(e) {
    if (e.key === "Enter" && text.trim()) {
      const newTask = {
        id: crypto.randomUUID(),
        text,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setText("");
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <section className={styles.section}>
      <h1>To Do List</h1>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={addTask}
        type="text"
        placeholder="Add new task"
      />
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </section>
  );
}

export default ToDoList;
