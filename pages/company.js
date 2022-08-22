import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/credit.css';
import enter from "../images/wak-enter.png";


class Company extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="company-page fade-in-company">
                    <h2 className="company-title">Billboardoo Waklon Corp.</h2>
                    <span className="company-subtitle">뛰어난 퀄리티와 알잘딱 기능들을 통해 왁타버스 세계관으로 여러분을 초대합니다.</span><br/><br/>
                    <span className="company-text">
                        09왁굳을 보던 고인물 팬치부터 이세돌 유입까지.<br/>
                        모든 팬치가 편리하게 이용할 수 있도록.<br/><br/>
                        트위치 팔로워 1위 가수, 멜론 36위 가수 등 전세계 유명 가수의 음반 수록<br/>
                    </span>
                    <img src={enter} alt="" className="company-logo"/>
                    <h1 className="motto">「 킹아 」</h1>
                    <div className="company-text-center">
                        라는 모토 하나로 수 만명의 직원들이 매일 빌보두와 왁론차트를 위해 일하고 있습니다.
                    </div>

                    <h1 className="company-history">회사 연혁</h1>
                    <div className="history-title">2022.03.27</div>
                    <div className="history-desc">빌보두 차트 첫 출범</div>

                    <div className="history-title">2022.05.12</div>
                    <div className="history-desc">왁론 차트 첫 출범</div>

                    <div className="history-title">2022.05.25</div>
                    <div className="history-desc">"빌보두주식회사" 설립 (대표이사 우왁굳)<br/>빌보두 차트 웹사이트 출시</div>

                    <div className="history-title">2022.06.07</div>
                    <div className="history-desc">사무실 개설(왁두빌딩 5층)<br/>빌보두 차트 웹사이트 리뉴얼</div>

                    <div className="history-title">2022.06.09</div>
                    <div className="history-desc">왁론 차트 재출범</div>

                    <div className="history-title">2022.06.11</div>
                    <div className="history-desc">빌보두 차트 집계 방식 변경</div>

                    <div className="history-title">2022.07.05</div>
                    <div className="history-desc">사무실 확장(왁두빌딩 5, 6층)<br/>빌보두 플레이어 출시<br/>빌보두 아티스트 출시</div>

                    <div className="history-title">2022.07.17</div>
                    <div className="history-desc">사명 "빌보두왁론주식회사"로 변경<br/>왁론차트 웹사이트 출시<br/>사무실 이사(민수플라자 25~27층)</div>

                    <div className="history-title">2022.08.??</div>
                    <div className="history-desc">빌보두 IOS<br/>빌보두 플레이리스트<br/>대시보두</div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Company;