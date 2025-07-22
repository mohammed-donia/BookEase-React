import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div
      className="min-h-screen px-6 py-16"
      style={{
        background:
          'radial-gradient(circle at top left, #e1f0f7, #f9fafb)',
      }}
    >
      {/* titel center*/}
      <h2 className="text-4xl font-bold text-[#287094] mb-12 text-center">
        My Appointments
      </h2>

      {doctors.length === 0 ? (
        <p className="text-center text-gray-500 italic mt-20">No appointments yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-12">
          {doctors.slice(0, 3).map((doc, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 gap-8"
            >
              {/*image card and showdo */}
              <div
                className="flex-shrink-0 w-full sm:w-48 h-[40vh] rounded-lg overflow-hidden relative"
                style={{

                  borderRadius: '1rem',
                }}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
                {/* hover  */}
                <div
                  style={{
                   
                    background:
                      'linear-gradient(90deg, transparent, rgba(40, 112, 148, 0.25))',
                    borderRadius: '1rem',
                  }}
                />
              </div>

              {/* info doctors*/}
              <div className="flex-1 text-gray-700 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{doc.name}</h3>
                  <p className="text-[#287094] font-medium mt-2">{doc.speciality}</p>

                  <div className="mt-4 text-sm space-y-1">
                    <p className="font-semibold text-gray-800">Address:</p>
                    <p>{doc.address?.line1 || 'N/A'}</p>
                    <p>{doc.address?.line2 || ''}</p>
                  </div>

                  <p className="mt-6 text-sm text-gray-600">
                    <span className="font-semibold">Date & Time:</span> 25 July, 2024 - 10:30 AM
                  </p>
                </div>

                {/* buttons*/}
                <div className="mt-6 flex gap-4">
                  <button className="flex-1 py-3 rounded-lg bg-[#287094] text-white font-semibold hover:bg-[#1f5a73] transition">
                    Pay Online
                  </button>
                  <button className="flex-1 py-3 rounded-lg border border-red-500 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition">
                    Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
