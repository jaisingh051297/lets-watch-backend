import dotenv from "dotenv"
import connectDB from "./db/db.js";
import {app} from "./app.js"

dotenv.config({
    path:"./.env"
})

const port = process.env.PORT || 8000;

// connecting Database(MongoDB Atlas).
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log(`Error : ${error}`)
        throw error;
    })

    app.listen(port,()=>{
        console.log(`⌚  Server is running at Port ${port}`)
    })

})
.catch((error)=>{
    console.log(`Mongo DB connection failed !!! ${error}`)

})