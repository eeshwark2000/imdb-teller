import React,{useEffect} from 'react'
import {fetchMovie, Loading} from '../actions/searchAction'
import {useDispatch,useSelector} from 'react-redux'
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

function Movie() {
    const dispatch = useDispatch();
    // console.log(match.params.id);
    let {id}=useParams();
    useEffect(() => {
        dispatch(fetchMovie(id))
        dispatch(Loading())
    }, [])
    const movie = useSelector(state => state.movies.movie)
    let movieInfo= (
        <div className="row d-flex align-items-center">
            <div className="posterimg col-md-4 h-100 ">
             <img className="img-thumbnail w-100" src={movie.Poster} alt="...poster" />
            </div>
            <div className="details col-md-7">
                <h3>{movie.Title}</h3><br/>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Genre</th>
                            <td>{movie.Genre}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Released</th>
                            <td>{movie.Released}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Rated</th>
                            <td>{movie.Rated}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">IMDB Rating</th>
                            <td>{movie.imdbRating}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Director</th>
                            <td>{movie.Director}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Writer</th>
                            <td>{movie.Writer}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Actors</th>
                            <td>{movie.Actors}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
    let loading = useSelector(state => state.movies.loading)
    let content=loading?<Spinner/>:movieInfo
    return(
        <>{content}</>
    )
}

export default Movie
