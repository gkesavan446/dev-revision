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