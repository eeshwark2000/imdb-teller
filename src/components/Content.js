import React from 'react'
import Spinner from './Spinner'
import MovieContainer from './MovieContainer'
import {useSelector} from 'react-redux'
import store from '../store';
function Content() {
    const loading = useSelector(state => state.movies.loading)
    // const loading=store.getState().movies.loading;
    return (
        <div className="container">
           {loading ? <Spinner/> :<MovieContainer/>} 
        </div>
    )
}

export default Content
