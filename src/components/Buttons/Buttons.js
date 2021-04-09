
import './Buttons.css';
function Buttons({isOn, power}) {
    return (
        <div className="Buttons">
            <div className="Button">
                <button className="Number">7</button>
            </div>
            <div className="Button">
                <button className="Number">8</button>
            </div>
            <div className="Button">
                <button className="Number">9</button>
            </div>
            <div className="Button">
                <button className="Function">+/-</button>
            </div>
            <div className="Button">
                <button className="Function">C</button>
            </div>
            <div className="Button">
                <button className="Number">4</button>
            </div>
            <div className="Button">
                <button className="Number">5</button>
            </div>
            <div className="Button">
                <button className="Number">6</button>
            </div>
            <div className="Button">
                <button className="Operator">&times;</button>
                
            </div>
            <div className="Button">
                <button className="Operator">&divide;</button>
            </div>
            <div className="Button">
                <button className="Number">1</button>
            </div>
            <div className="Button">
                <button className="Number">2</button>
            </div>
            <div className="Button">
                <button className="Number">3</button>
            </div>
            <div className="Button">
                <button className="Operator">-</button>
            </div>
            <div className="Button">
                <button className="Equals">=</button>
            </div>
            <div className="Button">
                <button onClick={power} className={isOn ? "Power off": "Power on"}>{isOn ? "OFF": "ON"}</button>
            </div>
            <div className="Button">
                <button className="Number">0</button>
            </div>
            <div className="Button">
                <button className="Number">.</button>
            </div>
            <div className="Button">
                <button className="Operator">+</button>
            </div>
            <div className="Button"></div>
        </div>
    )
}

export default Buttons;
