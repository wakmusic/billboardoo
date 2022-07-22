import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function ChartNew(props) {
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/charts/new/${props.type}`
            );
            setData(result.data.data);
        }

        get().then(() => {
        });
    }, [props.type]);

    function convertDate(date) {
        date = String(date);
        let year = date.slice(0, 2);
        let month = date.slice(2, 4);
        let day = date.slice(4, 6);
        return `20${year}.${month}.${day}`;
    }

    function add(start) {
        let chart = [];
        for (let i = start * 3; i < start * 3 + 3; i++) {
            if (!data[i]) {
                chart.push(
                    <div className="new-body invisible"/>
                );
            }
            else {
                chart.push(
                    <a href={data[i].url} target="_blank" rel="noreferrer" className="new-body">
                        <img src={data[i].image} alt="new" className="new-image"/>
                        <div className="new-title-wrap">
                            <span className="new-title">{data[i].title}</span>
                            <span className="new-artist">{data[i].artist}</span>
                        </div>
                        <span className="new-date">{convertDate(data[i].date)}</span>
                    </a>
                )
            }
        }
        return chart;
    }

    function get() {
        let list = [];

        for (let i = 0; i < parseInt(data.length / 3) + 1; i++) {
            list.push(
                <div className="new-wrapper">
                    {add(i)}
                </div>
            )
        }
        return list;
    }

    if (!data || data.length === 0) return null;
    if (props.type === 'weekly') return (
        <div className="new-chart fade-in-page">
            <h3 className="albums-stat">{props.title}</h3>
            {get()}
        </div>
    )
    else return (
        <div className="new-chart fade-in-page">
            <Link to="/albums/monthly" className="view-all">전체보기</Link>
            <h3 className="albums-stat">{props.title}</h3>
            {get()}
        </div>
    )
}

export default ChartNew;