import React, {useState, useEffect} from "react";
import axios from "axios";


function Videos(props) {
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                "/api/videos"
            );
            setData(result.data);
        }

        get().then(() => {
        });
    }, []);

    function playEmbeddedVideo(id) {
        const player = document.getElementById(props.type);
        player.innerHTML += `<div class="iframe-wrap"><iframe title="YouTube video player" 
src="https://www.youtube.com/embed/${id}?autoplay=1" allowFullScreen/></div>`
        player.style.display = 'inline';
        return true;
    }

    function getCode(value) {
        const temp = value.split('/')
        return temp[temp.length - 1];
    }

    function addVideos(start) {
        let videos = [];
        for (let i = start * 3; i < start * 3 + 3; i++) {
            if (!data[i]) break;

            videos.push(
                <div className="video-body" onClick={() => playEmbeddedVideo(getCode(data[i].url))}>
                    <img src={`https://i.ytimg.com/vi/${getCode(data[i].url)}/maxresdefault.jpg`} alt="reaction"
                         className="video-image"/>
                </div>
            )
        }
        return videos;
    }

    function getVideos() {
        let videos = [];
        for (let i = 0; i < props.maximum / 3; i++) {
            videos.push(
                <div className="videos-wrap">
                    {addVideos(i)}
                </div>
            )
        }
        return videos;
    }

    if (!data) return null;
    return (
        <div className="fade-in-page">{getVideos()}</div>
    )
}

export default Videos;
