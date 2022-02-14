import React,{useContext, useState} from "react";

const AppContext = React.createContext()
export const AppProvider = ({children}) => {
	const [tip, setTip] = useState('');
	const [bill, setBill] = useState('');
	const [nbrOfPeople, setNbrOfPeople] = useState('');
	const [custom, setCustom] = useState('');

	return (
		<AppContext.Provider
			value={{
				setTip,
				setBill,
				setNbrOfPeople,
				bill,
				tip,
				nbrOfPeople,
				custom,
				setCustom,
			}}	
		>
			{children}
		</AppContext.Provider>
	)
};

export const useGlobalContext = () => {
	return useContext(AppContext);
}
