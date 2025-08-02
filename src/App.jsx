/* eslint-disable no-unused-vars */


import { useState } from 'react';
import './App.css'
import Display from './components/Display'
import Mortage from './components/Mortage'
import ResultFinal from './components/Result';



function App() {
  const [Result, setResult] = useState(null)
  
  function calculateMortgage(principal, annualRate, years, type) {
  const r = annualRate / 100 / 12; // Monthly interest rate
  const n = years * 12;

  if (type === "Repayments") {
    // Standard EMI formula
    const monthlyPayment =
      (principal * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);
      setResult((monthlyPayment.toFixed(2)));
      ;
  } else if (type === "Interest") {
    // Interest only payment
    const interestOnlyPayment = principal * r;
     setResult(interestOnlyPayment.toFixed(2));
  } else {
    setResult("Invalid mortgage type")
    
  }
}

  


  return (
    <>
      <div className=' grid grid-cols-2 bg-white mx-auto rounded-2xl w-200 h-120 overflow-hidden shadow-md' >
        
        <Mortage calculateMortgage={calculateMortgage} DisReset={setResult}/>
        {/*  */}
        {Result ? <ResultFinal result={Result} />:<Display /> }
        
      </div>
    </>
  )
}

export default App
