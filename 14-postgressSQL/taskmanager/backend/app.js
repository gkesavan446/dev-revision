import express from "express";
import cors from "cors";
import taskRouter from './routes/taskRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Task Manager API is running"
    });
});

app.use("/api/tasks", taskRouter)

export default app;