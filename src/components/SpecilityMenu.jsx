import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecilityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
       <h1 className='text-5xl font-bold 'style={{ Color: '#F6F6F6' }}>Find by Speciality</h1>
       <p className='sm:w-1/3 text-center text-md'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
       <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-md cursor-pointer flex-shrink-0 hover:translate-y-[-16px] transition-all duration-500' key={index} to={'/doctors/${item.speciality}'}>
              <img className='w-18 sm:w-26 mb-2' src={item.image} alt=''/>
              <p>{item.speciality}</p>
            </Link>
        ))}
       </div>
    </div>
  )
}

export default SpecilityMenu