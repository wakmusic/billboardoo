import React from "react";
import Header from "../components/header";
import '../stylesheets/main.css';
import SmallList from "../components/smallChart";
import New from "../components/newAlbum";
import {Link} from "react-router-dom";
import Videos from "../components/youtube";
import Footer from "../components/footer";
import News from "../components/news";

let hover = false;


class Main extends React.Component {
    componentDidMount() {
        const element = document.getElementsByClassName('slide')[0];
        const element2 = document.getElementsByClassName('slide-list')[0];

        element.addEventListener('mouseout', () => {
            hover = false
        })
        element.addEventListener('mouseover', () => {
            hover = true
        })

        element2.addEventListener('mouseout', () => {
            hover = false
        })
        element2.addEventListener('mouseover', () => {
            hover = true
        })

        setTimeout(() => {
            this.loop()
        }, 4000);
    }

    goto(page) {
        const element = document.getElementById('slide' + page)
        const radio = document.getElementById('radio' + page);
        for (let i = 1; i < 5; i++) {
            if (i !== page) {
                const temp = document.getElementById(`slide${i}`);
                const tempRadio = document.getElementById(`radio${i}`);
                temp.style.display = 'none';
                tempRadio.checked = false;
            }
        }

        radio.checked = true;
        element.className = 'fade-in-box';
        element.style.display = 'block';
        return true;
    }

    next() {
        let page;
        for (let i = 1; i < 5; i++) {
            const temp = document.getElementById(`slide${i}`);
            if (temp.style.display !== 'none') {
                page = i;
                break;
            }
        }

        let nextPage = page + 1;
        if (page === 4) nextPage = 1;
        return this.goto(nextPage);
    }

    prev() {
        let page;
        for (let i = 1; i < 5; i++) {
            const temp = document.getElementById(`slide${i}`);
            if (temp.style.display !== 'none') {
                page = i;
                break;
            }
        }

        let prevPage = page - 1;
        if (page === 1) prevPage = 4;
        return this.goto(prevPage);
    }

    loop() {
        if (!hover) this.next();
        setTimeout(() => {
            this.loop()
        }, 4000);
    }

    hide() {
        const element = document.getElementById('yt-player-main');
        element.style.display = 'none';
        element.innerHTML = '<div class="player-background"></div>'
    }

    render() {
        return (
            <div className="container">
                <Header theme="white"/>
                <div className="fade-in-page">
                    <div className="slide-list">
                        <label htmlFor="radio1" className="slide-select" onClick={() => this.goto(1)}>
                            <input type="radio" id="radio1" name="slide" defaultChecked/>
                        </label>
                        <label htmlFor="radio2" className="slide-select" onClick={() => this.goto(2)}>
                            <input type="radio" id="radio2" name="slide"/>
                        </label>
                        <label htmlFor="radio3" className="slide-select" onClick={() => this.goto(3)}>
                            <input type="radio" id="radio3" name="slide"/>
                        </label>
                        <label htmlFor="radio4" className="slide-select" onClick={() => this.goto(4)}>
                            <input type="radio" id="radio4" name="slide"/>
                        </label>
                        <span className="arrow-prev" onClick={() => this.prev()}/>
                        <span className="arrow-next" onClick={() => this.next()}/>
                    </div>
                    <div className="slide">
                        <section id="slide1">
                            <h5>이세계아이돌 1집 RE:WIND,<br/>벅스 실시간 차트 1위 달성</h5>
                            <span className="section-info">200집 베테랑 가수 우왁굳, 프로듀서로서의 첫발을 내딛다</span>
                            <iframe src="https://www.youtube.com/embed/fgSXAKsq-Vo"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen id="mv-player" className="section-image"/>
                        </section>
                        <section id="slide2">
                            <h5>개같이 떡상한 리와인드에 이어,<br/>이세계아이돌 2집 "겨울봄" 발매</h5>
                            <a className="section-info hyperlink" href="https://www.youtube.com/shorts/raEprM924Ek"
                               target="_blank" rel="noreferrer">소속 멤버 비챤, 멜론 차트 36위 달성하자 신곡 발표 (보러가기)</a>
                            <iframe src="https://www.youtube.com/embed/JY-gJkMuJ94"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen id="mv-player" className="section-image"/>
                        </section>
                        <section id="slide3">
                            <h5>"부려먹는 게 아니라 내가 비빈거다"<br/>한 편의 영화를 보는 듯한 감동</h5>
                            <span className="section-info">왁 미제라블(Wak Miserables) - 2021 연말공모전</span>
                            <iframe src="https://www.youtube.com/embed/ys52M8cwuNk"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen className="section-image"/>
                        </section>
                        <section id="slide4">
                            <h5>채신기술을 도입한 언리얼 콘서트,<br/>"광고마저 경이롭다"</h5>
                            <span className="section-info">"Ju. T'aime" - 주르르 10만 기념 콘서트</span>
                            <iframe src="https://www.youtube.com/embed/wmbN3BPIUbQ"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen className="section-image"/>
                        </section>
                    </div>
                    <div className="chart-small">
                        <h1>DAILY 100</h1>
                        <Link to="/charts/daily" className="chart-btn">전체순위<i className="fa-solid fa-plus"/></Link>
                        <hr className="title-line"/>
                        <div className="small-title">
                            <span>곡명</span>
                            <span>가수</span>
                        </div>
                        <SmallList/>
                        <hr className="album-line-end"/>
                    </div>
                    <div className="new-album">
                        <h1>NEW ALBUM</h1>
                        <hr className="new-line"/>
                        <New/>
                    </div>
                    <div className="overlay-player" id="yt-player-main" onClick={() => {
                        this.hide()
                    }}>
                        <div className="player-background"/>
                    </div>
                    <div className="news" id="main-news">
                        <div id="news-title-wrap">
                            <h1>NEWS</h1>
                            <Link to="/news" className="view-all" id="view-all-news">전체보기</Link>
                        </div>
                        <News maximum={1}/>
                    </div>

                    <div className="videos">
                        <div id="videos-title-wrap"><h1>VIDEOS</h1></div>
                        <Videos maximum={6} type="yt-player-main"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Main;