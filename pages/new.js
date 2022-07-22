import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/new.css';
import ChartNew from "../components/chartNew";
import {Link} from "react-router-dom";
import SearchBar from "../components/searchBar";

class NewChart extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="fade-in-page">
                    <div className="news-header">
                        <h2>BILLBOARDOO CHART</h2>
                        <h1>ALBUMS</h1>
                    </div>
                    <hr className="new-regular-line"/>
                    {<SearchBar/>}
                    <div className="btn-wrap">
                        <Link to="/albums/monthly" className="new-btn">
                            <span>월별 노래</span>
                        </Link>
                        <Link to="/albums/annual" className="new-btn">
                            <span>연도별 노래</span>
                        </Link>
                    </div>
                    <ChartNew type="weekly" title="이주의 신곡"/>
                    <ChartNew type="monthly" title="이달의 신곡"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default NewChart;