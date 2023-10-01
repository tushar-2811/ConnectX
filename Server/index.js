import express from "express"
import dotenv from 'dotenv'
dotenv.config();
import cors from "cors"
import db from "./config/mongoDB.js";
import indexRouter from "./routes/indexRoutes.js";

const app = express();


app.use(cors());
app.use(express.json());


// To read port from .env file
const PORT = process.env.PORT;

// routes
app.use('/' , indexRouter);





app.listen(PORT , (err) => {
    console.log(`Server is running on port ${PORT}`);
})