import React from 'react'
import { useEffect } from 'react/cjs/react.development';
import { useGlobalContext } from '../Context'



const Result = () => {
	const {bill, tip, nbrOfPeople,
		setTip, setBill,setNbrOfPeople, custom,setCustom} = useGlobalContext()
	let tipAmount = 0;
	let total = 0;
	if ((tip || custom) && bill && nbrOfPeople)
	{
		let tipValue;
		if (tip === '' ? tipValue = custom : tipValue = tip)
		if (tip != '' && custom != '')
			tipValue = custom
		console.log('tipValue:', tipValue);
		tipAmount = ((bill * tipValue ) / 100) / nbrOfPeople
		total = bill / nbrOfPeople + tipAmount
		
	}
	const resetValue = () => {
		setTip('');
		setBill('');
		setNbrOfPeople('');
		setCustom('');
	}
	return (
		<div className='result'>
			<div className="tip-amount flex">
				<div className="text">
					<h4>Tip Amount</h4>
					<p>/person</p>
				</div>
				<h1 className="tip-value">${tipAmount.toFixed(2)}</h1>
			</div>
			<div className="total flex">
				<div className="text">
					<h4>Total</h4>
					<p>/person</p>
				</div>
				<h1 className="total-value">${total.toFixed(2)}</h1>
			</div>
			<button 
				className="btn reset-btn"
				onClick={resetValue}
			>Reset</button>
		</div>
	)
}

export default Result