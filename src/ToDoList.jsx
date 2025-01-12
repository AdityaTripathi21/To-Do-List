import React, {useState} from "react";
import Header from "./header";
import TaskInput from "./taskinput";
import TaskList from "./TaskList";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    function addTask(newTask) {
        setTasks([...tasks, newTask]);
    }

    function deleteTask(taskIndex) {
        setTasks(tasks.filter((_, index) => index !== taskIndex));
    }


    return(<>
        <Header></Header>
        <TaskInput onAddTask={addTask}></TaskInput>
        <TaskList tasks={tasks} onDeleteTask={deleteTask}></TaskList>
    </>);
}

export default ToDoList