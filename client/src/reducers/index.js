import Login from './isLogged';
import Add from './addNew';
import Completed from './completed';
import {combineReducers} from 'redux';

const allReducer=combineReducers({
    Login,
    Add,
    Completed

})

export default allReducer;