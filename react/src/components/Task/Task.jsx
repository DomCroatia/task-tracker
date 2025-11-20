import styles from "./Task.module.css";

function Task({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className={styles.task}>
      <input
        className={styles.input}
        id={task.id}
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <label htmlFor={task.id}>{task.text}</label>
      <button
        type="button"
        className={styles.button}
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  );
}

export default Task;

// 3. :checked style
