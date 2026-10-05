import prisma from "../config/prisma.js";

export const createTask = async (req, res) => {
    try {
        const { userId, title, description, status, priority } = req.body;
        if (!userId || !title) {
            return res.status(400).json({ message: "User ID and title are required" });
        }
        const task = await prisma.task.create({
            data: {
                userId: Number(userId),
                title,
                description,
                status,
                priority,
            },
        });

        res.status(201).json(task);
    } catch (error) {
        console.error(error);

        if (error.code === "P2003") {
            return res.status(400).json({ message: "User does not exist" });
        }
        res.status(500).json({ message: "Failed to create task" });
    }
};


// export const getTasks = async (req, res) => {
//     try {
//         const tasks = await prisma.task.findMany({
//             include: {
//                 user: true,
//             },
//         });
//         res.status(200).json(tasks);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Failed to fetch tasks" });
//     }
// };


export const getTasks = async (req, res) => {
    try {
        const { status, priority, search, sortBy = "createdAt", order = "desc",
            page = 1, limit = 10 } = req.query;

        const pageNumber = Number(page);
        const limitNumber = Number(limit);

        const skip = (pageNumber - 1) * limitNumber;

        const tasks = await prisma.task.findMany({
            where: {
                ...(status && { status }),
                ...(priority && { priority }),
                ...(search && {
                    OR: [
                        {
                            title: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                        {
                            description: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    ],
                }),
            },
            orderBy: {
                [sortBy]: order,
            },
            skip,
            take: limitNumber,
            include: {
                user: true,
            },
        });

        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch tasks",
        });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        const task = await prisma.task.findUnique({
            where: {
                id,
            },
            include: {
                user: true,
            },
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch task" });
    }
};


export const updateTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { userId, title, description, status, priority } = req.body;
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        if (!userId || !title) {
            return res.status(400).json({ message: "User ID and title are required" });
        }

        const task = await prisma.task.update({
            where: {
                id,
            },
            data: {
                userId: Number(userId),
                title,
                description,
                status,
                priority,
            },
        });

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        if (error.code === "P2003") {
            return res.status(400).json({ message: "User does not exist" });
        }
        if (error.code === "P2025") {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(500).json({ message: "Failed to update task" });
    }
};


export const deleteTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }
        const task = await prisma.task.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ message: "Task deleted successfully", task });
    } catch (error) {
        console.error(error);
        if (error.code === "P2025") {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(500).json({ message: "Failed to delete task" });
    }
};