import React from "react";
import { Link } from 'react-router-dom';
import { logo, navBookmark, home, navMovies, navTv } from '../assets';

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={logo} alt="App logo" />

            <div className="navbar__links">
                <Link to="/">
                    <img className="navbar__links--home" src={home} alt="Home logo" />
                </Link>
                <Link to="/movies">
                    <img className="navbar__links--movies" src={navMovies} alt="Movies logo" />
                </Link>
                <Link to="/tv-series">
                    <img className="navbar__links--tv" src={navTv} alt="TV logo" />
                </Link>
                <Link to="/bookmarks">
                    <img className="navbar__links--movies" src={navBookmark} alt="Bookmark logo" />
                </Link>
            </div>

            <div className="navbar__user">

            </div>
        </div>
    )
}

export default Navbar;