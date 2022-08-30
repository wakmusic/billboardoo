import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import logo from '../images/billboardoo.png';
import '../stylesheets/index.css'
import axios from "axios";


function Header(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/auth`
            );
            setData(result.data);
        }
        get().then();
    }, [props.type]);

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

    function loadProfile() {
        if (!data || data.data === 401) return <Link to="/login" className="login-btn">로그인</Link>;
        switch (data.provider) {
            case "naver":
                return (
                    <div className="profile">
                        <img src={data._json.profile_image} alt="profile" className="profile-img"/>
                        <span className="display-name">{data.displayName}</span>
                    </div>
                );
            case "google":
                return (
                    <div className="profile">
                        <img src={data._json.picture} alt="profile" className="profile-img"/>
                        <span className="display-name">{data.displayName}</span>
                    </div>
                );
            case "twitch":
                return (
                    <div className="profile">
                        <img src={data.profile_image_url} alt="profile" className="profile-img"/>
                        <span className="display-name">{data.display_name}</span>
                    </div>
                )
            default:
                return <></>
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
                <div className="right">
                    {loadProfile()}
                </div>
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