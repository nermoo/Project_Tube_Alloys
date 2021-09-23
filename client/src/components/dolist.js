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
    Typography,
    Button
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import {addItem} from './../actions';




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

    const classes=useStyles;
    const [list,setList]=useState([]);
    const dispatch=useDispatch();
    const updater=useSelector(state=>state.Add);
    
    
    
    const [checked, setChecked] = React.useState([0]);
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

   useEffect(()=>{
     let user=localStorage.getItem('user');
     let newAr=[];
     try {
       
       axios.post('http://localhost:8080/items',{
       
         user:user,
         flag:"todo" 
       })
       .then((response) => {
         console.log(response.data);
         newAr=response.data.map(titem=>([titem.item]))
         console.log(newAr);
         setList(newAr);
        //  dispatch(addItem(user));
     }
     
     )
     } catch (error) {
       console.log(error);
     }
   },[updater])
  

 if(list.length===0){
   return(
     <div>Loading...</div>
   )
 }

    return(
        <List className={classes.root}>
          <Typography></Typography>
      {list.map((value) => {
        console.log(value);
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value.id} role={undefined} dense >
            <ListItemIcon>
              <Checkbox
                button onClick={handleToggle(value)}
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
              
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
            <Button>

            <DeleteIcon/>
            </Button>
            {/* <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
              </IconButton>
            </ListItemSecondaryAction> */}
          </ListItem>
          
        );
      })}
    </List>
    );
}

export default Todo;