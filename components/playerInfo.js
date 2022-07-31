import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "./spinner";


function PlayerInfo(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function get() {
            const result = await axios.get(`/api/charts/search/id/${props.id}`);
            setData(result.data);
        }
        get().then();
    }, [props.id]);

    if (!data) return <Spinner/>;
    return (
        <div className="fade-in-page player-info">
            <a href={data.url} target="_blank" rel="noreferrer">
                <img src={data.image} className="player-image fade-in-page" alt=""/>
            </a>
            <h3 className="player-title">{data.title}</h3>
            <span className="player-artist">{data.artist}</span>
        </div>
    )
}

export default PlayerInfo;