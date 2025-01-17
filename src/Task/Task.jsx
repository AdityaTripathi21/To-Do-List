import styles from "./Task.module.css";
import { useState } from "react";

function Task({task, onEdit, onDelete, onUp, onDown}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleSave = () => {
        if (newTitle.trim() === "") {
            setIsEditing(false);
            setNewTitle(task.title);
            return;
        }
        else {
            onEdit(task._id, newTitle);
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSave(); 
        }
    };

    return (
        <li className={styles.taskItem}>
            {isEditing ? (
                        <input type="text" className={styles.taskInput} value={newTitle} 
                            onChange={(e) => {
                                setNewTitle(e.target.value);
                            }}
                            onKeyDown={handleKeyDown}
                        />
                    ) : (
                            <p className={styles.taskTitle}>{task.title}</p>
                        )
            }
                <div className={styles.buttonContainer}>
                    {isEditing ? (
                                <button className={`${styles.taskButton} ${styles.saveButton}`} onClick={handleSave}>💾</button>
                        ) : (
                                <button className={`${styles.taskButton} ${styles.editButton}`} onClick={() => setIsEditing(true)}>✏️</button>
                            )
                    }
                    <button className={`${styles.taskButton} ${styles.deleteButton}`} onClick={onDelete}>🗑️</button>
                    <button className={`${styles.taskButton} ${styles.downButton}`} onClick={onDown}>⬇</button>
                    <button className={`${styles.taskButton} ${styles.upButton}`} onClick={onUp}>⬆</button>
                </div>
        </li>
    );
}

export default Task