import express from "express";
import cors from "cors";
import userRouter from './routes/userRoutes.js'
import taskRouter from './routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Task Manager API with Prisma" });
});

app.use("/api/users", userRouter)
app.use("/api/tasks", taskRouter)

export default app;