import prisma from "../config/prisma.js";


export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch users" })
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }
        const user = await prisma.user.create({
            data: {
                name, email
            }
        })
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        if (error.code === "P2002") {
            return res.status(409).json({ message: "Email already exists" });
        }
        res.status(500).json({ message: "Failed to create user" })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = Number(req.params.id)
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch users" });
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, email } = req.body;

        if (Number.isNaN(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name, email
            }
        })
        res.status(200).json(user)

    } catch (error) {
        console.error(error);
        if (error.code === "P2002") {
            return res.status(409).json({ message: "Email already exists" });
        }

        if (error.code === "P2025") {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(500).json({ message: "Failed to update user" });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const user = await prisma.user.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        console.error(error);
        if (error.code === "P2025") {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(500).json({ message: "Failed to delete user" });
    }
};
