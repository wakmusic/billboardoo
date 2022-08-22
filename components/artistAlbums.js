import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import cotton from "../images/cotton.png";
import PlayURL from "./getPlaylist";


function ArtistAlbums(props) {
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/albums/${props.artist}`
            );
            setData(result.data);
        }

        get().then();
    }, [props.artist]);

    function convertDate(date) {
        date = String(date);
        let year = date.slice(0, 2);
        let month = date.slice(2, 4);
        let day = date.slice(4, 6);
        return `20${year}.${month}.${day}`;
    }

    function getAlbums() {
        let music = [];
        for (let i = 0; i < data.length; i++) {
            music.push(
                <Link to={`/player/${data[i].id}`}>
                    <div className="artist-albums-body">
                        <img src={data[i].image} alt="cimg" className="chart-image artist-albums-image"/>
                        <span className="chart-title artist-albums-name">{data[i].title}</span>
                        <span className="chart-artist artist-albums-artist">{data[i].artist}</span>
                        <div className="right-align">
                            <div className="chart-date artist-albums-date">{convertDate(data[i].date)}</div>
                        </div>
                    </div>
                </Link>
            )

            if (props.artist === "jururu" && i === data.length - 1) {
                music.push(
                    <Link to={`/player/zhxmsxms`}>
                        <div className="artist-albums-body">
                            <img src={cotton} alt="cimg" className="chart-image artist-albums-image"/>
                            <span className="chart-title artist-albums-name">코튼튼</span>
                            <span className="chart-artist artist-albums-artist">주르르</span>
                            <div className="right-align">
                                <div className="chart-date artist-albums-date">2005.06.10</div>
                            </div>
                        </div>
                    </Link>
                )
            }
        }
        return music;
    }

    if (!data) return null;
    return (
        <div className="artist-albums fade-in-page">
            <div className="play-wrap"><PlayURL data={data}/></div>
            <div className="artist-album-count">총 {data.length}곡</div>
            {getAlbums()}
        </div>
    )
}

export default ArtistAlbums;