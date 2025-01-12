import styles from "./Task.module.css";

function Task({task, onDelete}) {
    return (
    <li className={styles.taskItem}>
        {task}
        <button className={styles.taskButton} onClick={onDelete}>Delete</button>
    </li>);
}

export default Task