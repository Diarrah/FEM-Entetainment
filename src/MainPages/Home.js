import React from 'react';
import data from '../data.json';
import { Thumbnail } from '../components';
//import { tv, movie, bookmarkEmpty, bookmarkFull } from '../assets';

const Home = () => {
    console.log(data)

    return (
        <div className="Home">
            <h1 className="trending__headline">Trending</h1>
            <div className="trending-container">
                {data
                    .filter(media => (media.isTrending))
                    .map(media => (
                        <Thumbnail 
                            key={media.title}
                            thumbnail={media.thumbnail}
                            title={media.title}
                            year={media.year}
                            category={media.category}
                            rating={media.rating}
                            bookmark={media.isBookmarked}   
                            isTrending={media.isTrending}                   
                        />
                    ))
                }
            </div>

            <h2 className="recommended__headline">Recommended for you</h2>
            <div className="recommended-container">
                {data
                    .filter(media => (!media.isTrending))
                    .map(media => (
                        <Thumbnail 
                            key={media.title}
                            thumbnail={media.thumbnail}
                            title={media.title}
                            year={media.year}
                            category={media.category}
                            rating={media.rating}
                            bookmark={media.isBookmarked}   
                            isTrending={media.isTrending}                   
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;