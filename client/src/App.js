
import { Grid } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles({

  content:{
    marginTop:'10px',
    // marginLeft:'auto',
    // marginRight:'auto',
    // display:'flex',
    // flexDirection: "row",
    flexGrow:1,
  },
  Ccards:{
    // marginRight:'auto',
    // marginLeft:'auto',
    
  }
});


function App() {

  const classes=useStyles();
  return (
    <div>
      <Router>
      <Navbar/>
      <div className={classes.content}>
      <Grid className={classes.Ccards} container spacing={3}>
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/account">
            
          </Route>
          <Route path="/login" component={Login}/>
        </Switch>

      
      </Grid>
      </div>
        

      </Router>
      
    </div>
    //aravinda is the man
  );
}

export default App;
