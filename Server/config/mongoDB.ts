import mongoose from "mongoose";

const uri = "mongodb+srv://tusharrawat52:lSyJk6ZrkfesyxpL@cluster0.tz8zdjw.mongodb.net/ConnectX-DB"

// const db =  mongoose.connect(uri);

// db.then(() => {
//     console.log(`Connected to mongoDB :: Database`);
// })

// db.catch((err) => {
//     console.log(`Error in connecting to mongodb : ${err}`);
// })

// export default db;

const connectToDatabase = async () => {
    try {
      await mongoose.connect(uri);
      console.log(`Connected to MongoDB :: Database`);
    } catch (err) {
      console.error(`Error in connecting to MongoDB: ${err}`);
    }
  };
  
connectToDatabase();