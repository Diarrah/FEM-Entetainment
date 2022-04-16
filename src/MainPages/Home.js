import React from 'react';
import data from '../data.json';
import { tv, movie, bookmarkEmpty, bookmarkFull } from '../assets';

const Home = () => {
    console.log(data)
    return (
        <div className="Home">
            <div className="trending-container">
                <h1 className="trending__headline">Trending</h1>
                {data
                    .filter(media => (media.isTrending))
                    .map(media => (
                        <div className="trending">
                            <img 
                                className="trending__bookmark" 
                                src={media.isBookmarked ? bookmarkFull : bookmarkEmpty} 
                                alt={`${media.isBookmarked ? 'Full' : 'Empty'} bookmark icon`}
                            />
                            <p className="trending__data">
                                <span className="trending__data--year">{media.year}</span> ·
                                <span className="trending__data--icon">
                                   <img src={media.category === 'Movie' ? movie : tv} alt={`${media.category} icon`}/> 
                                   {media.category}
                                </span> ·
                                <span className="trending__data--rating">{media.rating}</span>
                            </p>
                            <h3 className="trending__title">{media.title}</h3>
                        </div>
                    ))
                }
            </div>

            <div className="recommended-container">
                <h2 className="recommended__headline">Recommended for you</h2>
                {data
                    .filter(media => (!media.isTrending))
                    .map(media => (
                        <div className="recommended">
                            <img 
                                className="recommended__bookmark" 
                                src={media.isBookmarked ? bookmarkFull : bookmarkEmpty} 
                                alt={`${media.isBookmarked ? 'Full' : 'Empty'} bookmark icon`}
                            />
                            <p className="recommended__data">
                                <span className="recommended__data--year">{media.year}</span> ·
                                <span className="recommended__data--icon">
                                   <img src={media.category === 'Movie' ? movie : tv} alt={`${media.category} icon`}/> 
                                   {media.category}
                                </span> ·
                                <span className="recommended__data--rating">{media.rating}</span>
                            </p>
                            <h3>{media.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;