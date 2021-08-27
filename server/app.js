const { json } = require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const axios=require('axios');
const userNames = require('./models/names');

try {
    mongoose.connect('mongodb+srv://nermo:nermo@userdata.knaz0.mongodb.net/UserData?retryWrites=true&w=majority',{ useUnifiedTopology: true });
    const db=mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");
});
} catch (error) {
    console.log(error);
}
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/post',(req,res)=>{
    // console.log(req);
    const email=req.body.email;
    console.log(email);
    res.send(`${email} is da email`);
})

app.get('/names', async (req, res) => {
    const users = await userNames.find({},{_id:0});
  
    try {
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.listen(8080,()=>{
    console.log("server is active");
})