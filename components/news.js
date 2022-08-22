import React, {useState, useEffect} from "react";
import axios from "axios";
import Spinner from "./spinner";


function News(props) {
    const [data, setData] = useState();
    useEffect(() => {
        async function get() {
            const result = await axios.get(
                `/api/news`
            );
            setData(result.data);
        }

        get().then(() => {
        });
    }, []);

    function addNews(start) {
        let news = [];
        for (let i = start * 3; i < start * 3 + 3; i++) {
            if (!data[i]) {
                news.push(
                    // eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid
                    <a className="news-body invisible"/>
                );
            }
            else {
                news.push(
                    <a href={`https://cafe.naver.com/steamindiegame/${data[i].id}`} className="news-body" target="_blank"
                       rel="noreferrer">
                        <img className="news-thumbnail" src={`https://billboardoo.com/news/thumbnail/${data[i].time}.png`}
                             alt="news-thumbnail"/>
                        <div className="title-wrap"><span className="news-title">{data[i].title}</span></div>
                    </a>
                )
            }
        }
        return news;
    }

    function getNews() {
        let videos = [];
        let maximum = props.maximum;
        if (!maximum) maximum = parseInt(data.length / 3) + 1;

        for (let i = 0; i < maximum; i++) {
            videos.push(
                <div className="news-wrap">
                    {addNews(i)}
                </div>
            )
        }
        return videos;
    }

    if (!data) return <Spinner/>;
    return (
        <div className="fade-in-page">{getNews()}</div>
    )
}

export default News;