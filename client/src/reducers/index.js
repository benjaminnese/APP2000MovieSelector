import {combineReducers} from 'redux';
import authReducer from './authReducer';

//Reducer sjekker hvilket action som ble trigget
//Og hvordan det skal hånteres

//Dispatch her sier du at actions skal kjøres


export default combineReducers({
    auth: authReducer
});
