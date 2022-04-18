import React from "react";
import { movie, tv, bookmarkEmpty, bookmarkFull } from "../assets";

const Thumbnail = ({ title, year, category, rating, bookmark }) => {
    return (
        <div className="thumbnail">
            <img 
                className="thumbnail__bookmark" 
                src={bookmark ? bookmarkFull : bookmarkEmpty} 
                alt={`${bookmark ? 'Full' : 'Empty'} bookmark icon`}
            />
            <p className="thumbnail__data">
                <span className="thumbnail__data--year">{year}</span> ·
                <span className="thumbnail__data--icon">
                    <img src={category === 'Movie' ? movie : tv} alt={`${category} icon`}/> 
                    {category}
                </span> ·
                <span className="thumbnail__data--rating">{rating}</span>
            </p>
            <h3>{title}</h3>
        </div>
    )
}

export default Thumbnail;