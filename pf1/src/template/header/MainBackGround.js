import '../../css/header/MainBackGround.css';

let MainBackGround = () => {
    return (
        <div className="MainInfo-background">
            {/* MainInfo-title로의 brightness 오염 예방을 위해 분리 */}
            <div className="MainInfo-backgroud-img"></div>
            <div className="MainInfo-title">
                <h1>달빛야영장</h1>
            </div>
        </div>
    );
}

export default MainBackGround;