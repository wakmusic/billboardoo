import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../stylesheets/credit.css';

class Credit extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="credit-page fade-in-page">
                    <h2 className="credit-title">개발자</h2>
                    <span className="creditor">Front-end(웹사이트 개발): 니엔</span><br/>
                    <span className="creditor">Back-end(데이터베이스, API): 니엔</span><br/>
                    <span className="creditor">데이터 제공: 은수저</span><br/>
                    <span className="creditor">그래프: 카이피, 니엔</span><br/>
                    <span className="creditor">영상화: 은수저, 카이피</span><br/><br/>
                    <span className="creditor">뉴스 제공: 이세돌포커스 팀</span><br/>
                    <span className="creditor">도메인 제공: 서선유</span><br/>

                    <span className="creditor">아티스트 소개글 작성: 스타티스, 김모건, 옹냐, 인턴 이기자</span><br/><br/>
                    <span className="creditor"><b>노래 가사 작업</b><br/>project 02_1, 윤누리, 지브브, NoSugar123, 1잡탕1, 아트아스,
                    3점141592,<br/>나지원, 오베르탕, 청달이, l랑프, mr탐켄치, 별넴, 구네, 박1광철, 삡시, 음해세력,<br/>아카,
                    지나가는팬치, rlatngksan, 도비도브, 김오초, 비젤VJL, 츄우</span><br/><br/>

                    <h2 className="credit-title">라이선스</h2>
                    <span className="creditor">디자인 참조: <a href="https://billboard.co.kr/" target="_blank"
                                                          rel="noreferrer">빌보드코리아</a></span><br/>
                    <span className="creditor">사용 폰트: Pretendard, LeferiBaseType, GmarketSansBold</span><br/>
                    <span className="creditor">로고: Billboard</span><br/><br/><br/>
                    <span className="creditor">개발자 이메일: frin0911@naver.com</span><br/><br/><br/>
                    <span className="creditor">본 사이트는 빌보드 차트 웹사이트를 오마주해 만든 팬 제작 사이트입니다.</span><br/>
                    <span className="creditor">본 사이트에 등장하는 모든 내용은 허구입니다.</span><br/>
                    <span className="creditor">만일 존재한다면 이는 우연에 의한 것일 뿐, 본 사이트와 관련이 없습니다.</span>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Credit;