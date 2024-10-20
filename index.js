require('dotenv').config

const express=require('express')
const cors=require('cors')
const router=require('./Routes/route')
require('./Connection/db')

const empServer=express()
empServer.use(express.json())
empServer.use(cors())

empServer.use(router)

const PORT=3000 || process.env.PORT

empServer.listen(PORT,()=>{
    console.log(`Server Running at : ${PORT}`)
})