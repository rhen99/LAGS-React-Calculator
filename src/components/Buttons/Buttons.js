
import './Buttons.css';
function Buttons({isOn, power, printNumber, clearEntry, selectOperation, calculate}) {
    return (
        <div className="Buttons">
            <div className="Button">
                <button className="Number" onClick={() => printNumber('7')}>7</button>
            </div>
            <div className="Button">
                <button onClick={() => printNumber('8')} className="Number">8</button>
            </div>
            <div className="Button">
                <button onClick={() => printNumber('9')} className="Number">9</button>
            </div>
            <div className="Button">
                <button className="Function">+/-</button>
            </div>
            <div className="Button">
                <button className="Function" onClick={clearEntry}>C</button>
            </div>
            <div className="Button">
                <button className="Number" onClick={() => printNumber('4')}>4</button>
            </div>
            <div className="Button">
                <button className="Number" onClick={() => printNumber('5')}>5</button>
            </div>
            <div className="Button">
                <button className="Number" onClick={() => printNumber('6')}>6</button>
            </div>
            <div className="Button">
                <button className="Operator" onClick={() => selectOperation('multiply')}>&times;</button>
                
            </div>
            <div className="Button">
                <button onClick={() => selectOperation('divide')} className="Operator">&divide;</button>
            </div>
            <div className="Button">
                <button className="Number" onClick={() => printNumber('1')}>1</button>
            </div>
            <div className="Button">
                <button onClick={() => printNumber('2')} className="Number">2</button>
            </div>
            <div className="Button">
                <button className="Number" onClick={() => printNumber('3')}>3</button>
            </div>
            <div className="Button">
                <button className="Operator" onClick={() => selectOperation('subtract')}>-</button>
            </div>
            <div className="Button">
                <button onClick={() => calculate()} className="Equals">=</button>
            </div>
            <div className="Button">
                <button onClick={power} className={isOn ? "Power off": "Power on"}>{isOn ? "OFF": "ON"}</button>
            </div>
            <div className="Button">
                <button className="Number" onClick={() => printNumber('0')}>0</button>
            </div>
            <div className="Button">
                <button className="Number" onClick={() => printNumber('.')}>.</button>
            </div>
            <div className="Button">
                <button className="Operator" onClick={() => selectOperation('add')}>+</button>
            </div>
            <div className="Button"></div>
        </div>
    )
}

export default Buttons;
