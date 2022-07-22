import React from "react";
import {Link} from "react-router-dom";
import logo from '../images/billboardoo.png';
import '../stylesheets/index.css'


function Header(props) {
    function openMenu() {
        const burger = document.getElementById('burger');
        const slide = document.getElementById('menu-slide');
        if (burger.className.includes(' on')) {
            if (props.theme === "white") burger.className = 'burger menu-white';
            else burger.className = 'burger';
            slide.className = 'menu-slide'
        } else {
            burger.className = 'burger on';
            slide.className = 'menu-slide on';
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="" id="header-logo"/>
            </Link>
            <div className="menu">
                <Link to="/charts" className="menu-item">CHARTS</Link>
                <Link to="/albums" className="menu-item">ALBUMS</Link>
                <Link to="/artists" className="menu-item">ARTISTS</Link>
                <Link to="/news" className="menu-item">NEWS</Link>
                <Link to="/credit" className="menu-item">CREDIT</Link>
                <a href="https://waklon.billboardoo.com" target="_blank" rel="noreferrer"
                   className="menu-item">WAKLON</a>
            </div>
            <div className="mobile-menu">
                <div className="mob-menu" id="mob-menu" onClick={openMenu}>
                    {props.theme === "white" ?
                        (<span className="burger menu-white" id="burger">
                            <span className="top-line menu-white"/>
                            <span className="bot-line menu-white"/>
                        </span>) :
                        (<span className="burger" id="burger">
                            <span className="top-line"/>
                            <span className="bot-line"/>
                        </span>)
                    }
                </div>

                <div className="menu-slide" id="menu-slide">
                    <img src={logo} alt="logo" className="mobile-logo"/>
                    <ul>
                        <Link to="/">
                            <li>HOME</li>
                        </Link>
                        <Link to="/charts">
                            <li>CHARTS</li>
                        </Link>
                        <Link to="/graphs">
                            <li>GRAPHS</li>
                        </Link>
                        <Link to="/artists">
                            <li>ARTISTS</li>
                        </Link>
                        <Link to="/news">
                            <li>NEWS</li>
                        </Link>
                        <Link to="/credit">
                            <li>CREDIT</li>
                        </Link>
                        <a href="https://waklon.billboardoo.com" target="_blank" rel="noreferrer">
                            <li>WAKLON</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;