import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import News from "../components/news";
import '../stylesheets/news.css';

class NewsPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="fade-in-page">
                    <div className="news-header">
                        <h2>BILLBOARDOO CHART</h2>
                        <h1>NEWS</h1>
                    </div>
                    <News/>
                    <div id="news-separate"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default NewsPage;