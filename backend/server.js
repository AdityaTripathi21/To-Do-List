import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import taskRouter from "./routes/taskRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());


const PORT = 3000;
connectDB();

app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);



app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})