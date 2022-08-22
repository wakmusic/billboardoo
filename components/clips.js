import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "./spinner";

function Clips(props) {
    const [data, setData] = useState();
    const [users, setUser] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                "/api/twitch/clips"
            );
            setData(result.data);

            const result2 = await axios.get(
                "/api/twitch/users"
            );
            setUser(result2.data);
        }

        get().then(() => {
        });
    }, []);

    function findIcon(value) {
        for (let i = 0; i < users.length; i++) {
            if (value === users[i].id) return users[i].profile;
        }
    }

    function findName(value) {
        for (let i = 0; i < users.length; i++) {
            if (value === users[i].id) return users[i].display;
        }
    }

    function playEmbeddedVideo(id) {
        const player = document.getElementById(props.type);
        player.innerHTML += `<div class="iframe-wrap"><iframe title="Clip" 
src="https://clips.twitch.tv/embed?clip=${id}&parent=localhost&autoplay=true&muted=false" 
height="500" width="540" allowFullScreen/></div>`
        player.style.display = 'inline';
        return true;
    }

    function addClips(start) {
        let clips = [];
        for (let i = start * 3; i < start * 3 + 3; i++) {
            if (!data[i]) break;

            clips.push(
                <div className="clip-body" onClick={() => playEmbeddedVideo(data[i].id)}>
                    <img src={data[i].thumbnail} alt="clip" className="clip-image"/>
                    <div className="clip-info">
                        <img
                            src={findIcon(data[i].userId)}
                            alt="icon" className="clip-icon"/>
                        <span className="clip-user">{findName(data[i].userId)}</span>
                        <span className="clip-title">{data[i].title}</span>
                        <span className="clip-view">조회수 {data[i].views.toLocaleString('ko-KR')}</span>
                    </div>
                </div>
            )
        }
        return clips;
    }

    function getClips() {
        let clips = [];
        for (let i = 0; i < props.maximum / 3; i++) {
            clips.push(
                <div className="clips-wrap">
                    {addClips(i)}
                </div>
            )
        }
        return clips;
    }

    if (!data || !users) return <Spinner/>
    return (
        <>{getClips()}</>
    )
}

export default Clips;
