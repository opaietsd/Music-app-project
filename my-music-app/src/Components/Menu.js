import React from "react";
import { Link } from 'react-router-dom';
import companyLogo from './imgs/logo.svg';
import {BrowserRouter as Router, Routes, Route } from  'react-router-dom';
import Popular from "./Popular";

function Menu(){
    return(
        <div className="Menu-page">
            <header className="menu-header">
                <div className="menu-page-logo">
                    <img src={ companyLogo }></img>
                    <p>Soundify</p>
                </div>
                <div className="menu-greatings">
                    <h1>Soundify Playlists</h1>
                    <h2>Good day, User</h2>
                </div>
                <nav className="menu-nav">
                    <ul>
                        <li><Link to="/popular">Popular</Link></li>
                        <li><Link>Hot</Link></li>
                        <li><Link>Recent</Link></li>
                        <li><Link>Trending</Link></li>
                    </ul>
                </nav>
           </header>
        </div>
    )
}

export default Menu;