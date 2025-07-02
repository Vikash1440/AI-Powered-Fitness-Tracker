import axios from "axios"
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState,useEffect } from 'react';
import { toast } from "react-toastify";

// fetch data from database
const Userdasboard = () => {
    const [djangodata,setDjangodata]=useState([])
      useEffect(()=>{
        async function getdata() {
           try{
            const djangodata=await axios.get('http://127.0.0.1:8000/api/bmi/')
            // console.log(djangodata.data)
            setDjangodata(djangodata.data)
           }
           catch(error){
               console.log(error)
           }     
        }
        getdata()
      },[])

    //   delete data in database
const handleDelete=async(id)=>{
    // if(window.confirm('Are you sure you want to delete this record?')){
        try{
            await axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`);
            setDjangodata(djangodata.filter(item=>item.id!==id));
        }catch(error){
            console.error('Delete faild:', error)
        }
    // }
};
  return (
   
    <div className="relative pt-28 shadow rounded-lg bg-white px-4 sm:px-6 lg:px-8 ">
      <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-gray-700 ">
      <thead className="text-xs text-gray-600 uppercase bg-gray-100 ">
        <tr className="text-left">
          <th scope="col" className="px-4 py-3">ID</th>
          <th scope="col" className="px-4 py-3">Height (cm)</th>
          <th scope="col" className="px-4 py-3">Weight (kg)</th>
          <th scope="col" className="px-4 py-3">BMI</th>
          <th scope="col" className="px-4 py-3">Status</th>
          <th scope="col" className="px-4 py-3">Date</th>
          <th scope="col" className="px-4 py-3">Delete</th>
        </tr>
      </thead>

      <tbody >
        {djangodata.map((item, i) => (
          <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-4 py-3">{item.id}</td>
            <td className="px-4 py-3">{item.height}</td>
            <td className="px-4 py-3">{item.weight}</td>
            <td className="px-4 py-3">{item.bmi}</td>
            <td className="px-4 py-3 text-blue-600 text-lg">{item.status}</td>
            <td className="px-4 py-3">
              {new Date(item.created_at).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </td>
            <td className="px-4 py-3">
                <button 
                onClick={()=>{
                  handleDelete(item.id)
                  toast.error("BMI delete successfully")
                }}
                className="cursor-pointer text-lg hover:text-red-700 text-amber-500 transition"
                ><RiDeleteBin6Line/></button>
           </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default Userdasboard
