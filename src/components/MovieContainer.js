import React from 'react'
import store from '../store';
import MovieItem from './MovieItem';
import {useSelector} from 'react-redux'

function MovieContainer() {
    const movies = store.getState().movies.movies;
    let content='';
    content= 
          
         movies.Response === "True" ?
           movies.Search.map((movie,index)=>{
           return(<MovieItem movie={movie} key={index}/>);
         }) : <h1>{movies.Error}</h1>
    return(
    <div className="row">{content}</div>
    )    
       
    
}

export default MovieContainer
