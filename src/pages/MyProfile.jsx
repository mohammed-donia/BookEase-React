import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Mohammed Ahmed",
    image: assets.profile_pic,
    email: 'mohammedAhmed@gmail.com',
    phone: '+972 597 845 859',
    address: {
      line1: "Al-Wahda Street",
      line2: "Al-Shifa Medical Tower"
    },
    gender: "Male",
    dob: '31/01/1968'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl text-gray-800 font-sans">
      
      {/* image profile*/}
      <div className="flex flex-col items-center">
        <img
          className="w-36 h-36 rounded-full shadow-lg object-cover border-4 border-[#0B7285]"
          src={userData.image}
          alt={`${userData.name} profile`}
          loading="lazy"
        />
        {
          isEdit
            ? (
              <input
                type="text"
                value={userData.name}
                onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                className="mt-6 w-full text-3xl font-semibold text-center border-b-2 border-[#0B7285] focus:outline-none focus:border-[#087094] transition"
              />
            )
            : (
              <h1 className="mt-6 text-4xl font-extrabold text-center text-[#0B7285]">
                {userData.name}
              </h1>
            )
        }
      </div>

      <hr className="my-8 border-gray-300" />

      {/* info contact */}
      <section>
        <h2 className="text-xl font-bold text-[#0B7285] mb-4 border-b-2 border-[#0B7285] pb-1">
          Contact Information
        </h2>

        <div className="space-y-5 text-lg">
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="font-semibold">Email:</label>
            <p className="text-blue-600 break-all">{userData.email}</p>
          </div>

          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="font-semibold">Phone:</label>
            {
              isEdit
                ? (
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087094]"
                  />
                )
                : <p className="text-blue-600">{userData.phone}</p>
            }
          </div>

          <div className="grid grid-cols-[120px_1fr] items-start gap-4">
            <label className="font-semibold pt-1">Address:</label>
            {
              isEdit
                ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={userData.address.line1}
                      onChange={e => setUserData(prev => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value }
                      }))}
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087094]"
                    />
                    <input
                      type="text"
                      value={userData.address.line2}
                      onChange={e => setUserData(prev => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value }
                      }))}
                      className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087094]"
                    />
                  </div>
                )
                : (
                  <address className="not-italic text-gray-600 leading-relaxed whitespace-pre-line">
                    {userData.address.line1} <br />
                    {userData.address.line2}
                  </address>
                )
            }
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* info keys */}
      <section>
        <h2 className="text-xl font-bold text-[#0B7285] mb-4 border-b-2 border-[#0B7285] pb-1">
          Basic Information
        </h2>

        <div className="space-y-5 text-lg">
          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="font-semibold">Gender:</label>
            {
              isEdit
                ? (
                  <select
                    value={userData.gender}
                    onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087094]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                )
                : <p>{userData.gender}</p>
            }
          </div>

          <div className="grid grid-cols-[120px_1fr] items-center gap-4">
            <label className="font-semibold">Birthday:</label>
            {
              isEdit
                ? (
                  <input
                    type="date"
                    value={userData.dob}
                    onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                    className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087094]"
                  />
                )
                : (
                  <p>{new Date(userData.dob).toLocaleDateString()}</p>
                )
            }
          </div>
        </div>
      </section>

      {/* button edit */}
      <div className="mt-12 flex justify-center">
        {
          isEdit
            ? (
              <button
                onClick={() => setIsEdit(false)}
                className="bg-[#0B7285] hover:bg-[#087094] text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-colors duration-300"
              >
                Save Information
              </button>
            )
            : (
              <button
                onClick={() => setIsEdit(true)}
                className="border border-[#0B7285] text-[#0B7285] font-semibold px-10 py-3 rounded-full hover:bg-[#0B7285] hover:text-white transition-colors duration-300"
              >
                Edit
              </button>
            )
        }
      </div>
    </div>
  );
};

export default MyProfile;
