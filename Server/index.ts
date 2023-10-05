import express from "express"
import dotenv from 'dotenv'
dotenv.config();
import cors from "cors"
import "./config/mongoDB";
import indexRouter from "./routes/indexRoutes";

const app = express();


app.use(cors());
app.use(express.json());

// To read port from .env file
const PORT = process.env.PORT;

// routes
app.use('/' , indexRouter);





app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})