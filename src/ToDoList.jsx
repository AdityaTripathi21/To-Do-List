import React, { useState } from "react";
import Header from "./Header/header";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";
function ToDoList() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskIndex) {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  }

  return (
    <>
      <Header />
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </>
  );
}

export default ToDoList;
