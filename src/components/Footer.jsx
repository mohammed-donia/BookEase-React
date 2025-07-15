import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-40 py-14 px-6 md:px-20 text-sm text-gray-600">
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14">
        {/* -------- Left Section -------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="logo" />
          <p className="max-w-md leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard since the 1500s.
          </p>
        </div>

        {/* -------- Center Section -------- */}
        <div>
          <h3 className="text-lg font-bold  mb-4"style={{ color: '#287094' }}>Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
            <li className="hover:text-black cursor-pointer">Doctors</li>
          </ul>
        </div>

        {/* -------- Right Section -------- */}
        <div>
          <h3 className="text-lg font-bold mb-4"style={{ color: '#287094' }}>Get in Touch</h3>
          <ul className="space-y-2">
            <li>+972 597845859</li>
            <li>doniasoud@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
