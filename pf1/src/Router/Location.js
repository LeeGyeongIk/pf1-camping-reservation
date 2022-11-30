import '../css/route/Location.css';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MainBackGround from '../template/header/MainBackGround';
import Greeting from '../template/header/Greeting';

let Location = () => {
    return (
        <div>
            <MainBackGround />
            <Greeting title="오시는길" content="달빛야영장에 오시는길을 안내드립니다." />
            <KakaoMap />
            <LocationIntroduction />
        </div>
    )
}

let KakaoMap = () => {
    let lat = 35.259218;
    let lng = 128.905394;
    return (
        <Map
            className="kakao-map section-margin-top-5"
            center={{ lat: lat, lng: lng }}
            level={4}
        >
            <MapMarker position={{ lat: lat, lng: lng }} />
        </Map>
    );
}

let LocationIntroduction = () => {
    return (
        <div className="location-introduction section-margin-bottom-5">
            <table>
                <tbody>
                    <tr>
                        <th>주소</th>
                        <td>경상남도 김해시 삼방동 신어산길 67</td>
                    </tr>
                    <tr>
                        <th>대표전화</th>
                        <td>010-3722-5398</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Location;