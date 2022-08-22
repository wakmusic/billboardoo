import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import wakgood from "../images/woowakgood.PNG";
import isedol from "../images/isedol.png";
import gomem from "../images/gomem.png";
import ghost from "../images/ghost.png";
import Spinner from "./spinner";


function AddArtist(props) {
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/artists`
            );
            setData(result.data);
        }

        get().then();
    }, [props.type]);

    function getArtist(start, end) {
        let artists = [];
        for (let i = start; i < end; i++) {
            if (!data[i] || !data[i].id) {
                artists.push(
                    <div className="artist-icon-body invisible"/>
                )
            } else {
                artists.push(
                    <Link to={`/artist/${data[i].id}`} className="artist-icon-body">
                        <img src={data[i].image} alt="art-img" className="artist-icon"/>
                        <span className="artist-name">{data[i].name}</span>
                    </Link>
                )
            }
        }
        return artists;
    }

    function getWrap(start, end, limit) {
        let wrap = [];
        let add = 0;
        for (let i = start; i < end; i++) {
            if ((i - start + 1) % limit === 0) {
                wrap.push(
                    <div className="artists-wrap">
                        {getArtist(start + add, i + 1)}
                    </div>
                )
                add += limit
            }
        }
        return wrap;
    }

    if (!data) return <Spinner/>;
    return (
        <div className="fade-in-page">
            <div className="artist-section" id="woowakgood">
                <img src={wakgood} alt="artist-logo" className="artist-logo"/>

                <div className="artists-wrap">
                    <Link to={`/artist/${data[0].id}`} className="artist-icon-body">
                        <img src={data[0].image} alt="art-img" className="artist-icon"/>
                        <span className="artist-name">{data[0].name}</span>
                    </Link>
                </div>
            </div>
            <div className="artist-section" id="isedol">
                <img src={isedol} alt="artist-logo" className="artist-logo"/>
                {getWrap(1, 7, 3)}
            </div>
            <div className="artist-section" id="gomem">
                <img src={gomem} alt="artist-logo" className="artist-logo"/>
                {getWrap(7, 23, 4)}
            </div>
            <div className="artist-section" id="ghost">
                <img src={ghost} alt="artist-logo" className="artist-logo"/>
                {getWrap(23, 31, 4)}
            </div>
        </div>
    )
}

export default AddArtist;