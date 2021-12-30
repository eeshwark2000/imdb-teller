import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex justify-content-between">
                <Link className="navbar-brand" to="/">MovieSeriesInfo</Link>
                
                    <div className="navbar-nav">
                        <Link className="nav-link text-light mr-3 " to="/"><span className="imdbi"><i className="fab fa-imdb fa-5x"></i></span></Link>
                        <Link className="nav-link text-light " to="/"><span className="reacti"><i className="fab fa-react fa-5x"></i></span></Link>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
