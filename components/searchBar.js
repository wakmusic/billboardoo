import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function SearchBar() {
    const [element, setElement] = useState([]);

    function convertDate(date) {
        date = String(date);
        let year = date.slice(0, 2);
        let month = date.slice(2, 4);
        let day = date.slice(4, 6);
        return `20${year}.${month}.${day}`;
    }

    async function updateValue(value) {
        const result = await axios.get(`/api/charts/search/keyword/${value}`);
        const data = result.data.slice(undefined, 4);

        let items = [];
        // eslint-disable-next-line array-callback-return
        data.map((d) => {
            items.push(
                <Link to={`/player/${d.id}`}>
                    <div className="result-item">
                        <img src={d.image.replace('hqdefault', 'maxresdefault')} alt="search-img" className="search-image"/>
                        <div className="result-vertical"/>
                        <span className="result-title">{d.title}</span>
                        <span className="result-artist">{d.artist}</span>
                        <span className="result-date">{convertDate(d.date)}</span>
                    </div>
                </Link>
            )
        })
        setElement(items);
    }

    return (
        <div className="search-btn-wrap">
            <i className="fa-solid fa-magnifying-glass"/>
            <input type="text" placeholder="노래 제목 또는 아티스트명 입력" className="search-input"
                   onChange={e => updateValue(e.target.value)}/>
            <div id="search-result">
                {element ? element : <></>}
            </div>
        </div>
    )
}

export default SearchBar;