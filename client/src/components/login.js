import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid , Card, CardContent,CardActions, Button, makeStyles, TextField } from '@material-ui/core';
import {Link } from 'react-router-dom';
import { useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';


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
      }
      
});
const Login=()=>{

    const classes=useStyles();
    const [username,setUser]=useState('');
    const [password,setPass]=useState('');
    const loginStatus=useSelector(state=>state.Login);
    console.log(loginStatus);

    return(
        <div className={classes.Cards}>
      <Grid item xs={1} sm={2}></Grid>
    <Grid  item xs={10} sm={8}>
          <Card className={classes.root} variant="outlined">
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          LogIn
        </Typography>
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
          <Button className={classes.btn}>LogIn</Button>
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