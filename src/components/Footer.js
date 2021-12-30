import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2017-2020 IMDB Info external API used: <a href="http://www.omdbapi.com/">OMDb</a></p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Privacy</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Support</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
