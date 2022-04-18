import React, { useState } from "react";
import { Thumbnail } from "../components";
import data from '../data.json';

const TV = () => {
    const [shows] = useState([...data.filter(show => (show.category === 'TV Series'))]);

    return (
        <div className="shows">
            <h1>TV Series</h1>
            { shows.map(show => (
                <Thumbnail
                    key={show.title}
                    title={show.title}
                    year={show.year}
                    category={show.category}
                    rating={show.rating}
                    bookmark={show.isBookmarked} 
                />
            ))}
        </div>
    )
}

export default TV;