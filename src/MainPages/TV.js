import React, { useState } from "react";
import { tv, bookmarkEmpty, bookmarkFull } from "../assets";
import data from '../data.json';

const TV = () => {
    const [series] = useState([...data.filter(series => (series.category === 'TV Series'))]);

    return (
        <div className="shows">
            <h1>TV Series</h1>
            {series.map(show => (
                <div className="show">
                    <img 
                        className="show__bookmark" 
                        src={show.isBookmarked ? bookmarkFull : bookmarkEmpty} 
                        alt={`${show.isBookmarked ? 'Full' : 'Empty'} bookmark icon`}
                    />
                    <p className="show__data">
                        <span className="show__data--year">{show.year}</span> ·
                        <span className="show__data--icon">
                            <img src={tv} alt="show icon" /> {show.category}
                        </span> ·
                        <span className="show__data--rating">{show.rating}</span>
                    </p>
                    <h3>{show.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default TV;