import rateLimiter from "./middleware/rateLimiter.js";
import express from "express"
import internRoutes from "./routes/internRoutes.js";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(rateLimiter);


app.use("/api/internships", internRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});
