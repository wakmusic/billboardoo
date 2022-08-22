import React, {useState} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/graph.css';
import BarGraph from "../components/bar";
import {Link} from "react-router-dom";


function GraphHour() {
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
                    <h1>HOURLY 100</h1>
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
                    <div className="graph-view">
                        <Link to="/charts/hourly" className="graph-menu-content">차트로 보기</Link>
                    </div>
                </div>
                <div className="graph-wrap">
                    <i className="fa-solid fa-chevron-left" onClick={prev}/>
                    <BarGraph type="hourly" page={page}/>
                    <i className="fa-solid fa-chevron-right" onClick={next}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default GraphHour;