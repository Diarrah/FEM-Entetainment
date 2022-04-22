import React, { useState } from "react";
import { Thumbnail } from "../components";
import data from '../data.json';

const Movies = () => {
    const [movies] = useState([...data.filter(movie => (movie.category === 'Movie'))]);

    return (
        <div className="movies">
            <h1>Movies</h1>
            { movies.map(movie => (
                <Thumbnail 
                    key={movie.title}
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    year={movie.year}
                    category={movie.category}
                    rating={movie.rating}
                    bookmark={movie.isBookmarked}                      
                />
            ))}
        </div>
    )
}

export default Movies;