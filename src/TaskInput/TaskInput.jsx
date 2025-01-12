import { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput({onAddTask}) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    onAddTask(inputValue.trim());
    setInputValue("");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskInput;
