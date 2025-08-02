/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

function ResultFinal({result}) {
  return (
      <div className='bg-[rgb(15,58,71)] rounded-bl-[4rem] flex   flex-col '>
          <div className='mt-8 ml-4'>
            <h2 className='text-left ml-4 font-semibold text-xl '> Your results</h2>
            <p className="p-2 text-left ml-3 text-sm max-w-md text-white/60">
             Your result are shown below based on the information you provided.To adjust the results,edit the form and click 'Calculate Repayment' again.
            </p>
      </div>
      
      <div className='bg-[rgb(10,37,46)] h-[50%] w-[85%] mx-auto mt-5 rounded-2xl border-t-4 border-lime-600 '>
        <div className='mt-4 text-left ml-6 border-b p-2 mr-4'>
          <h3 className='text-white/60'> Your Monthly Reapyments</h3>
          <h1 className='text-lime-500 mt-2'>{"£"+ result}</h1>
        </div>

        <div className='mt-10 text-left ml-6'>
          <h5 className='text-white/60 text-sm'>Total You'll repay over the Year</h5>
          <h2 className='mt-2'>{'£'+(result *12).toFixed(2)}</h2>
        </div>
      </div>
      
      
      </div>
  )
}

export default ResultFinal