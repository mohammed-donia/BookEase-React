import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ToDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-5xl font-bold'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-md'>
        Simply browse through our extensive list of trusted doctors.
      </p>
<div
  className="w-full bg-cover bg-center bg-no-repeat py-10 px-3 sm:px-10"
  style={{ backgroundImage: "url('/src/assets/bg-speciality.jpg')" }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {doctors.slice(0, 10).map((item, index) => (
      <div
        onClick={() => {
          navigate(`/appointment/${item._id}`)
          scrollTo(0, 0)
        }}
        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-white bg-opacity-80"
        key={index}
      >
        <img className="bg-blue-50 w-full h-48 object-cover" src={item.image} alt="" />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-green-500  mb-1" >
            <span className="w-2 h-2 text-green-500 rounded-full inline-block"style={{ backgroundColor: '#287094' }}></span>
            <p className='font-bold  '>Available</p>
          </div>
          <p className="text-gray-900 text-lg font-medium" >{item.name}</p>
          <p className="text-gray-600 text-sm">{item.speciality}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        className=' text-white font-bold px-12 py-3 rounded-full mt-10'style={{ backgroundColor: '#287094' }}
      >
        MORE
      </button>
    </div>
  )
}

export default ToDoctors
