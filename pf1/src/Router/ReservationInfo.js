import '../css/route/ReservationInfo.css';
import MainBackGround from '../template/header/MainBackGround';
import Greeting from '../template/header/Greeting';
import { useNavigate } from 'react-router-dom';

let ReservationInfo = () => {
    const navigate = useNavigate();

    return (
        <div>
            <MainBackGround />
            <Greeting
                title="예약안내"
                content="달빛야영장을 간편한 온라인 서비스로 예약하실 수 있습니다."
            />
            <BillIntroduction navigate={navigate} />
        </div>
    );
}

let BillIntroduction = (props) => {
    return (
        <div className="bill-introduction section-margin-top-5">
            <div className="bill-introduction-title content-margin-bottom-3">
                <h4>요금안내</h4>
            </div>
            <div className="bill-introduction-content content-margin-bottom-3">
                <table>
                    <tbody>
                        <tr>
                            <th>사이트명</th>
                            <th>사이즈</th>
                            <th>일반</th>
                            <th>성수기</th>
                            <th>비성수기</th>
                        </tr>
                        <tr>
                            <th>수로존</th>
                            <td>9mX2.4m</td>
                            <td>180,000원</td>
                            <td>200,000원</td>
                            <td>190,000원</td>
                        </tr>
                        <tr>
                            <th>김해존</th>
                            <td>8mX8m</td>
                            <td>50,000원</td>
                            <td>50,000원</td>
                            <td>50,000원</td>
                        </tr>
                        <tr>
                            <th>신어존</th>
                            <td>6m X 75m</td>
                            <td>50,000원</td>
                            <td>50,000원</td>
                            <td>50,000원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bill-introduction-extra section-margin-bottom-5">
                <span>
                    • 객실예약은 기준인원 초과시(36개월 이상 소아포함) 1인 11,000원이 추가요금 발생합니다.
                </span>
                <span>
                    • 36개월 미만 소아는 침구류 지급 안됩니다.
                </span>
                <span>
                    • 객실요금은 부가세 포함 입니다.
                </span>
            </div>
            <div className="reservation-button section-margin-bottom-5">
                <button onClick={() => {props.navigate('/Reservation')}}>
                    예약하기
                </button>
            </div>
        </div>
    );
}

export default ReservationInfo;