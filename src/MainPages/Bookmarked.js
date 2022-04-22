import React, { useState } from "react";
import { Thumbnail } from "../components";
import data from '../data.json';

const Bookmarked = () => {
    const [bookmarks] = useState([...data.filter(content => (content.isBookmarked))]);
    const [bookmarkedMovies] = useState([...bookmarks.filter(film => (film.category === 'Movie'))]);
    const [bookmarkedShows] = useState([...bookmarks.filter(show => (show.category === 'TV Series'))]);

    return (
        <>
        { bookmarkedMovies && (
            <div className="bookmarked-movies">
                <h1>Bookmarked Movies</h1>
                { bookmarkedMovies.map(movie => (
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
        )}

        { bookmarkedShows && (
            <div className="bookmarked-shows">
                <h1>Bookmarked TV Series</h1>
                { bookmarkedShows.map(show => (
                    <Thumbnail
                        key={show.title}
                        thumbnail={show.thumbnail}
                        title={show.title}
                        year={show.year}
                        category={show.category}
                        rating={show.rating}
                        bookmark={show.isBookmarked} 
                    />
                ))}
            </div>
        )}

        { !bookmarkedMovies && !bookmarkedShows && (
            <p>You have no bookmarked content</p>
        )}
        </>
    )
}

export default Bookmarked;