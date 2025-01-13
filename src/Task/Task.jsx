import styles from "./Task.module.css";

function Task({task, onDelete, onUp, onDown}) {
    return (
    <li className={styles.taskItem}>
        {task}
        <div className={styles.buttonContainer}>
            <button className={`${styles.taskButton} ${styles.deleteButton}`} onClick={onDelete}>Delete</button>
            <button className={`${styles.taskButton} ${styles.downButton}`} onClick={onDown}>⬇</button>
            <button className={`${styles.taskButton} ${styles.upButton}`} onClick={onUp}>⬆</button>
        </div>
    </li>);
}

export default Task