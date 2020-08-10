import React from "react";
import Movie from "./movie";
import MovieContainer from "../containers/movieContainer";
import "./movieList.css";

const MovieList = ({ movies }) => {

    const movieNodes = movies.map(({ id, name, url }) => <Movie key = {id} url = {url}>{ name }</Movie>);

    return (
        <div className = "movie-list">
            { movieNodes }
        </div>
    )

}

export default MovieList;