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
import {Grid, Hidden} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // flexGrow:1,
    marginTop:20,
    backgroundColor:'silver',
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
  
});

export default function OutlinedCard() {

  const classes = useStyles();
  const [show,setShow]=useState(false);
  const [name,setName]=useState([]);

  const handleClick=(e)=>{
      setShow(true);
  }
  const handleClickng=(e)=>{
    setShow(false);
}

  useEffect(()=>{

    if(show===true){
     axios.get('http://localhost:8080/names')
    .then((response) => {
    setName(response.data);
  }
)}
else{
  console.log("nope");
  setName([]);
}
console.log(show);
  },[show])

  return (
    <div className={classes.Cards}>
      <Grid item xs={1} sm={1}></Grid>
    <Grid  item xs={10} sm={4}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          To Do
        </Typography>
       <NameList names={name}/>
      </CardContent>
      <CardActions>
        <Button type="submit" size="small" onClick={handleClick}>Show Names</Button>
        <Button type="submit" size="small" onClick={handleClickng}>Hide Names</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={1}></Grid>
        <Hidden smUp>
        <Grid item xs={1}></Grid>
        </Hidden>
        <Grid item  xs={10} sm={4}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Done
        </Typography>
       <NameList names={name}/>
      </CardContent>
      <CardActions>
        <Button type="submit" size="small" onClick={handleClick}>Show Names</Button>
        <Button type="submit" size="small" onClick={handleClickng}>Hide Names</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
        </div> 
    
   
  );
}


