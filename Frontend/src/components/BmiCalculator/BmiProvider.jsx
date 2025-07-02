import React,{createContext,useState} from 'react'
export const BmiContext=createContext();

function BmiProvider({children}) {
  const [bmiData,setBmiData]=useState({
    bmi:'',
    status:''
  });
  return (
   <BmiContext.Provider value={{bmiData,setBmiData}}>
    {children}
   </BmiContext.Provider>
  )
}

export default BmiProvider
