import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Search } from './components';
import { Home, Movies, TV, Bookmarked } from './MainPages';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Search />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tv-series" element={<TV />} />
                    <Route path="/bookmarks" element={<Bookmarked />} />
                </Routes>
            </div>
        </Router>
        
    )
}

 export default App;