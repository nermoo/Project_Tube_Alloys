import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Login from './../reducers/isLogged';
import { user } from './../actions/index';
import names from './nameList';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  inputRoot: {
    color: '#b2dfdb',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  title:{
    textDecoration:'none',
    color:'white'
  },
  nav:{
    backgroundColor:'#009688',
  }
}));

 const Navbar=()=> {
   const status=useSelector(state=>state.Login);
  const classes = useStyles();
  const [user,setUser]=useState('');
  const [log,setStatus]=useState(false);
  const [name,setName]=useState('');
  // var log=useSelector(state=>state.Login);
  // const user=useSelector(state=>state.User);
  
  useEffect(()=>{
    const loginStatus=localStorage.getItem('loginStatus')==='true';
    const username=loginStatus ? localStorage.getItem('user'):'';
    setUser(username);
    setStatus(loginStatus);
    console.log(log,user);
    if(log===false){
      setName('Login/Signup');
    }else{
      setName(user);
    }
  },[user,log])

  
  


  return (
    
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <Link to="/">
          <Typography className={classes.title} variant="h6" noWrap>
            To Do
          </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='/login'>
              
            <IconButton
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
              // onClick={ handleUserIcon}
              color="inherit"
              
            >
              <Typography>{name  }</Typography>
              <AccountCircle/>
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
  );
}


export default Navbar;