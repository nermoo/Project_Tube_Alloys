import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {useState,useEffect} from 'react';
import NameList from './nameList';
import {Grid} from '@material-ui/core';
import Todo from './dolist';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Done from './done';
import Add from './add';

const useStyles = makeStyles({
  root: {
    // flexGrow:1,
    marginTop:40,
    backgroundColor:'#b2dfdb',
    height:500
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

  },
  pos: {
    marginBottom: 12,
  },
  Cards:{
    flexGrow:1,
    display:'flex',
    flexDirection: "row",
    flexWrap:'wrap',
  },
  list:{
    overflowY:'auto',
    height:300
  },
  btn:{
    backgroundColor:'#26c6da',
    margin:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:8,
    paddingBottom:8
},
  
});

export default function OutlinedCard() {

  const classes = useStyles();
  const [show,setShow]=useState(false);
  const [name,setName]=useState([]);


//   useEffect(()=>{

//     if(show===true){
//      axios.get('http://localhost:8080/names')
//     .then((response) => {
//     setName(response.data);
//   }
// )}
// else{
//   console.log("nope");
//   setName([]);
// }
// console.log(show);
//   },[show])

  return (
    <Router>
    <div className={classes.Cards}>
      <Grid item xs={1} sm={1}></Grid>
    <Grid  item xs={10} sm={4}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          To Do
        </Typography>
       <NameList names={name}/>
       <div className={classes.list}>
       <Todo/>
       </div>
      </CardContent>
      <CardActions>
        
        <Link to="/add">
        <Button className={classes.btn}>Add Item</Button>
        </Link>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={1}></Grid>
  
        <Grid item xs={1}></Grid>
       
        <Grid item  xs={10} sm={4}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Done
        </Typography>
        <div>
        <Switch>
        <Route exact path="/" component={Done}/>
        <Route path="/add" component={Add}/> 
        </Switch>
        </div>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
        </div> 
        </Router>
    
   
  );
}


