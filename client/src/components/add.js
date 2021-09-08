import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid , Card, CardContent,CardActions, Button, makeStyles, TextField } from '@material-ui/core';
import {Link } from 'react-router-dom';
import { useState} from 'react';


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
const Add=()=>{

    const classes=useStyles();
    const [username,setUser]=useState('');
    const [password,setPass]=useState('');

    return(
        <div className={classes.Cards}>
      
        
        <TextField
        className={classes.txt}
          id="outlined-username"
          label="Username"
          name={username}
          variant="outlined"
          required={true}
          onBlur={e=>setUser(e.target.value)}
        />
        
          <Button className={classes.btn}>+</Button>
          <Link to="/">
          <Button className={classes.btn}> Show completed</Button>
          </Link>
    
        </div>
    );
}

export default Add;