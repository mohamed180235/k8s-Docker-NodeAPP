import express from 'express'
import os from 'os'
const app=express()
const port=3000

app.get("/",(req,res) =>{
    const msg= "Hello, I'm First Devops App Using Docker and K8S"
    res.send(msg)
})
