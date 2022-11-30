import '../../css/header/Greeting.css';

let Greeting = (props) => {
    return (
        <div className="greeting section-margin-top-5">
            <div className="greeting-title content-margin-bottom-1">
                <h3>{props.title}</h3>
            </div>
            <div className="greeting-content">
                <span>{props.content}</span>
            </div>
            <div className="horizen">
                <hr />
            </div>
        </div>
    )
}

export default Greeting;