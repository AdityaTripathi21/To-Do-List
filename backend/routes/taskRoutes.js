import express from "express";
import Task from "../models/Task.js";


const router = express.Router();


// getting all tasks
router.get("/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
        const tasks = await Task.find({userID});
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
});

// adding a new task
router.post("/", async (req, res) => {
    const { title, userID } = req.body;
    if (!title || !userID) {
        return res.status(400).json({ message: "Title and userID is required" });
    }

    try {
        const newTask = new Task({title, userID});
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });

    }
});

// getting a specific task
router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task)
            return res.status(404).json({
                message: "Task not found"
            });
        res.json(task);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

// editing an existing task
router.patch("/:id", async (req, res) => {
    try {
        console.log("PATCH request params:", req.params);
        console.log("PATCH request body:", req.body);
        const task = await Task.findById(req.params.id);
        if (!task)
            return res.status(404).json({message: "Task not found"});
        const newTitle = req.body.title;
        if (newTitle === undefined || newTitle === null || newTitle.trim() === "") {
            return res.status(400).json({ message: "Title cannot be empty" });
        }
        task.title = newTitle;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

// delete a task
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task)
            return res.status(404).json({message: "Task not found"});
        res.json({ message: "Task deleted successfully", task });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

export default router;
