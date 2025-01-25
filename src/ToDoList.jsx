import React, { useState, useEffect } from "react";
import Header from "./Header/header";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userID = localStorage.getItem('userID');

        if (!userID) {
            console.error("User ID not found in localStorage!");
            return;
        }
        const response = await fetch(`http://localhost:3000/api/tasks/${userID}`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  function addTask(newTask) {
    const addTaskBackend = async () => {
      try {
        const userID = localStorage.getItem("userID");
        const response = await fetch("http://localhost:3000/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({title: newTask, userID})
        });
        const savedTask = await response.json();
        console.log(savedTask);
        setTasks([...tasks, savedTask]);
      }
       catch (error) {
        console.log(error);
      }
    }

    addTaskBackend();
  }

  function deleteTask(taskID) {
    const deleteTaskBackend = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/tasks/${taskID}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete task");
        }

        setTasks(tasks.filter((task) => task._id !== taskID));
      } 
      catch (error) {
          console.log(error);
        }
      }

      deleteTaskBackend();
  }

  function editTask(taskID, updatedTitle) {
    console.log("editTask called with:", { taskID, updatedTitle });

    const editTaskBackend = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${taskID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json", // Ensure JSON header
                },
                body: JSON.stringify({ title: updatedTitle }), // Stringify the body
            });

            if (!response.ok) {
                throw new Error(`Failed to edit task: ${response.statusText}`);
            }

            const updatedTask = await response.json();
            console.log("Task successfully updated:", updatedTask);

            setTasks(tasks.map((task) =>
                task._id === taskID ? updatedTask : task
            ));
        } catch (error) {
            console.error("Error editing task:", error);
        }
    };

    editTaskBackend();
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
        <TaskList tasks={tasks} onEditTask = {editTask} onDeleteTask={deleteTask} onMoveUp ={moveUp} onMoveDown={moveDown}/>
    </>
  );
}

export default ToDoList;
