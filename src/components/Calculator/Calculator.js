import { useState } from 'react'
import Brand from '../Brand/Brand';
import Screen from '../Screen/Screen';
import Buttons from '../Buttons/Buttons';

import './Calculator.css'
function Calculator() {
    const [isOn, setIsOn] = useState(false);
    const [isSecondNumber, setIsSecondNumber] = useState(false);
    
    const [operator, setOperator] = useState(null);

    const [displayNumber, setDisplayNumber] = useState(null);
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    

    const power = () => {
        setIsOn(prev => !prev);
        if(!isOn){
            setDisplayNumber(0);
        }else{
            setSecondNumber('');
            setFirstNumber('');
            setOperator(null);
            setDisplayNumber(null);
            setIsSecondNumber(false);
        }
    };

    const printNumber = (num) => {
        if(!isOn) return;
        if(!displayNumber){
            setDisplayNumber(num);
        }else{
            setDisplayNumber(prev => prev+num);
        }
        if(!isSecondNumber){
            setFirstNumber(prev => prev+num);
        }else{
            setSecondNumber(prev => prev+num);
        }
    }
    const selectOperation = (operation) => {
        if(!firstNumber) return
        setIsSecondNumber(true);
        setOperator(operation);
        if(isSecondNumber){
            calculate();
            setSecondNumber('')
            setDisplayNumber(0);

        }else{
            setDisplayNumber(0);
        }
        

    }
    const calculate = () => {
        if(!firstNumber || !secondNumber) return;

        let result = 0;
        switch(operator){
            case 'add':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case 'subtract':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case 'multiply':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case 'divide':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default: result = "Syntax Error";
        }
        setDisplayNumber(result);
        setFirstNumber(result.toString())
        setSecondNumber('');
    }


    const clearEntry = () => {
        if(!isOn) return;
        setSecondNumber('');
        setFirstNumber('');
        setOperator(null);
        setDisplayNumber(0);
        setIsSecondNumber(false);
    }

    return (
        <div className="Calculator">
            <Brand/>
            <Screen displayNumber={displayNumber}/>
            <Buttons
            isOn={isOn}
            power={power}
            printNumber={printNumber}
            clearEntry={clearEntry}
            selectOperation={selectOperation}
            calculate={calculate}
            />
        </div>
    )
}

export default Calculator
