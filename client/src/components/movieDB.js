import axios from 'axios';


const KEY = '67eebbe4966f8175133a6a20f9206e7a';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
//'https://api.themoviedb.org/3/search/company?api_key=67eebbe4966f8175133a6a20f9206e7a&query={søkegreie}&page=1'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});


//eksempel bruk movieDB.get('/search') blir da https://api.themoviedb.org/3/search