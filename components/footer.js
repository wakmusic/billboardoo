import React, {useEffect, useState} from "react";
import logo from '../images/billboardoo.png';


function Footer() {
    const [wait, setWait] = useState(false);
    useEffect(() => {
        setTimeout(() => setWait(true), 700)
    })

    function go() {
        window.location.href = "/company"
    }

    if (!wait) return null;
    return (
        <div className="footer fade-in-page">
            <img src={logo} alt="logo" id="footer-logo"/>
            <div id="footer-text"><span onClick={go}>빌보두왁론주식회사</span> | 인천광역시 송도 왁엔터로 158(민수플라자 26,27층
                빌보두차트개발부서) | 대표이사 우왁굳</div>
            <div id="footer-inform">본 사이트는 빌보드 차트 웹사이트를 오마주해 만든 팬 제작 사이트입니다.<br/>
                본 사이트에 등장하는 모든 내용은 허구입니다.</div>
        </div>
    )
}

export default Footer;