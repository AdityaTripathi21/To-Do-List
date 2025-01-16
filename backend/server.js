import express from "express";
import connectDB from "./db.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();
app.use(express.json());

const PORT = 3000;
connectDB();

app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})