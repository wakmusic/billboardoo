import React, {useState} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/graph.css';
import BarGraph from "../components/bar";
import {Link} from "react-router-dom";


function Graphs() {
    const [page, setPage] = useState(0);

    function prev() {
        if (page === 0) return null;
        setPage(prevState => prevState - 1);
    }

    function next() {
        if (page === 2) return null;
        setPage(prevState => prevState + 1);
    }

    return (
        <div className="container">
            <Header/>
            <div className="row fade-in-page">
                <div className="news-header">
                    <h2>BILLBOARDOO GRAPH</h2>
                    <h1>HOT 100</h1>
                </div>
                <hr className="chart-menu-line"/>
                <div className="chart-menu">
                    <Link to="/graphs" className="chart-menu-content">누적</Link>
                    <Link to="/graphs/hourly" className="chart-menu-content">시간</Link>
                    <Link to="/graphs/daily" className="chart-menu-content">일간</Link>
                    <Link to="/graphs/weekly" className="chart-menu-content">주간</Link>
                    <Link to="/graphs/monthly" className="chart-menu-content">월간</Link>
                </div>
                <hr className="chart-menu-line"/>
                <div className="graph-info">
                    <span>이세계아이돌의 리와인드(RE:WIND)는 다른 노래에 비해 조회수가 압도적으로 높아 그래프에서 제외되었습니다.</span>
                    <div className="graph-view">
                        <Link to="/charts" className="graph-menu-content">차트로 보기</Link>
                    </div>
                </div>
                <div className="graph-wrap">
                    <i className="fa-solid fa-chevron-left" onClick={prev}/>
                    <BarGraph type="total" page={page}/>
                    <i className="fa-solid fa-chevron-right" onClick={next}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Graphs;