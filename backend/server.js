import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './OtherTodo/database.js'
import { Router } from './RouterTodo/Router.js'
import cors from 'cors'
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
const PORT = process.env.PORT || 4000
app.use('/Tudo',Router)

app.listen(PORT,()=>{
        console.log(`the server is runing on ${PORT}`);
        connectDB();
        
})  