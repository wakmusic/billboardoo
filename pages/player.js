import React from "react";
import {useLocation, useParams} from "react-router-dom";
import '../stylesheets/player.css'
import Header from "../components/header";
import Footer from "../components/footer";
import queryString from 'query-string';
import PlayList from "../components/playlist";
import Player from "../components/player";


function MusicPlayer() {
    const id = useParams().id;
    const location = useLocation();
    const queryObj = queryString.parse(location.search);
    const {prev, next} = queryObj;

    return (
        <div className="container">
            <Header/>
            <div className="player-container fade-in-page">

                {<Player id={id} prev={prev} next={next}/>}
                <div className="player-list">
                    <span className="next-list">다음 트랙</span>
                    <hr className="list-line"/>
                    <div className="playlist-wrap">
                        {<PlayList prev={prev} current={id} next={next}/>}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MusicPlayer;