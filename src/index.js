 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { useState } from 'react';
 import './style.css';

 function BmiCalc(){
    //use state parameters
    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const [bmi,setBmi] = useState('');
    const [msg,setMsg] = useState('');

    //calculating BMI
    const calculateBmi =()=>{ 
        if(height && weight){
            const metres = height / 100;
            const bmiValue = (weight / (metres * metres)).toFixed(2);
            setBmi(bmiValue);

            let message = '';
            if(bmiValue < 20){
                message = 'You are Underweight';
            }else if(bmiValue >= 20 && bmiValue < 28){
                message = 'You are Normal';
            }else if(bmiValue >= 28 && bmiValue <= 35){
                message = 'You are OverWeight'; 
            }else{
                message = 'You are Obese';
            }
            setMsg(message);
        }else{
            setBmi('');
            setMsg('');
        }
    }

    //return or display
    return(
        <div className='container'>
        <h1>BMI CALCULATOR</h1>
        <label for="height">Enter height(cm):</label>
        <input type='number' 
        id='height' 
        value={height} 
        onChange={(event) => setHeight(event.target.value)}
        max={300}
        required
        />
        
        <label for='weight'>Enter weight(kg):</label>
        <input type='number' 
        id='weight' 
        value={weight} 
        onChange={(event) => setWeight(event.target.value)}
        max={300}
        required
        />

        <div id='btn'><button onClick={calculateBmi} className='btn' >Check BMI</button></div>

        <div className='output'>
            <p>Your BMI is <span className='elem'>{bmi}</span></p>
            <p>Conclusion:  <span className='elem'>{msg}</span></p>
        </div>
        </div>
    )

 } 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BmiCalc />)