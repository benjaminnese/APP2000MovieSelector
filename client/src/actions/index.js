import axios from 'axios';
import {FETCH_USER} from './types';

//Action er en beskrivelse av som kan bli utført

//Enkel funksjon som retunere et object
//Type betyr navn på action
export const fetchUser = () => async dispatch => {
    //dispatch sender eventet til alle reducers in the "store", som får alle til å oppdatere sin state
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload:res.data}); //Vi henter ut bare data delen av objektet som er retunert av axios, google brukerid osv
};