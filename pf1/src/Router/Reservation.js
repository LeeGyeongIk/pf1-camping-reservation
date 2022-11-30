import '../css/route/Reservation.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MainBackGround from '../template/header/MainBackGround';
import Greeting from '../template/header/Greeting';
import GetImg from '../module/GetImg';
import GetSwiper from '../module/GetSwiper';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

let Reservation = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectCampingSite, setSelectCampingSite] = useState(0);
    const campingSiteName = ["수로존", "김해존", "신어존"];
    const campingSiteImg = GetImg;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');

    return (
        <div>
            <MainBackGround />
            <Greeting title="예약하기" content="달빛야영장을 온라인 서비스로 간편하게 이용하세요." />
            <SelectOptions
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                campingSiteName={campingSiteName}
                campingSiteImg={campingSiteImg}
                selectCampingSite={selectCampingSite}
                setSelectCampingSite={setSelectCampingSite}
                handleShow={handleShow}
                setShow={setShow}
            />
            <InputUserData
                handleClose={handleClose}
                show={show}
                setShow={setShow}
                startDate={startDate}
                endDate={endDate}
                campingSiteName={campingSiteName}
                selectCampingSite={selectCampingSite}
                userName={userName}
                setUserName={setUserName}
                userPhone={userPhone}
                setUserPhone={setUserPhone}
            />
        </div>
    );
}

let SelectOptions = (props) => {
    let test = new Array();
    return (
        <div className="select-options section-margin-top-2">
            <Container>
                <Row>
                    <Col sm>
                        <div className="date-picker-start section-margin-bottom-5">
                            <DatePicker
                                selected={props.startDate}
                                onChange={(date) => { props.setStartDate(date); props.setEndDate(date) }}
                                locale={ko}                   // 한글로 변경
                                dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                                showPopperArrow={false}       // 화살표 변경
                                minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                                customInput={		      // 날짜 뜨는 인풋 커스텀
                                    <Form.Control as="textarea" rows={1} />
                                }
                            />
                        </div>
                    </Col>
                    <Col sm>
                        <div className="date-picker-end">
                            <DatePicker
                                selected={props.endDate}
                                onChange={(date) => props.setEndDate(date)}
                                locale={ko}                   // 한글로 변경
                                dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                                showPopperArrow={false}       // 화살표 변경
                                minDate={props.startDate}          // 오늘 날짜 전은 선택 못하게
                                customInput={		      // 날짜 뜨는 인풋 커스텀
                                    <Form.Control as="textarea" rows={1} />
                                }
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className="select-camping-site content-margin-bottom-3">
                            <div className="select-camping-site-pill-wrap">
                                <div
                                    onClick={() => { props.setSelectCampingSite(0) }}
                                    className={`select-camping-site-pill ${props.selectCampingSite == 0 ? "camping-site-selected" : null}`}>
                                    <span>수로존</span>
                                </div>
                                <div
                                    onClick={() => { props.setSelectCampingSite(1) }}
                                    className={`select-camping-site-pill ${props.selectCampingSite == 1 ? "camping-site-selected" : null}`}>
                                    <span>김해존</span>
                                </div>
                                <div
                                    onClick={() => { props.setSelectCampingSite(2) }}
                                    className={`select-camping-site-pill ${props.selectCampingSite == 2 ? "camping-site-selected" : null}`}>
                                    <span>신어존</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className="select-camping-site-img content-margin-bottom-3">
                            <GetSwiper campingSiteImg={props.campingSiteImg[props.selectCampingSite]} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="select-options-info content-margin-bottom-3">
                        <table>
                            <tbody>
                                <tr>
                                    <th>사이트명</th>
                                    <td>{props.campingSiteName[props.selectCampingSite]}</td>
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
                                <tr>
                                    <th>총 가격</th>
                                    <td>
                                        <span>200,000원</span>
                                        <span>100원</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Row>
                <Row>
                    <div className="select-options-done-button content-margin-bottom-3">
                        <button onClick={() => { props.handleShow() }}>예약</button>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

let InputUserData = (props) => {
    let reservation_start_date =
        `${props.startDate.getFullYear()}-
        ${props.startDate.getMonth() + 1}-
        ${props.startDate.getDate()}
        `;

    let reservation_end_date =
        `${props.endDate.getFullYear()}-
        ${props.endDate.getMonth() + 1}-
        ${props.endDate.getDate()}
        `;

    return (
        <Offcanvas show={props.show} onHide={props.handleClose} backdrop="static" style={{ width: '50%' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>예약</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="reservation-offcanvas-wrap">
                    <div className="reservation-title section-margin-bottom-5">
                        <h4>예약정보</h4>
                    </div>
                    <div className="reservation-body section-margin-bottom-5">
                        <div className="reservation-info">
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='reservation-info-item'>
                                            <h5>캠핑사이트</h5>
                                            <span>{props.campingSiteName[props.selectCampingSite]}</span>
                                        </div>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <div className='reservation-info-item'>
                                            <h5>예약기간</h5>
                                            <span>{reservation_start_date} ~ {reservation_end_date}</span>
                                        </div>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <div className='reservation-info-item'>
                                            <h5>결제요금</h5>
                                            <span>100원</span>
                                        </div>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <div className='reservation-info-item'>
                                            <h5>예약자 명</h5>
                                            <Form.Control size="lg" type="text" placeholder="예약자 이름" onChange={(e) => { props.setUserName(e.target.value) }} />
                                        </div>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <div className='reservation-info-item'>
                                            <h5>전화번호</h5>
                                            <Form.Control size="lg" type="text" placeholder="예약자 전화번호" onChange={(e) => { props.setUserPhone(e.target.value) }} />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="reservation-button">
                        <Button variant="primary" onClick={() => {
                            if (props.userName != '' && props.userPhone != '') {
                                Payments(props.userName, props.userPhone, props.handleClose);
                            } else {
                                Swal.fire({
                                    title: "예약실패",
                                    html: `예약자 이름과 전화번호를<br/>정확하게 입력해주세요.`
                                })
                            }
                        }}>예약</Button>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

let Payments = (userName, userPhone, handleClose) => {
    const callback = (response) => {
        const { success, error_msg } = response;
        if (success) {
            Swal.fire({
                title: "예약완료",
                html: `입력하신 전화번호로<br/>확인 메시지를 보내드리겠습니다.`
            }).then(() => {
                axios.post('/sendSMS', {
                    phone: userPhone,
                    content: `[가야랜드달빛야영장] ${userName}님의 예약이 완료되었습니다.`
                }).then(() => {
                    handleClose();
                })
            })
        } else {
            alert(`결제 실패 : ${error_msg}`);
        }
    };
    const { IMP } = window; IMP.init('imp17369910'); // 가맹점 식별코드 // 결제 데이터 정의
    const data = {
        pg: 'html5_inicis', // PG사 (필수항목)
        pay_method: 'card', // 결제수단 (필수항목)
        merchant_uid: new Date().getTime(), // 결제금액 (필수항목)
        name: `[가야랜드달빛야영장]`, // 주문명 (필수항목)
        amount: '100', // 금액 (필수항목)
        custom_data: { name: '부가정보', desc: '세부 부가정보' },
        buyer_name: userName, // 구매자 이름
        buyer_tel: userPhone, // 구매자 전화번호 (필수항목)
        buyer_email: 'ju741085@naver.com', // 구매자 이메일
    };
    IMP.request_pay(data, callback);
}

export default Reservation;