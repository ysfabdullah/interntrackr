import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import express from "express"
import internRoutes from "./routes/internRoutes.js";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();



const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(rateLimiter);
app.use(
    cors({
        origin: "http://localhost:5173",
    }

))


app.use("/api/internships", internRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});
