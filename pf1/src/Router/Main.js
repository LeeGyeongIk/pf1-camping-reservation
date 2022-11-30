import '../css/route/Main.css';
import MainVideo from '../img/route/Main/LandingVideo/main_video.mp4';
import SURO_1_Img_2 from '../img/route/Main/CampingZone/SURO1_img_2.jpeg';
import KIMHAE_1_Img_4 from '../img/route/Main/CampingZone/KIMHAE1_img_4.jpeg';
import SINEO_1_Img_3 from '../img/route/Main/CampingZone/SINEO1_img_3.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faCampground, faMoneyBill1, faHeadset, faComments, faCalendar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper";

let Main = () => {
    const navigate = useNavigate();
    const [notice, setNotice] = useState();

    useEffect(() => {
        axios.get('/getNotice').then((result) => {
            setNotice(result.data.notice)
        }).catch((err) => {
            alert(err);
        });
    }, [])

    return (
        <>
            <LandingDisplay />
            <CampingZone navigate={navigate} />
            <ShortCut navigate={navigate} />
            <Notice notice={notice} />
        </>
    );
}

let LandingDisplay = () => {
    return (
        <div style={{ position: 'relative' }}>
            <LandingVideo />
            <LandingComment />
        </div>
    );
}

let LandingVideo = () => {
    return (
        <div>
            <video className="landing-video" autoPlay muted loop>
                <source src={MainVideo} type="video/mp4" />
            </video>
        </div>
    );
}

let LandingComment = () => {
    return (
        <div className="landing-comment">
            <div className="landing-comment-animation">
                <h1>소중한 사람들과 함께</h1>
                <p>가야랜드 달빛야영장에서<br />소중한 사람들과 새로운 추억을 만들어 보세요</p>
            </div>
            <ScrollAnimation />
        </div>
    );
}

let ScrollAnimation = () => {
    return (
        <div className="scroll-down">
            <div className="scroll">
                <span className="scroll-dot"></span>
            </div>
            <div className="arrow-down"></div>
        </div>
    );
}

let CampingZone = (props) => {
    return (
        <div>
            <div className="content-header">
                <h1>캠핑장</h1>
                <p>달빛야영장 캠핑장을 소개합니다</p>
            </div>
            <Container>
                <Row>
                    <div className="camping-zone-content">
                        <Col sm>
                            <div className="camping-zone-wraper" onClick={() => { props.navigate('/SURO') }} >
                                <div className="camping-zone-img-wraper">
                                    <img src={SURO_1_Img_2} className="camping-zone-img" />
                                </div>
                                <div className="camping-zone-text">
                                    <h3>수로존</h3>
                                </div>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="camping-zone-wraper" onClick={() => { props.navigate('/KIMHAE') }} >
                                <div className="camping-zone-img-wraper">
                                    <img src={KIMHAE_1_Img_4} className="camping-zone-img" />
                                </div>
                                <div className="camping-zone-text">
                                    <h3>김해존</h3>
                                </div>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="camping-zone-wraper" onClick={() => { props.navigate('/SINEO') }} >
                                <div className="camping-zone-img-wraper">
                                    <img src={SINEO_1_Img_3} className="camping-zone-img" />
                                </div>
                                <div className="camping-zone-text">
                                    <h3>신어존</h3>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

let ShortCut = (props) => {
    let ShortCutMaker = (props) => {
        return (
            <div className={`shortcut-card ${props.isdisable}`} onClick={() => { props.navigate(props.onClick) }} >
                <div className="shortcut-comment">
                    <h5>{props.title}</h5>
                    <span>{props.comment[0]}<br />{props.comment[1]}</span>
                    <span>
                        바로가기
                        <span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </span>
                </div>
                <div className="shortcut-card-icon">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
            </div>
        )
    };

    return (
        <div>
            <div className="content-header">
                <h1>바로가기</h1>
                <p>여러분께 특별한 경험을 드립니다</p>
            </div>
            <div className="shortcut-content">
                <Container>
                    <Row>
                        <Col sm>
                            <ShortCutMaker
                                title={'달빛야영장소개'}
                                comment={['김해국민야영장', '달빛야영장을 소개합니다']}
                                icon={faStore}
                                navigate={props.navigate}
                                onClick={'/MainInfo'}
                            />
                        </Col>
                        <Col sm>
                            <ShortCutMaker
                                title={'캠핑장정보'}
                                comment={['카라반•글램핑•차박•텐트 등', '모든 종류의 캠핑을 즐길 수 있습니다']}
                                icon={faCampground}
                                navigate={props.navigate}
                                onClick={'/SURO'}
                            />
                        </Col>
                        <Col sm>
                            <ShortCutMaker
                                title={'온라인예약'}
                                comment={['온라인 예약부터', '결제까지 한번에!']}
                                icon={faCalendar}
                                navigate={props.navigate}
                                onClick={'/Reservation'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <ShortCutMaker
                                title={'이용•요금안내'}
                                comment={['갸야랜드 달빛야영장 이용정보 및', '요금정보를 안내드립니다']}
                                icon={faMoneyBill1}
                                navigate={props.navigate}
                                onClick={'/ReservationInfo'}
                            />
                        </Col>
                        <Col sm>
                            <ShortCutMaker
                                title={'문의전화'}
                                comment={['010-3722-5398', '업무시간: 24시간']}
                                icon={faHeadset}
                            />
                        </Col>
                        <Col sm>
                            <ShortCutMaker
                                isdisable={'shortcut-disable'}
                                title={'문의게시판'}
                                comment={['궁금하신 점은 글을 남겨주세요', '빠르게 답변드리겠습니다']}
                                icon={faComments}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

let Notice = (props) => {
    return (
        <>
            <div className="notice-responsive">
                <Container>
                    <Row>
                        <Col>
                            <div className="notice-title">
                                <h4>공지사항</h4>
                            </div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: true,
                                }}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    props.notice != undefined ?
                                        props.notice.map((data, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <div className="notice-card">
                                                        <div className="notice-card-title">
                                                            <h5>{data.title}</h5>
                                                        </div>
                                                        <hr />
                                                        <div className="notice-card-content">
                                                            <span>{data.content}</span>
                                                        </div>
                                                        <div className="notice-card-footer">
                                                            <span>READ MORE</span>
                                                            <span>{data.date}</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })
                                        : null
                                }
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="notice">
                <Container>
                    <Row>
                        <Col>
                            <div className="notice-title">
                                <h4>공지사항</h4>
                            </div>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: true,
                                }}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    props.notice != undefined ?
                                        props.notice.map((data, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <div className="notice-card">
                                                        <div className="notice-card-title">
                                                            <h5>{data.title}</h5>
                                                        </div>
                                                        <hr />
                                                        <div className="notice-card-content">
                                                            <span>{data.content}</span>
                                                        </div>
                                                        <div className="notice-card-footer">
                                                            <span>READ MORE</span>
                                                            <span>{data.date}</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })
                                        : null
                                }
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Main;