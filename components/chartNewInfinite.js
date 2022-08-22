import React, {useState, useEffect, useCallback} from "react"
import {useInView} from "react-intersection-observer"
import axios from "axios"


const ChartNewInfinite = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(false);
    const [ref, inView] = useInView();

    const getItems = useCallback(async () => {
        setLoading(true);
        await axios.get(`/api/charts/new/${props.type}/${page}`).then((res) => {
            setItems(prevState => [...prevState, res.data])
        });
        setLoading(false);
    }, [page, props.type]);

    useEffect(() => {
        getItems().then();
    }, [getItems]);

    useEffect(() => {
        if (inView && !loading) {
            setPage(String(items[items.length - 1].previous));
        }
    }, [inView, items, loading, page])

    function convertDate(date) {
        date = String(date);
        let year = date.slice(0, 2);
        let month = date.slice(2, 4);
        let day = date.slice(4, 6);
        return `20${year}.${month}.${day}`;
    }

    function add(data, start) {
        let chart = [];
        for (let i = start * 3; i < start * 3 + 3; i++) {
            if (!data[i]) {
                chart.push(
                    <div className="new-body invisible"/>
                );
            } else {
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

    function get(data) {
        let list = [];
        for (let i = 0; i < parseInt(data.length / 3) + 1; i++) {
            list.push(
                <div className="new-wrapper">
                    {add(data, i)}
                </div>
            )
        }
        return list;
    }

    function getTitle(data) {
        if (props.type === 'monthly') return convertDate(data.start).slice(undefined, 7);
        else return convertDate(data.start).slice(undefined, 4);
    }

    function wrap(data, ref) {
        if (data.data.length === 0) return (
            <div className="invisible" ref={ref}/>
        );
        else if (ref) {
            return (
                <div className="new-chart fade-in-page" ref={ref} id={data.start}>
                    <h3 className="albums-stat">{getTitle(data)}</h3>
                    <a href={`#${data.previous}`}><span className="arrow-down"/></a>
                    <a href={`#${data.next}`}><span className="arrow-up"/></a>
                    {get(data.data)}
                </div>
            )
        } else {
            return (
                <div className="new-chart fade-in-page" id={data.start}>
                    <h3 className="albums-stat">{getTitle(data)}</h3>
                    <a href={`#${data.previous}`}><span className="arrow-down"/></a>
                    <a href={`#${data.next}`}><span className="arrow-up"/></a>
                    {get(data.data)}
                </div>
            )
        }
    }

    return (
        <div>
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    {items.length - 1 === idx ? (
                        wrap(item, ref)
                    ) : (
                        wrap(item)
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default ChartNewInfinite;