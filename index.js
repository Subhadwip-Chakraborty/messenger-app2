const express=require("express")
const app=express()

app.get("/register",(req,res)=>{
    res.send({message:"Getting the data"})
})
app.get('/login',(req,res)=>{
    res.send({messag:"This is branch number 3"})
})
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})