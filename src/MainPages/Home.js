import React, { useEffect } from 'react';
import data from '../data.json';
import { tv, movie } from '../assets';

const Home = () => {
    //const [allMedia, setAllMedia] = useState([]);
    console.log(data)
    return (
        <div className="Home">
            <div className="trending-container">
                {data
                    .filter(media => (media.isTrending))
                    .map(media => (
                        <div className="trending">
                            <p className="trending__data">
                                <span className="trending__data--year">{media.year}</span> ·
                                <span className="trending__data--icon">
                                   <img src={media.category === 'Movie' ? movie : tv} alt={`${media.category} icon`}/> 
                                   {media.category}
                                </span> ·
                                <span className="trending__data--rating">{media.rating}</span>
                            </p>
                        </div>
                    ))
                }
            </div>

            <div className="recommended">
                recommended for you
            </div>
        </div>
    )
}

export default Home;