import '../../css/route/CampingSite.css';
import MainBackGround from "../../template/header/MainBackGround";
import Greeting from "../../template/header/Greeting";
import GetImg from '../../module/GetImg';
import GetSwiper from '../../module/GetSwiper';

let KIMHAE = () => {
    return (
        <div>
            <MainBackGround />
            <Greeting title="김해존" content="자동차야영장•텐트대여동" />
            <Slide />
            <CampingSiteIntroduction />
        </div>
    );
}

let Slide = () => {
    const campingSiteImg = GetImg[1];
    return (
        <div className="slide">
            <GetSwiper campingSiteImg={campingSiteImg} />
        </div>
    );
}

let CampingSiteIntroduction = () => {
    return (
        <div className="camping-site-introduction section-margin-bottom-5">
            <table>
                <tbody>
                    <tr>
                        <th>사이트 수</th>
                        <td>34~35 사이트</td>
                    </tr>
                    <tr>
                        <th>사이트 크기</th>
                        <td>가로 8M x 세로 8M</td>
                    </tr>
                    <tr>
                        <th>텐트•주차</th>
                        <td>전 사이트 차량 옆 텐트 설치(오토캠핑)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default KIMHAE;