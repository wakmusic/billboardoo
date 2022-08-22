import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import jururu from "../images/jururu.png";


class JururuEasterEgg extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="je fade-in-page">
                    <img src={jururu} alt="" id="jururu-aggro"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default JururuEasterEgg;