import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "./spinner";


function PlayList(props) {
    const [data, setData] = useState([]);
    const ids = `${props.prev ? props.prev : ''}${props.prev ? ',' : ''}${props.current}${props.next ? ',' : ''}${props.next ? props.next : ''}`;
    let ids_array = ids.split(",");

    useEffect(() => {
        async function get() {
            const result = await axios.get(`/api/charts/search/ids/${ids}`);

            let tempData = [];
            for (let i = 0; i < ids_array.length; i++) {
                for (let j = 0; j < result.data.length; j++) {
                    if (ids_array[i] === result.data[j].id) {
                        tempData.push(result.data[j]);
                    }
                }
            }
            setData(tempData);
        }

        get().then();
    }, []);

    function getSong() {
        let songs = [];

        for (let i = 0; i < data.length; i++) {
            let url = '#'

            if (data[i].id !== props.current) {
                url = `/player/${data[i].id}?prev=${ids_array.slice(0, i)}&next=${ids_array.slice(i + 1, undefined)}`;
            }
            songs.push(
                <a href={url} className="fade-in-page">
                    <div className={data[i].id === props.current ? "list-body current-music" : "list-body"}>
                        <img src={data[i].image} className="list-image" alt="list-thumbnail"/>
                        <span className="list-title">{data[i].title}</span>
                        <span className="list-artist">{data[i].artist}</span>
                    </div>
                </a>
            );
        }
        return songs;
    }

    if (!data && !getSong()) return <Spinner/>;
    return (
        <div className="fade-in-page">{getSong()}</div>
    )
}

export default PlayList;