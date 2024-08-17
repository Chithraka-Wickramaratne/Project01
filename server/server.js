import expresss from 'express'
import dbCon from './utils/db.js'
import dotenv from 'dotenv'

dotenv.config()
const app=expresss()

//mongodb
dbCon()


app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})