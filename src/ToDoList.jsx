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

  function moveUp(taskIndex) {
    if (taskIndex === 0) return;

    const updatedTasks = [...tasks];

    [updatedTasks[taskIndex], updatedTasks[taskIndex - 1]] = [
      updatedTasks[taskIndex - 1],
      updatedTasks[taskIndex],
    ];

    setTasks(updatedTasks);
  }

  function moveDown(taskIndex) {
    if (taskIndex === tasks.length - 1) return; 

  const updatedTasks = [...tasks];

  [updatedTasks[taskIndex], updatedTasks[taskIndex + 1]] = [
    updatedTasks[taskIndex + 1],
    updatedTasks[taskIndex],
  ];

  setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onMoveUp ={moveUp} onMoveDown={moveDown}/>
    </>
  );
}

export default ToDoList;
