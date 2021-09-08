
import { Grid } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';


var myStore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
          <Route path='/signup' component={Signup}/>
        </Switch>

      
      </Grid>
      </div>
        
      <Footer/>
      </Router>
      
    </div>
    //aravinda is the man
  );
}

export default <Provider store='myStore'>App</Provider>;
