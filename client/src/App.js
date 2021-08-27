
import { Grid } from '@material-ui/core';
import './App.css';
import NameButton from './components/button';
import Navbar from './components/navbar';



function App() {
  return (
    <div>
      <Navbar/>
      <Grid container>
        <Grid item={12}>
        <NameButton/>
        </Grid>
      </Grid>
      
    </div>
    //aravinda is the man
  );
}

export default App;
