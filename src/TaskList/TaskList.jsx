import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, onDeleteTask, onMoveUp, onMoveDown}) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={() => onDeleteTask(index)}
          onUp={() => onMoveUp(index)}
          onDown={() => onMoveDown(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
