import React from 'react';
import {useState, useEffect } from 'react';
import {List,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    makeStyles,
    Typography
} from '@material-ui/core';
import {useSelector } from 'react-redux';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      overflowY:'auto',
      backgroundColor: theme.palette.background.paper,
      height:250
    },
  }));

const Todo=(props)=>{

    // const list=props.List;
    // console.log(list);
    // const list=useSelector(state=>state.Add);
    var list=['aravinda'];
    console.log(list);
    const classes=useStyles;
    const [checked, setChecked] = React.useState([0]);
    // const list=useSelector(state=>state.Add);
    // const [list,setList]=useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
// try {
 
//   const loginStatus=localStorage.getItem('loginStatus')==='true';
//     const username=loginStatus ? localStorage.getItem('user'):'';
//     console.log(loginStatus,username);
//      axios.post('http://localhost:8080/items',{
    
//       user:username,
//       flag:"todo" 
//     })
//     .then((response) => {
      
//       console.log(response);
//       const items=[];
//     response.data.map((item)=>{
//       items.push(item.item);
//     })
//     // const newlist=items.concat(list);
//   }
  
//   )
// } catch (error) {
//   console.log(error);

// }
  

  useEffect(()=>{
    console.log('hello');
    },[list])

if(list.length===0){
  return <Typography>Loading</Typography>
}

    return(
        <List className={classes.root}>
          <Typography></Typography>
      {list.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    );
}

export default Todo;