//1. importing express
const express = require('express')
require("./connection")
var empmodel=require("./model/emp")
 
//2. initialize
const app = new express()
//middle ware
app.use(express.json())


//3. api creation
app.get('/', (req, res) => {
    res.send("message from the server")

})
app.get('/trial', (req, res) => {
    res.send("Trial msg")
})

//add api
app.post("/add", async (req, res) => {
    try {
        await empmodel(req.body).save();
        res.send({message:"data added!!"})
    } catch (error) {
        console.log(error)

        
    }
})
app.get("/view", async (req, res) => {
    try {
        var Show = await empmodel.find();
        res.send(Show)
    } catch (error) {
        console.log(error)
    }
})

//4. port
app.listen(3004, () => {
    console.log("port is running")
})