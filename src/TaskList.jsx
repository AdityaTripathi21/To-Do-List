import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
    return (<ul>
        {tasks.map((task, index) => (
            <Task task={task} key={index} onDelete={() => onDeleteTask(index)}></Task>
        ))}
    </ul>);
}

export default TaskList