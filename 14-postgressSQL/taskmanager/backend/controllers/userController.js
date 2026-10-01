
import { pool } from "../config/db.js";

export const getUsers = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM users ORDER BY id DESC"
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching users:", error.message);

        res.status(500).json({
            message: "Failed to fetch users"
        });
    }
};


export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`
            SELECT * FROM users where id = $1    
        `, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
};


export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const result = await pool.query(
            `INSERT INTO users (name, email) values ($1, $2) returning *`, [name, email]
        )
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error creating users:", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
};


export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const result = await pool.query(
            `UPDATE users SET  name = $1, email = $2 WHERE id = $3  RETURNING *`,
            [name, email, id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });

        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error updating user:", error.message);
        res.status(500).json({ message: "Failed to update user" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            ` DELETE FROM users  WHERE id = $1 RETURNING *`, [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            user: result.rows[0]
        });
    } catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({ message: "Failed to delete user" });
    }
};