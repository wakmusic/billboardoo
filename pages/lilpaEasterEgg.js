import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import viichan from "../images/viichan.png";
import hachi from "../images/hachikitachi.png";


class LilpaEasterEgg extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="fade-in-page">
                    <div className="news-header">
                        <h2>JEONTUMAID CHART</h2>
                        <h1>HOT 13</h1>
                    </div>
                    <hr className="chart-menu-line"/>
                    <div className="chart-wrap">
                        <hr className="chart-separate-line"/>
                        <div className="chart-header">
                            <span id="header-pos">순위</span>
                            <span id="header-title">제목</span>
                            <span id="header-artist">가수</span>
                            <div className="header-right-align">
                                <span id="header-last">지난주</span>
                                <span id="header-peak">최고</span>
                                <span id="header-date">날짜</span>
                                <span id="header-views">조회수</span>
                            </div>
                        </div>
                        <hr className="chart-separate-line"/>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">1</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/oRiQHxft2mY/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">Jeontu Enough</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">1위</div>
                                <div className="chart-peak">1위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">1,202,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">2</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/Zcr5xZ2H64A/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">전투메이로이드</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">2위</div>
                                <div className="chart-peak">2위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">839,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">3</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/djl-pROUR50/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">전투메이드 챌린지</span>
                            <span className="chart-artist">아컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">3위</div>
                                <div className="chart-peak">3위</div>
                                <div className="chart-date">2022.01.58</div>
                            </div>
                            <span className="chart-views">731,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">4</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/wXweihsAJhI/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">뇨! 우리는 전투메이드단☆</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">4위</div>
                                <div className="chart-peak">4위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">492,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">5</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/DPEtmqvaKqY/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">부코서비스</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">5위</div>
                                <div className="chart-peak">5위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">300,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">6</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/7IcafhbXprU/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">전투메이등</span>
                            <span className="chart-artist">아컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">6위</div>
                                <div className="chart-peak">6위</div>
                                <div className="chart-date">2022.01.58</div>
                            </div>
                            <span className="chart-views">271,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">7</span>
                            </div>
                            <img src={viichan} alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">Jeontumaid in Buko</span>
                            <span className="chart-artist">챤컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">7위</div>
                                <div className="chart-peak">7위</div>
                                <div className="chart-date">2022.01.16</div>
                            </div>
                            <span className="chart-views">208,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">8</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/Q0LWEyWI8-E/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">전투참치</span>
                            <span className="chart-artist">징컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">8위</div>
                                <div className="chart-peak">8위</div>
                                <div className="chart-date">2022.10.09</div>
                            </div>
                            <span className="chart-views">186,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">9</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/tZtskWzmpXs/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">드리밍전투</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">9위</div>
                                <div className="chart-peak">9위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">168,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">10</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/zqLrUp4rnxU/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">전투바라시</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">10위</div>
                                <div className="chart-peak">10위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">164,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">11</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/XIE3HSUEltU/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">전전전(투메이드)세</span>
                            <span className="chart-artist">아컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">11위</div>
                                <div className="chart-peak">11위</div>
                                <div className="chart-date">2022.01.58</div>
                            </div>
                            <span className="chart-views">158,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">12</span>
                            </div>
                            <img src="https://i.ytimg.com/vi/raEprM924Ek/hqdefault.jpg" alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">멜론 36위 전투메이드</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">12위</div>
                                <div className="chart-peak">12위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">153,700회</span>
                        </div>
                        <div className="chart-body">
                            <div className="pos-wrap">
                                <span className="chart-pos">13</span>
                            </div>
                            <img src={hachi} alt="cimg" className="chart-image"/>
                            <span className="chart-status">
                            <i className="fa-solid fa-chevron-up"/>
                            <div className="increase-value">700</div>
                        </span>
                            <span className="chart-title">전투메이드키타치</span>
                            <span className="chart-artist">릴컬로이드</span>
                            <div className="right-align">
                                <div className="chart-last">13위</div>
                                <div className="chart-peak">13위</div>
                                <div className="chart-date">2022.03.09</div>
                            </div>
                            <span className="chart-views">150,700회</span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LilpaEasterEgg;