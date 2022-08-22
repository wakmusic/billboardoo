import React from 'react';
import '../stylesheets/charts.css';
import Header from "../components/header";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import ChartList from "../components/chartList";


class ChartsMonth extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="fade-in-page">
                    <div className="news-header">
                        <h2>BILLBOARDOO CHART</h2>
                        <h1>MONTHLY 100</h1>
                    </div>
                    <hr className="chart-menu-line"/>
                    <div className="chart-menu">
                        <Link to="/charts" className="chart-menu-content">누적</Link>
                        <Link to="/charts/hourly" className="chart-menu-content">시간</Link>
                        <Link to="/charts/daily" className="chart-menu-content">일간</Link>
                        <Link to="/charts/weekly" className="chart-menu-content">주간</Link>
                        <Link to="/charts/monthly" className="chart-menu-content">월간</Link>
                    </div>
                    <hr className="chart-menu-line"/>
                    <div className="graph-view">
                        <Link to="/graphs/monthly" className="chart-menu-content">그래프로 보기</Link>
                    </div>
                    <ChartList type="monthly"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ChartsMonth;
