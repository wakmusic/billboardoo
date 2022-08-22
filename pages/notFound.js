import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";


class NotFound extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <h1 className="nf-title">404 Not Found</h1>
                <h2 className="nf-sub">페이지를 찾을 수 없습니다.</h2>
                <Footer/>
            </div>
        );
    }
}

export default NotFound;