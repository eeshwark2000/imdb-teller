import React from 'react'
import { searchMovie,fetchMovies, Loading } from '../actions/searchAction'
import {useDispatch} from 'react-redux'
import store from '../store';

function Jumbotron() {
    const dispatch = useDispatch();
    const changesearch=(e)=>{
        dispatch(searchMovie(e.target.value));
    }
    const clicksearch=(e)=>{
        dispatch(fetchMovies(store.getState().movies.text));
        dispatch(Loading())
        // dispatch(searchMovie(store.getState().movies.text));
    }
    return (
        <div>
            <div className="jumbotron container mt-4">
                
                <h1 className="display-4"><span className="searchi"><i className="fas fa-search"></i></span> Search for a movie,TV Series</h1>
                <hr className="my-4" />
                <div className="form-group">
                    <input type="text" 
                     className="form-control" 
                     id="searchinput" 
                     placeholder="Search movie,TV Series..."
                     onChange={changesearch}/>
                </div>
                    <a className="btn btn-primary btn-lg searchbtn" onClick={clicksearch} >Search</a>
                </div>
            </div>
    )
}

export default Jumbotron
