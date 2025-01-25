import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true}
});

const Task = mongoose.model("Task", taskSchema);

export default Task;