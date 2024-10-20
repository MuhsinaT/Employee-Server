
require('dotenv').config();
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE).then(res=>{
    console.log("Server Connected To DB")
}).catch(err=>{
    console.log(err)
})

