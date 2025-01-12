import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
