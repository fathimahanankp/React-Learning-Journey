import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

export default function App(){
  return(
    <div className='App'>
      <Counter/>
    </div>
  )
}
function Counter(){
const [count, setCount] = useState(0);
const [step, setStep] = useState(0);

function handleDecrementStep(){
  if (step > 0){
    setStep((s)=>s-5);
  }
}

function handleIncrementStep(){  
    setStep((s)=>s+5);
  }

function handleDecrement(){
  if (count > 0){
    setCount((c)=>(c)-step);
  }
}

function handleIncrement(){  
    setCount((c)=>(c)+step);
  }




  const  date = new Date("May 27 2026")
  date.setDate(date.getDate()+count)

  return (
  <div>

    <div>
      <button onClick={handleDecrementStep}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleIncrementStep}>+</button>
    </div>
    
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>


    <p>
      <span>{count===0
      ?"Today is "
      : count>0
      ?`${count} days from today is `
    :`${count} days ago was `}</span>
      <span>{date.toDateString()}</span>
    </p>
    
  </div>)
}