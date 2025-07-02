import axios, { spread } from 'axios';
import React, { useState,useContext } from 'react'
import { BmiContext } from '../BmiCalculator/BmiProvider';
import { toast } from "react-toastify";
const AigenerateSug = () => {
    const [tips,setTips]=useState('');
    const {bmiData}=useContext(BmiContext);
    
    const fetchTips=async ()=>{
      try{
        // console.log("bmi" ,bmi)
        // console.log("status",status)
        const response=await axios.post("http://localhost:8000/api/aitips/",{
          bmi:bmiData.bmi,
          status:bmiData.status,
        });
        
        setTips(response.data.tips);
       } catch(err){
        // console.error("Error fetching AI tips", err)
       }
     };
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-400 pt-24 px-4 shadow rounded-lg">
  {/* Scrollable tips container */}
  <div className="flex justify-center pt-10 sm:pt-16">
    <div className="mt-2 mb-4 p-4 max-w-md w-full sm:max-w-lg bg-gray-100 rounded-md shadow-md whitespace-pre-line overflow-y-auto"
         style={{ maxHeight: '300px' }}>
      {tips ?(
        <div className='text-sm sm:text-base'>{tips}</div>
      ): (
         <span className='flex justify-center items-center font-semibold text-center text-gray-600'>
          AI tips will appear here after clicking the button below.
          </span>
        )}
    </div>
  </div>

  {/* Button at bottom center */}
  <div className="flex justify-center mt-auto mb-8">
    <button
      onClick={()=>{fetchTips()
      setTimeout(()=>{      
            toast.success("Tips generate successfully");
          },2500);
    }}
      className="bg-green-500 text-white font-semibold text-sm sm:text-lg px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200"
    >
      Generate Fitness Tips
    </button>
  </div>
</div>
  );
}
export default AigenerateSug
