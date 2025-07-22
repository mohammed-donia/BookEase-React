import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';


function convertTimeToAmPm(time24) {
  const [hourStr, minute] = time24.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; 
  return `${hour}:${minute} ${ampm}`;
}


const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);

  const related = doctors.filter(
    (doc) => doc.speciality === speciality && doc._id !== docId
  );

  return (
    <section className="mt-14 px-4 sm:px-0 max-w-6xl mx-auto">
      
      {related.length === 0 ? (
        <p className="text-gray-500">No related doctors available.</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {related.map((doc) => (
            <div
               >
            
               </div>
          ))}
        </div>
      )}
    </section>
  );
};

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  useEffect(() => {
    const foundDoc = doctors.find((doc) => doc._id === docId);
    setDocInfo(foundDoc);
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  const getAvailableSlots = () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  if (!docInfo) return null;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row gap-6">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 bg-white">
          <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <span className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</span>
          </div>
          <div className="mt-4">
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
              About <img src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-500 mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-8 sm:ml-72">
        <p className="font-medium text-gray-700 mb-3">Booking Slots</p>
        <div className="flex gap-3 overflow-x-auto mb-4">
          {docSlots.map((item, index) => (
            <div
              onClick={() => {
                setSlotIndex(index);
                setSlotTime('');
              }}
              key={index}
              className={`text-center py-2 px-3 min-w-16 rounded-full cursor-pointer border transition ${
                slotIndex === index
                  ? 'bg-[#287094] text-white border-[#287094]'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-[#d0e9f2]'
              }`}
            >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {docSlots[slotIndex]?.map((item, index) => (
            <p
              onClick={() => setSlotTime(item.time)}
              key={index}
              className={`text-sm font-light px-5 py-2 rounded-full cursor-pointer border transition ${
                item.time === slotTime
                  ? 'bg-[#287094] text-white border-[#287094]'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-[#d0e9f2]'
              }`}
            >
              {convertTimeToAmPm(item.time)}
            </p>
          ))}
        </div>

        <button
          className="bg-[#287094] text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:opacity-90 transition"
          onClick={() => {
            if (!slotTime) {
              alert('Please select a time slot before booking.');
              return;
            }
            alert(`Appointment booked with ${docInfo.name} at ${convertTimeToAmPm(slotTime)}`);
          }}
        >
          Book an appointment
        </button>
      </div>

      {/* Related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
