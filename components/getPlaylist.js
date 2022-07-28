import React from "react";
import {Link} from "react-router-dom";


function PlayURL(props) {
    const data = props.data;

    function getURL() {
        let url = `/player/${data[0].id}?prev=&next=`;
        for (let i = 1; i < data.length; i++) {
            url += `${data[i].id}${i === data.length - 1 ? "" : ","}`;
        }
        return url;
    }

    if (!data || (data[0].increase && data[0].increase === 0)) return null;
    return (
        <Link to={getURL()} className="go-playlist fade-in-page">{data.length}곡 전체 듣기</Link>
    )
}

export default PlayURL;