import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import PlayURL from "./getPlaylist";
import Update from "./update";
import axios from "axios";


function ChartList(props) {
    const [data, setData] = useState();
    const header = {
        'total': '최고',
        'hourly': '1시간전',
        'daily': '하루전',
        'weekly': '지난주',
        'monthly': '지난달'
    }
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/charts/${props.type}/100`
            );
            setData(result.data);
        }

        get().then();
    }, [props.type]);

    function update(i, data) {
        if (data.last === 0) return <span className="chart-status">NEW</span>;
        else if (i === data.last) return <span className="chart-status"><i className="fa-solid fa-minus"/></span>;
        else if (i < data.last) return (
            <span className="chart-status">
                <i className="fa-solid fa-chevron-up"/>
                <div className="increase-value">{data.last - i}</div>
            </span>
        );
        else if (i > data.last) return (
            <span className="chart-status">
                <i className="fa-solid fa-chevron-down"/>
                <div className="decrease-value">{i - data.last}</div>
            </span>
        );
        else return <span className="chart-status">NEW</span>;
    }

    function convertDate(date) {
        date = String(date);
        let year = date.slice(0, 2);
        let month = date.slice(2, 4);
        let day = date.slice(4, 6);
        return `20${year}.${month}.${day}`;
    }

    function getAlbum() {
        let albums = [];
        for (let i = 0; i < 100; i++) {
            albums.push(
                <Link to={`/player/${data[i].id}`}>
                    <div className="chart-body">
                        <div className="pos-wrap">
                            <span className="chart-pos">{i + 1}</span>
                        </div>
                        <img src={data[i].image} alt="cimg" className="chart-image"/>
                        {update(i + 1, data[i])}
                        <span className="chart-title">{data[i].title}</span>
                        <span className="chart-artist">{data[i].artist}</span>
                        <span className="chart-lyrics">{data[i].lyrics ? "가사" : null}</span>
                        <div className="right-align">
                            {props.type === "total" ?
                                <div className="chart-last">{data[i].last === 0 ? "-" : data[i].last}위</div> : null}
                            {props.type === "total" ?
                                <div className="chart-peak">{data[i].peak === 0 ? "-" : data[i].peak}위</div> :
                                <div className="chart-peak">{data[i].last === 0 ? "-" : data[i].last}위</div>}
                            <div className="chart-date">{convertDate(data[i].date)}</div>
                        </div>
                        <span className="chart-views">{props.type === "total" ? data[i].views.toLocaleString('ko-KR') :
                            data[i].increase.toLocaleString('ko-KR')}회</span>
                    </div>
                </Link>
            )
        }
        return albums;
    }

    function getHeader() {
        return (
            <div className="chart-header">
                <span id="header-pos">순위</span>
                <span id="header-title">제목</span>
                <span id="header-artist">가수</span>
                <div className="header-right-align">
                    {props.type === "total" ? <span id="header-last">지난주</span> : null}
                    <span id="header-peak">{header[props.type]}</span>
                    <span id="header-date">날짜</span>
                    <span id="header-views">조회수</span>
                </div>
            </div>
        );
    }

    if (!data) return null;
    if (props.type !== "total" && data[0].increase === 0) return (
        <>
            <div className="chart-wrap fade-in-page">
                <hr className="chart-separate-line"/>
                {getHeader()}
                <hr className="chart-separate-line"/>
            </div>

            <div className="null-data fade-in-page">조회수 증가량을 비교하기에 충분한 데이터가 수집되지 않았습니다.</div>
        </>
    )
    return (
        <div className="fade-in-page">
            <div className="chart-info">
                <PlayURL type={props.type} data={data}/>
                <Update type={props.type}/>
            </div>
            <div className="chart-wrap">
                <hr className="chart-separate-line"/>
                {getHeader()}
                <hr className="chart-separate-line"/>
                {getAlbum()}
            </div>
        </div>
    )
}

export default ChartList;