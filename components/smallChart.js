import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function SmallList() {
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                "/api/charts/daily/10"
            );
            setData(result.data);
        }

        get().then(() => {
        });
    }, []);

    function removeBrackets(value) {
        return value.split(' (')[0]
    }

    function getAlbum() {
        let albums = [];
        for (let i = 0; i < 10; i++) {
            albums.push(
                <div className="small-body">
                    <div className="small-position">{i + 1}</div>
                    <Link to={`/player/${data[i].id}`} className="small-song">{removeBrackets(data[i].title)}</Link>
                    <span className="small-artist">{removeBrackets(data[i].artist)}</span>
                    <hr className="album-line"/>
                </div>
            )
        }
        return albums;
    }

    if (!data) return null;
    return (
        <div className="fade-in-page">{getAlbum()}</div>
    )
}

export default SmallList;