import mongoose from "mongoose";

const uri = "mongodb+srv://tusharrawat52:lSyJk6ZrkfesyxpL@cluster0.tz8zdjw.mongodb.net/ConnectX-DB"

const db = mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

db.then(() => {
    console.log(`Connected to mongoDB :: Database`);
})

db.catch((err) => {
    console.log(`Error in connecting to mongodb : ${err}`);
})

export default db;