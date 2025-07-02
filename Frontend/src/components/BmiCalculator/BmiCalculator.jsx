import React, { useState,useEffect,useContext } from 'react';
import axios from "axios"
import AigenerateSug from '../AigenerateSug/AigenerateSug';
import { BmiContext } from './BmiProvider';
import { toast } from 'react-toastify';

const BmiCalculator = ({children}) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const {setBmiData}=useContext(BmiContext);
  const [isSubmitting,setIsSubmitting]=useState(false)

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus('Underweight');
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus('Normal');
    else if (bmiValue >= 25 && bmiValue < 29.9) setStatus('Overweight');
    else setStatus('Obese');
  };
    // console.log("hello",bmi)
  useEffect(()=>{
    if(bmi && status){
      setBmiData({bmi:bmi,status:status});
    }
  }, [bmi,status]);
    
  // add bmi in database
   const addBmi=async()=>{
    if(!height || !weight || !bmi || !status){
      console.log("Missing Data");
      return;
    }

    if(isSubmitting)return;
     setIsSubmitting(true)
      
    try{
      const adData= await axios.post('http://127.0.0.1:8000/api/add/',{
        height:height,
        weight:weight,
        bmi:bmi,
        status:status,
      });
      console.log(adData.data)
      if(adData){
        toast.success("BMI saved successfully!")
        return
      }
       alert('BMI saved successfully!');
      
    }
    catch(error){
      if(error.response){
        console.log("Backend error response:",error.response.data);
      }else{
        console.log("Error",error.message)
      }  
    }
    finally{
      setIsSubmitting(false)
    }
  };
  
  
  return (

    <div  className=' pt-24 bg-blue-50/50 w-full min-h-screen p-4 flex justify-center items-center '>
        {/* Bmi calculator */}
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">BMI Calculator</h2>

      <input
        type="number"
        placeholder="Height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full mb-6 p-3 border rounded-md text-base"
      />

      <input
        type="number"
        placeholder="Weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full mb-6 p-3 border rounded-md text-base"
      />

      <button
        onClick={()=>{
          calculateBMI();
          setTimeout(() => {
            addBmi();
          }, 300);
        }
      }
        disabled={isSubmitting}
        className="w-full  bg-blue-600 text-white py-3 rounded-md text-base hover:bg-secondary transition hover:font-semibold"
        > 
        {/* {isSubmitting?"save BMI":"Calculate BMI"} */}
        Calculate & save BMI
      </button>

      {bmi && (
        <div className="mt-6">
          <p className="text-lg font-medium"> 
             Your BMI: <span className="text-blue-500 font-semibold">{bmi}</span></p>
          <p className="text-lg font-medium">
            BMI Status: <span className="text-blue-500 font-semibold">{status}</span></p>
        </div>
      )}
    </div>
    
    </div>
   
  );
};

export default BmiCalculator;
