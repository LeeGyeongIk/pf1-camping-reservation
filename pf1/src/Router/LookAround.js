import '../css/route/LookAround.css';
import MainBackGround from '../template/header/MainBackGround';
import Greeting from '../template/header/Greeting';
import LookAroundImg1 from '../img/route/LookAround/LookAround_img_1.jpg';

let LookAround = () => {
    return (
        <div>
            <MainBackGround />
            <Greeting title="둘러보기" content="여러분의 하루에 최고가 되도록 최선을 다하겠습니다." />
            <LookAroundImg />
        </div>
    );
}

let LookAroundImg = () => {
    return (
        <div className="look-around-img-wrap section-margin-top-5 section-margin-bottom-5">
            <img className="look-around-img" src={LookAroundImg1} />
        </div>
    );
}

export default LookAround;