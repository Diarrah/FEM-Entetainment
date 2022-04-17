import React, { useState } from "react";
import { movie as film, bookmarkEmpty, bookmarkFull } from "../assets";
import data from '../data.json';

const Movies = () => {
    const [movies] = useState([...data.filter(movie => (movie.category === 'Movie'))]);

    return (
        <div className="movies">
            {movies.map(movie => (
                <div className="movie">
                    <img 
                        className="movie__bookmark" 
                        src={movie.isBookmarked ? bookmarkFull : bookmarkEmpty} 
                        alt={`${movie.isBookmarked ? 'Full' : 'Empty'} bookmark icon`}
                    />
                    <p className="movie__data">
                        <span className="movie__data--year">{movie.year}</span> ·
                        <span className="movie__data--icon">
                            <img src={film} alt="Movie icon" /> {movie.category}
                        </span> ·
                        <span className="movie__data--rating">{movie.rating}</span>
                    </p>
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </div>
            
    )
}

export default Movies;