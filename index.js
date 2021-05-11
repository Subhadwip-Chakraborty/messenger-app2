const express=require("express")
const app=express()

app.get("/register",(req,res)=>{
    res.send({message:"Getting the data"})
})
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})