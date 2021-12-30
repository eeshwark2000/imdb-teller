import {SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE, LOADING} from './types'
import {Apikey} from '../Apikey'
import Axios from 'axios';
export const searchMovie=text=>dispatch=>{
    
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    });
};
export const Loading=text=>dispatch=>{
    
    dispatch({
        type:LOADING,
    });
};
export const fetchMovies=text=>dispatch=>{
    Axios.get(`http://www.omdbapi.com/?apikey=${Apikey}&s=${text}`)
    .then(response=>dispatch({
        type:FETCH_MOVIES,
        payload:response.data
    }))
    .catch(err=>console.log(err))
}
export const fetchMovie=id=>dispatch=>{
    Axios.get(`http://www.omdbapi.com/?apikey=${Apikey}&i=${id}`)
    .then(response=>dispatch({
        type:FETCH_MOVIE,
        payload:response.data
    }))
    .catch(err=>console.log(err))
}