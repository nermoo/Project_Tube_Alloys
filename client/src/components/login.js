import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid , Card, CardContent,CardActions, Button, makeStyles, TextField } from '@material-ui/core';
import {Link } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {login} from '../actions';
import {user} from '../actions';
import { useHistory,Redirect } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        // flexGrow:1,
        marginTop:60,
        backgroundColor:'#b2dfdb',
        textAlign:'center',
        marginBottom:'auto'

      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 24,
        color:'black',
        textAlign:'center',
        marginTop:12,
        marginBottom:20
    
      },
      pos: {
        marginBottom: 12,
      },
      Cards:{
        flexGrow:1,
        display:'flex',
        flexDirection: "row",
        flexWrap:'wrap',
        alignContent:'center'
      },
      loginbtn:{
          alignItems:'center',
          justifyContent:'center',

      },
      btn:{
          backgroundColor:'#26c6da',
          margin:10,
          paddingLeft:10,
          paddingRight:10,
          paddingTop:8,
          paddingBottom:8
      },
      txt:{
        width:'60%'
      },
      signup:{
        marginTop:20,
        marginBottom:20
      },
      msg:{
        color:'red'
      }
      
});
const Login=(state)=>{

  
    
    const classes=useStyles();
    const [username,setUser]=useState('');
    const [password,setPass]=useState('');
    const [msg,setMsg]=useState('');
    let history=useHistory();
    // const loginStatus=useSelector(state=>state.Login);
    // console.log(loginStatus);
    const dispatch=useDispatch();

    const log=()=>{
      if(username==='' || password===''){
        setMsg('Please enter both Username and password');
      }else{
        axios.post('http://localhost:8080/login',{
                  Name:username,
                  Password:password
                }).then(res=>{
                  console.log(res);
                  const status=res.data.info.status;
                  const message=res.data.info.message;
                  if(status===true){
                    setMsg('');
                    
                    localStorage.setItem('user',res.data.user.Username);
                    localStorage.setItem('loginStatus',status);
                    dispatch(login(res.data.user.Username));
                    dispatch(user(res.data.user.Username));
                    history.push('/');
                  }else{
                    setMsg(message);
                  }
                })
      }

      }
      // if(state.authorized===true){
      //   return <Redirect to='/logout'/>; 
      // }

    return(
        <div className={classes.Cards}>
      <Grid item xs={1} sm={2}></Grid>
    <Grid  item xs={10} sm={8}>
          <Card className={classes.root} variant="outlined">
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          LogIn
        </Typography>
        <Typography className={classes.msg}>{msg}</Typography>
      <CardContent>
        
        <TextField
        className={classes.txt}
          id="outlined-username"
          label="Username"
          name={username}
          variant="outlined"
          required={true}
          onBlur={e=>setUser(e.target.value)}
        />
        </CardContent>
        <CardContent>
        <TextField
        className={classes.txt}
          id="outlined-password-input"
          label="Password"
          type="password"
          name={password}
          autoComplete="current-password"
          variant="outlined"
          required={true}
          onBlur={e=>setPass(e.target.value)}
        />
      </CardContent>
      <CardActions className={classes.loginbtn}>
          <Button className={classes.btn} onClick={log}>LogIn</Button>
      </CardActions>
      <Typography className={classes.signup}>
        Don't have an account yet?  <Link to='/signup'>SignUp</Link> 
      </Typography>
    </Card>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
        </div>
    );
}

export default Login;