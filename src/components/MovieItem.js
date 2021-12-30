import React from 'react'
import { Link } from 'react-router-dom';

function MovieItem(props) {
    let movie = props.movie;
    return (
        <div className="col-md-3 mb-5 d-inline-block">
            <div className="card card-body bg-dark text-center h-100">
                <img src={movie.Poster} alt="...Poster" className="w-100 mb-2"/>
                <h5 className="text-light card-title">
                    {movie.Title} - {movie.Year}
                </h5>
                <Link className="btn btn-primary" to={`/movie/${movie.imdbID}`}>
                    Movie Details
                </Link>
            </div>
        </div>
    )
}

export default MovieItem
