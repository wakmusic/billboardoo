import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/artist.css';
import AddArtist from "../components/artist";


class ArtistLanding extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="fade-in-page">
                    <div className="news-header">
                        <h2>BILLBOARDOO CHART</h2>
                        <h1>ARTISTS</h1>
                    </div>
                    <hr className="new-regular-line"/>
                    <div className="artist-section-wrap">
                        <span className="artist-info">아티스트를 클릭해 보세요!</span>
                        {<AddArtist/>}
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ArtistLanding;