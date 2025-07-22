import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (speciality) {
      setFilteredDoctors(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilteredDoctors(doctors);
    }
  }, [doctors, speciality]);

  const specialties = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ];

  const mainColor = '#287094';

  return (
    <div className="px-4 py-6 bg-[#f9fafb] min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2" style={{ color: mainColor }}>
        Browse Doctors by Specialty
      </h2>
      <p className="text-gray-500 text-center text-base mb-6">
        Find trusted professionals in various fields.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* button filter*/}
        <button
          className="py-2 px-4 border border-gray-300 rounded text-sm sm:hidden bg-white shadow-sm"
          onClick={() => setShowFilter(prev => !prev)}
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/*menu filter */}
        <div className={`flex flex-col gap-3 text-sm ${showFilter ? 'block' : 'hidden'} sm:block`}>
          {specialties.map(spec => {
            const isActive = speciality === spec;
            return (
              <p
                key={spec}
                onClick={() => navigate(isActive ? '/doctors' : `/doctors/${spec}`)}
                className={`w-[94vw] sm:w-52 pl-4 py-2 pr-4 border rounded cursor-pointer text-center transition-all duration-200 ${
                  isActive
                    ? `bg-[${mainColor}] text-white border-[${mainColor}] font-medium`
                    : `text-gray-700 border-gray-300 hover:bg-[${mainColor}] hover:text-blue-700 hover:border-[${mainColor}]`
                }`}
              >
                {spec}
              </p>
            );
          })}
        </div>

        {/* card doctors*/}
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDoctors.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">No doctors found.</p>
          ) : (
            filteredDoctors.map((doc, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${doc._id}`)} 
                className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300 bg-white shadow-md"
              >
                <img className="w-full h-48 object-cover bg-[#EFF6FF]" src={doc.image} alt={doc.name} />
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Available</span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">{doc.name}</p>
                  <p className="text-gray-500 text-sm">{doc.speciality}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
