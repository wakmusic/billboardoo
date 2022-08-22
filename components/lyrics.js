import React from "react";
import useSubtitles from "react-subtitles";


function Lyrics(props) {
    const [subtitle] = useSubtitles({subtitles: `/lyrics/${props.id}.vtt`});

    function convertTime(time) {
        if (time >= 10000) {
            let hour = time.toString().slice(0, 1);
            let min = time.toString().slice(1, 3);
            return Number(time.toString().slice(2, undefined)) + 60 * Number(min) + 3600 * Number(hour);
        }
        if (time >= 1000) {
            let min = time.toString().slice(0, 2);
            return Number(time.toString().slice(2, undefined)) + 60 * Number(min);
        }
        if (time >= 100) {
            let min = time.toString().slice(0, 1);
            return Number(time.toString().slice(1, undefined)) + 60 * Number(min);
        } else return time;
    }

    if (subtitle.length === 0) return null;
    return (
        <div className="lyrics-wrap" id="lyrics-wrap">
            {subtitle.map(s => <p onClick={() => props.moveTo(convertTime(s.start))} id={convertTime(s.start)}
                                  className="lyrics" aria-label={convertTime(s.stop)}>{s.text}</p>)}
        </div>
    )
}

export default Lyrics;