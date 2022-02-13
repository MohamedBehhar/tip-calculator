import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../Context'
import data from '../data'

const Action = () => {
  const {setTip, setBill,setNbrOfPeople, bill, tip, nbrOfPeople, custom, setCustom} = useGlobalContext();
  console.log(nbrOfPeople);
  return (
	<div className='action'>
    <label htmlFor="" >
      <p className="input-text">Bill</p>
      <input type="text" name="bill" className="bill"  onChange={e => setBill(e.target.value)} value={bill}/>
    </label>
    
    <div className="tip">
      <p className="input-text">Select Tip %</p>
      <div className="tip-grid">
        {data.map((item)=>{
          const {id, value} = item;
          return (
            <button 
              className='btn tip-btn' 
              key={id}
              onClick={() => setTip(value)}
              >
              {value}%
              </button>
          )
        })}
        <div className="custom">
          <input 
            type="text"  
            placeholder='Custom' 
            className='custom-input'
            value={custom}
            onChange={e => setCustom(e.target.value)}/>
        </div>
      </div>
      <label htmlFor="">
        <p className="input-text">Number of People</p> 
        <input 
          type="text" 
          name="number-of-peole" 
          id="nbr-people"
          value={nbrOfPeople}
          onChange={e => setNbrOfPeople(e.target.value)}
        />
        <p className={nbrOfPeople === '0' ? 'error-msg show-msg' : 'error-msg'}>Can't be zero</p>
      </label>
    </div>
  </div>
  )
}

export default Action