import { useState } from 'react'
import Brand from '../Brand/Brand';
import Screen from '../Screen/Screen';
import Buttons from '../Buttons/Buttons';

import './Calculator.css'
function Calculator() {
    const [isOn, setIsOn] = useState(false);

    const power = () => setIsOn(prev => !prev);
    return (
        <div className="Calculator">
            <Brand/>
            <Screen/>
            <Buttons isOn={isOn} power={power}/>
        </div>
    )
}

export default Calculator
