import { pool } from "../config/db.js";

// export const getTasks = async (req, res) => {
//     console.log("getTasks")
//     try {
//         const result = await pool.query(`
//             SELECT tasks.id, tasks.title, tasks.description, tasks.status,
//                 tasks.priority, tasks.created_at, users.name AS user_name FROM tasks
//             JOIN users ON users.id = tasks.user_id ORDER BY tasks.id DESC `);
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.error("Error fetching tasks:", error.message);
//         res.status(500).json({ message: "Failed to fetch tasks" });
//     }
// };


export const getTasks = async (req, res) => {
    try {
        const { status, priority, search, page = 1, limit = 5,
            sortBy = "id", order = "desc" } = req.query;
        let query = ` SELECT tasks.id, tasks.title, tasks.description, tasks.status,
                tasks.priority, tasks.created_at, users.name AS user_name FROM tasks
            JOIN users ON users.id = tasks.user_id`;

        const values = [];
        const conditions = [];

        if (status) {
            values.push(status);
            conditions.push(`tasks.status = $${values.length}`);
        }
        if (priority) {
            values.push(priority);
            conditions.push(`tasks.priority = $${values.length}`);
        }

        if (search) {
            values.push(`%${search}%`);
            conditions.push(`
            ( tasks.title ILIKE $${values.length}
            OR tasks.description ILIKE $${values.length})`);
        }

        if (conditions.length > 0) {
            query += ` WHERE ${conditions.join(" AND ")}`;
        }

        const allowedSortColumns = [
            "id",
            "title",
            "status",
            "priority",
            "created_at"
        ];

        const allowedSortOrders = ["asc", "desc"];

        const safeSortBy = allowedSortColumns.includes(sortBy)
            ? sortBy
            : "id";

        const safeOrder = allowedSortOrders.includes(order.toLowerCase())
            ? order.toLowerCase()
            : "desc";

        query += ` ORDER BY tasks.${safeSortBy} ${safeOrder}`

        const offset = (Number(page) - 1) * Number(limit);

        values.push(Number(limit));
        const limitIndex = values.length;

        values.push(offset);
        const offsetIndex = values.length;

        query += ` LIMIT $${limitIndex} OFFSET $${offsetIndex}`;
        const result = await pool.query(query, values);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        res.status(500).json({ message: "Failed to fetch tasks" });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `
            SELECT
                tasks.id,
                tasks.title,
                tasks.description,
                tasks.status,
                tasks.priority,
                tasks.created_at,
                users.name AS user_name
            FROM tasks
            JOIN users ON users.id = tasks.user_id
            WHERE tasks.id = $1
            `,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found"});                
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error fetching task:", error.message);
        res.status(500).json({ message: "Failed to fetch task"});           
        
    }
};

export const createTask = async (req, res) => {
    try {
        const { user_id, title, description, status, priority } = req.body;
        const result = await pool.query(`
                Insert INTO tasks (user_id, title, description, status, priority) values 
                    ($1, $2, $3, $4, $5) returning *
            `, [user_id, title, description, status, priority])
        res.status(201).json(result.rows)
    } catch (error) {
        console.error("Error creating task:", error.message);
        res.status(500).json({ message: "Internal Server Error", Error: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority } = req.body;
        const result = await pool.query(
            ` UPDATE tasks
            SET title = $1, description = $2, status = $3,  priority = $4,
                updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *  `,
            [title, description, status, priority, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error updating task:", error.message);
        res.status(500).json({ message: "Failed to update task" });
    }
};


export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            ` DELETE FROM tasks WHERE id = $1 RETURNING * `, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", task: result.rows[0] });
    } catch (error) {
        console.error("Error deleting task:", error.message);
        res.status(500).json({ message: "Failed to delete task" });
    }
};