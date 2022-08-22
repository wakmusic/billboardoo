import React from "react";

function Spinner() {
    return (
        <div className="loading">
            <div className="preloader">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
            <div id="loading-text"><span>정보를 불러오는 중입니다.</span></div>
        </div>
    )
}

export default Spinner;
