import React, {useEffect, useState} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/artist.css';
import '../stylesheets/easter.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import ArtistAlbums from "../components/artistAlbums";

function Artist() {
    const artist = useParams().artist;
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/artist/${artist}`
            );
            setData(result.data);
        }

        get().then();
    }, [artist]);

    function changeArtistOne() {
        if (artist === "ine") {
            const element = document.getElementsByClassName('artist-one')[0];
            const content = data.title.split('\n')
            element.innerHTML = `${content[0]}\n<div id="artist-ine">${content[1]}</div>`;
        }
    }

    if (!data) return null;
    return (
        <div className="container fade-in-page">
            <Header/>
            <div className="fade-in-page">
                <div className="news-header">
                    <h2>ARTIST</h2>
                    <h1 id="artist-name-title">{artist.toUpperCase()}</h1>
                </div>
                <hr className="new-regular-line"/>
                <div className="artist-wrap" onLoad={changeArtistOne}>
                    <div className="artist-body">
                        {artist === "lilpa" ? <Link to="/ee/jeon2maid" id="le">어떻게 사람이 전투메이드 ㅋㅋㅋ</Link> : <></>}
                        <img src={data.image} alt="artist" className="artist-image"/>
                        <h1 className="artist-title">{data.name}</h1>
                        <pre className="artist-one">{data.title}</pre>
                        <pre className="artist-desc">{data.description}</pre>
                        <div className="artist-btn-wrap">
                            {data.youtube ?
                                <a href={data.youtube} target="_blank" rel="noreferrer" className="artist-btn btn-icon">
                                    <i className="fa-brands fa-youtube"/>
                                </a> : <></>}
                            {data.twitch ?
                                <a href={data.twitch} target="_blank" rel="noreferrer"
                                   className="artist-btn btn-icon">
                                    <i className="fa-brands fa-twitch"/>
                                </a> : <></>
                            }
                            {data.instagram ?
                                <a href={data.instagram} target="_blank" rel="noreferrer"
                                   className="artist-btn btn-icon">
                                    <i className="fa-brands fa-instagram"/>
                                </a> : <></>
                            }
                            {data.twitter ?
                                <a href={data.twitter} target="_blank" rel="noreferrer"
                                   className="artist-btn btn-icon">
                                    <i className="fa-brands fa-twitter"/>
                                </a> : <></>
                            }
                            {data.soundcloud ?
                                <a href={data.soundcloud} target="_blank" rel="noreferrer"
                                   className="artist-btn btn-icon">
                                    <i className="fa-brands fa-soundcloud"/>
                                </a> : <></>
                            }
                        </div>
                    </div>
                </div>
                <div className="albums-wrap">
                    <h3 className="artist-albums-title">아티스트의 노래</h3>
                    <hr className="album-menu-line"/>
                    <ArtistAlbums artist={artist}/>
                </div>
                <Footer/>
            </div>
        </div>
    );

}

export default Artist;