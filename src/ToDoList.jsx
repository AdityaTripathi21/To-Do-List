import React, { useState, useEffect } from "react";
import Header from "./Header/header";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";
import { useNavigate } from "react-router-dom";


function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token'); 
        if (!token) {
          console.error("Token not found! Redirecting to login...");
          navigate('/login'); 
          return;
        }
        const response = await fetch(`http://localhost:3000/api/tasks`, {
          method: "GET",
          headers: {
              "Authorization": `Bearer ${token}`, 
          },
      });
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [navigate]);

  function addTask(newTask) {
    const addTaskBackend = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/api/tasks", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newTask }),
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
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:3000/api/tasks/${taskID}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
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
    const editTaskBackend = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(`http://localhost:3000/api/tasks/${taskID}`, {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: updatedTitle }),
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
