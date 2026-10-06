import express from "express";
import cors from "cors";
import userRouter from './routes/userRoutes.js'


const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Task Manager API with Prisma" });
});

app.use("/api/users", userRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});