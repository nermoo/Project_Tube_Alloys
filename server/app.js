const { json } = require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userNames = require('./models/name');
const User=require('./models/users');
const Items=require('./models/todoItems');
const bcrypt= require('bcrypt');
const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
const session=require('express-session');

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
app.use(session({
  secret:"nermo",
  resave:false,
  saveUninitialized: true
}))


app.use(passport.initialize());
app.use(passport.session());




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  passport.serializeUser(function(user,done){
    console.log('from se');
      done(null,user.id)
  });

  passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
      console.log('form des');
      done(err,user);
    })
  })
  

  passport.use(new localStrategy(
    {
      usernameField:'Name',
      passwordField:'Password'
  },
    function(username,password,done){
    console.log(username,password);
    User.findOne({Username:username},function(err,user){
      if (err)  return done(err);
      if (!user) return done(null,false,{message:'Incorrect Username'});

      bcrypt.compare(password,user.Password,function(err,res){
        console.log('yo');
          if(err) return done(err);
          if(res===false) return done(null,false,{message:'Incorrect password'});
          console.log("im here");
          console.log(user);
          return done(null,user)
          

      })
    })
  }))



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

  app.post('/userData',async (req,res)=>{
    
    const email=req.body.Email;
    const username=req.body.Name;
    const password=req.body.Password;
    
    const saltRounds=10;
    bcrypt.genSalt(saltRounds,function(err,salt){
      if(err) return (err);
      bcrypt.hash(password,salt, function(err,hash){
        if(err) return(err);
        console.log(hash);
        const Usr= new User({Email:email,Username:username,Password:hash});
        Usr.save((error,book)=>{
          if(error){
            console.log(error);
          }
          else{
            res.status(200).send(true);
            console.log("success");
            console.log(book);
          }
        })

      })
          })

  })


  app.post('/login', passport.authenticate('local',{
    successRedirect:'http://localhost:3000/',
    failureRedirect:'http://localhost:3000/login?error=true'
  })
  
  )

app.listen(8080,()=>{
    console.log("server is active");
})