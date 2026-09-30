// import { pool } from "./config/db.js";

// const testConnection = async () => {
//     try {
//         const result = await pool.query("SELECT NOW()");
//         console.log("Database connected:", result.rows[0]);
//         console.log("Database connected:", result);
//     } catch (error) {
//         console.error("Database connection failed:", error.message);
//     } finally {
//         await pool.end();
//     }
// };

// testConnection();


import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});