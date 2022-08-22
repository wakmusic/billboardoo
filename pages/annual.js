import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/new.css';
import ChartNewInfinite from "../components/chartNewInfinite";

class AnnualChart extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="fade-in-page">
                    <div className="news-header">
                        <h2>BILLBOARDOO CHART</h2>
                        <h1>ANNUAL</h1>
                    </div>
                    <hr className="new-regular-line"/>
                    <ChartNewInfinite type="yearly"/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default AnnualChart;