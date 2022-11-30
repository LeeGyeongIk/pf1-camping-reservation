import '../../css/route/CampingSite.css';
import MainBackGround from "../../template/header/MainBackGround";
import Greeting from "../../template/header/Greeting";
import GetImg from '../../module/GetImg';
import GetSwiper from '../../module/GetSwiper';

let SURO = () => {
    return (
        <div>
            <MainBackGround />
            <Greeting title="수로존" content="카라반온돌•펜션•글램핑" />
            <Slide />
            <CampingSiteIntroduction />
        </div>
    );
}

let Slide = () => {
    const campingSiteImg = GetImg[0];
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
                        <td>1 사이트</td>
                    </tr>
                    <tr>
                        <th>데크</th>
                        <td>카라반 앞 데크 및 파라솔 비치</td>
                    </tr>
                    <tr>
                        <th>비치 품목</th>
                        <td>
                            - 4인 식기 및 주방세트 1조
                            <br />
                            - 전자렌지, 냉장고, 에어컨
                            <br />
                            - 식탁, 소파
                            <br />
                            - 타올, 샴푸, 바디워셔
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SURO;