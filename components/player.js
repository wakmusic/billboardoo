import React, {useState} from "react";
import YouTubeVideo from "./youtubePlayer";
import PlayerInfo from "./playerInfo";
import Lyrics from "./lyrics";

function Player(props) {
    const [mute, setMute] = useState(false);

    async function sleep(ms) {
        return new Promise((r) => setTimeout(r, ms));
    }

    async function checkEnd() {
        let id = "";
        while (true) {
            let duration = document.getElementById('music-duration').innerHTML;
            let current = document.getElementById('music-progress').innerHTML;

            await sleep(10);

            const lyrics = document.getElementsByClassName('lyrics');
            let found = false;
            let currentSecs = parseInt(current.split(":")[0]) * 60 + parseInt(current.split(":")[1]);
            const wrap = document.getElementById('lyrics-wrap');

            for (let i = 0; i < lyrics.length; i++) {
                if (!found && parseInt(lyrics[i].id) - 1 <= currentSecs && parseInt(lyrics[i].ariaLabel) - 1 >= currentSecs) {
                    lyrics[i].className = "lyrics lyric-selected";
                    found = true;
                    if (id !== lyrics[i].id) {
                        id = lyrics[i].id
                        const location = document.getElementById(lyrics[i].id).offsetTop;
                        wrap.scrollTo({top: location - 120, behavior: "smooth"});
                    }
                } else {
                    lyrics[i].className = "lyrics";
                }
            }

            if (duration === current) {
                let nextMusic = [];
                let prevMusic = [];
                if (props.next) nextMusic = props.next.split(',');
                if (props.prev) prevMusic = props.prev.split(',');
                if (nextMusic.length === 0) {
                    break;
                }
                prevMusic.push(props.id);
                let nextId = nextMusic[0];
                nextMusic.shift();
                window.location.href = `/player/${nextId}?prev=${prevMusic.join(',')}&next=${nextMusic.join(',')}`;
            }
        }
    }

    function isPlayVideo() {
        const btn = document.getElementById("play-btn");
        if (btn.innerHTML.includes("fa-play")) {
            btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            playVideo();
        } else {
            btn.innerHTML.includes('fa-pause');
            pauseVideo();
        }
    }

    function playVideo() {
        const element = document.getElementById('play-btn');
        document.getElementsByClassName('ytVideo')[0]
            .contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            '*',
        );
        element.innerHTML = '<i class="fas fa-pause"></i>';
    }

    function pauseVideo() {
        const element = document.getElementById('play-btn');
        document.getElementsByClassName('ytVideo')[0]
            .contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            '*',
        );
        element.innerHTML = '<i class="fas fa-play"></i>';
    }

    const isMuted = () => {
        setMute(!mute);
        const volumeBtn = document.getElementById("volume-btn");
        if (mute) {
            document.getElementsByClassName('ytVideo')[0]
                .contentWindow.postMessage(
                '{"event":"command","func":"unMute","args":""}',
                '*',
            );
            const volumeBar = document.getElementById('volume-bar');
            if (volumeBar.value === 0) volumeBtn.innerHTML = '<i class="fa-solid fa-volume-off"/>'
            else if (volumeBar.value <= 50) volumeBtn.innerHTML = '<i class="fa-solid fa-volume-low"/>'
            else volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"/>'
        } else {
            document.getElementsByClassName('ytVideo')[0]
                .contentWindow.postMessage(
                '{"event":"command","func":"mute","args":""}',
                '*',
            );
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"/>'
        }
    };

    function setVolume(value) {
        document.getElementsByClassName('ytVideo')[0]
            .contentWindow.postMessage(
            JSON.stringify({
                event: "command",
                func: "unMute",
                args: []
            }), '*');
        setMute(false);

        if (value <= 0) document.getElementById('volume-btn').innerHTML = '<i class="fa-solid fa-volume-off"/>'
        else if (value <= 50) document.getElementById('volume-btn').innerHTML = '<i class="fa-solid fa-volume-low"/>'
        else document.getElementById('volume-btn').innerHTML = '<i class="fa-solid fa-volume-high"/>'

        document.getElementsByClassName('ytVideo')[0]
            .contentWindow.postMessage(
            JSON.stringify({
                event: "command",
                func: "setVolume",
                args: [parseInt(value)]
            }), '*');
    }

    function volume() {
        const volumeBar = document.getElementById('volume-bar');
        volumeBar.style.background = 'linear-gradient(to right, #000000 0%, #000000 ' + volumeBar.value + '%, #c4c4c4 '
            + volumeBar.value + '%, #c4c4c4 100%)';
        setVolume(volumeBar.value);
    }

    function playBar() {
        const progress = document.getElementById('progress');
        let duration = document.getElementById('music-duration').innerHTML.split(':');
        duration = parseInt(duration[0]) * 60 + parseInt(duration[1]);

        progress.style.background = 'linear-gradient(to right, #000000 0%, #000000 ' + progress.value + '%, #c4c4c4 '
            + progress.value + '%, #c4c4c4 100%)';

        document.getElementsByClassName('ytVideo')[0]
            .contentWindow.postMessage(
            JSON.stringify({
                event: "command",
                func: "seekTo",
                args: [duration * progress.value / 100, true]
            }), '*');
    }

    function moveTo(time) {
        document.getElementsByClassName('ytVideo')[0]
            .contentWindow.postMessage(
            JSON.stringify({
                event: "command",
                func: "seekTo",
                args: [time, true]
            }), '*');
        playVideo();
    }

    function movePrev() {
        const progress = document.getElementById('music-progress');
        if (parseInt(progress.innerHTML.split(':')[1]) <= 5 && props.prev) {
            let prev = props.prev.split(',');
            let prevMusic = prev[prev.length - 1];
            window.location.href = `/player/${prevMusic}?prev=${prev.slice(0, prev.length - 1).join(',')}&next=${props.id},${props.next}`;
        } else {
            document.getElementsByClassName('ytVideo')[0]
                .contentWindow.postMessage(
                JSON.stringify({
                    event: "command",
                    func: "seekTo",
                    args: [0, true]
                }), '*');
        }
    }

    function moveNext() {
        let next = props.next.split(',');
        if (!next) return;
        let nextMusic = next[0];
        window.location.href = `/player/${nextMusic}?prev=${props.prev},${props.id}&next=${next.slice(1, undefined).join(',')}`;
    }

    return (
        <div className="player-contents" onLoad={checkEnd}>
            <div id="player-wrap">
                <YouTubeVideo id={props.id}/>
            </div>

            <PlayerInfo id={props.id}/>
            <div className="progress-wrap">
                <input type="range" id="progress" min="0" defaultValue="0" max="100" onChange={playBar}/>
                <span id="music-progress">0:00</span>
                <span id="music-duration">-:--</span>
            </div>
            <div className="player-btn">
                <div id="next-btn" onClick={moveNext}><i className="fa-solid fa-forward-step"/></div>
                <div id="play-btn" onClick={isPlayVideo}><i className="fa-solid fa-play"/></div>
                <div id="back-btn" onClick={movePrev}><i className="fa-solid fa-backward-step"/></div>
            </div>
            <div className="volume-player-btn">
                <div id="volume-btn" onClick={isMuted}><i className="fa-solid fa-volume-low"/></div>
                <input type="range" id="volume-bar" min="0" defaultValue="0" max="100" onChange={volume}/>
            </div>

            <Lyrics moveTo={moveTo} id={props.id}/>

        </div>
    )
}

export default Player;