import React, {useState, useEffect} from "react";
import axios from "axios";


function New() {
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                "/api/charts/new"
            );
            setData(result.data);
        }

        get().then();
    }, []);

    function convertDate(date) {
        date = String(date);
        let year = date.slice(0, 2);
        let month = date.slice(2, 4);
        let day = date.slice(4, 6);
        return `20${year}.${month}.${day}`;
    }

    if (!data) return null;
    return (
        <div id="new-album-content" className="fade-in-page">
            <iframe src={`https://www.youtube.com/embed/${data.id}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen id="mv-player" className="new-player"/>
            <span className="new-album-title">{data.title}</span>
            <span className="new-album-artist">{data.artist}</span>
            <span className="new-album-views">{convertDate(data.date)}</span>
        </div>
    )
}

export default New;