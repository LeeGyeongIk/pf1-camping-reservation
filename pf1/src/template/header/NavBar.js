import '../../css/header/NavBar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let NavBar = () => {
    let navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop); // IE에서는 ... .scrollTop만 지원
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        return () => {
            window.removeEventListener('scroll', updateScroll); //unmount시 해제
        };
    }, []);

    return (
        <div
            className={`navbar ${ scrollPosition <= 50 ? 'not-scrolled' : 'scrolled' }`}
            style={{ position: 'fixed', top: '0', zIndex: '999' }}>
            <div className="logo" onClick={() => { navigate('/') }}>
                <p>김해국민야영장</p>
                <p>가야랜드달빛야영장</p>
            </div>

            <div className="menu">
                <ul>
                    <p onClick={() => { navigate('/MainInfo') }}>달빛야영장소개</p>
                    <li onClick={() => { navigate('/MainInfo') }}>달빛야영장</li>
                    <li onClick={() => { navigate('/LookAround') }}>둘러보기</li>
                    <li onClick={() => { navigate('/Location') }}>오시는길</li>
                </ul>
                <ul>
                    <p onClick={() => { navigate('/SURO') }}>캠핑구역</p>
                    <li onClick={() => { navigate('/SURO') }}>수로존</li>
                    <li onClick={() => { navigate('/KIMHAE') }}>김해존</li>
                    <li onClick={() => { navigate('/SINEO') }}>신어존</li>
                </ul>
                <ul>
                    <p onClick={() => { navigate('/ReservationInfo') }}>예약안내</p>
                    <li onClick={() => { navigate('/ReservationInfo') }}>예약정보</li>
                    <li onClick={() => { navigate('/Reservation') }}>예약하기</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;