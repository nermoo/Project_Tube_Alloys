import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  inputRoot: {
    color: 'inherit',
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
  }
}));

 const Navbar=()=> {
  const classes = useStyles();
  


  return (
    
      <AppBar position="static">
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
              <AccountCircle/>
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
  );
}


export default Navbar;