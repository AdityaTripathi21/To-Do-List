import Task from "../Task/Task";
import styles from "./TaskList.module.css";

function TaskList({ tasks, onEditTask, onDeleteTask, onMoveUp, onMoveDown}) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task, index) => (
        <Task
          key={task._id}
          task={task}
          onEdit={onEditTask}
          onDelete={() => onDeleteTask(task._id)}
          onUp={() => onMoveUp(index)}
          onDown={() => onMoveDown(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
