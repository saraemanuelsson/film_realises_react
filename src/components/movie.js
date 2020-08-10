import React from "react";
import MovieList from "./movieList";

const Movie = ({ children, url }) => {

    return (
        <div className = "movie">
            <ul>
                <a href = {url}>
                    <li>{ children }</li> 
                </a>
            </ul>
        </div>
    )

}

export default Movie;