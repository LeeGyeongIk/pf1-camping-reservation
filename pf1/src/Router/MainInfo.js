import '../css/route/MainInfo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainBackGround from '../template/header/MainBackGround';
import Greeting from '../template/header/Greeting';

let MainInfo = () => {
    return (
        <>
            <MainBackGround />
            <Greeting title="인사말" content="여러분의 하루에 최고가 되도록 최선을 다하겠습니다."/>
            <Introduction />
        </>
    );
}

let Introduction = () => {
    return (
        <div className="introduction">
            <Container>
                <Row className="introduction-row">
                    <Col sm className="introduction-col">
                        <div className="introduction-wrap">
                            <div className="introduction-img"></div>
                        </div>
                    </Col>
                    <Col sm className="introduction-col">
                        <div className="introduction-content">
                            <div className="introduction-text">
                                <h5>소중한 사람들과 함께.</h5>
                                <h2>가야랜드달빛야영장</h2>
                                <span>김해국민야영장 달빛야영장으로 여러분을 초대합니다.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="introduction-row">
                    <Col sm className="quote-col">
                        <div className="quote">
                            <div className="quote-left">
                                <span>
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </span>
                            </div>
                            <div className="quote-content">
                                <div className="quote-content-title">
                                    <h3>가야달빛야영장은</h3>
                                </div>
                                <div className="quote-content-body">
                                    <span>
                                        산세가 아름다운 신어산 기슭에 자리잡아 아름다운 야관경관을 자랑합니다.
                                        <br />
                                        자동차야영장은 물론, 카라반, 글램핑, 백패킹야영장 등 다양한 캠핑존을 가지고 있습니다.
                                        <br />
                                        또한, 지름 약 18M 정도의 다목적홀 실내공간을 야영장 내에 갖추고 있어, 소규모 공연, 각종 모임 등 실내활동을 할 수 있습니다.
                                        <br />
                                        여러분에 특별한 경험을 선물하겠습니다. 감사합니다.
                                    </span>
                                </div>
                            </div>
                            <div className="quote-right">
                                <span>
                                    <FontAwesomeIcon icon={faQuoteRight} />
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default MainInfo;