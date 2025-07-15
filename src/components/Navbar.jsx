import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 md:px-10 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className="w-36 cursor-pointer"
          src={assets.logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
          {['/', '/doctors', '/about', '/contact'].map((path, i) => {
            const names = ['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT']
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#287094] relative after:content-[""] after:block after:h-[2px] after:w-6 after:bg-[#287094] after:mx-auto mt-1'
                      : 'hover:text-[#287094] transition'
                  }
                >
                  {names[i]}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* Profile / Button / Menu */}
        <div className="flex items-center gap-4">
          {token ? (
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <img className="w-8 h-8 rounded-full" src={assets.profile_pic} alt="" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              </div>
              <div className="absolute right-0 pt-3 hidden group-hover:block">
                <div className="w-48 bg-white shadow-lg rounded-md p-4 text-sm text-gray-700 space-y-3">
                  <p onClick={() => navigate('my-profile')} className="hover:text-[#287094] cursor-pointer">My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className="hover:text-[#287094] cursor-pointer">My Appointments</p>
                  <p onClick={() => setToken(false)} className="hover:text-[#287094] cursor-pointer">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-[#287094] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1f5b78] transition hidden md:block"
            >
              Create Account
            </button>
          )}

          {/* Hamburger Icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 cursor-pointer md:hidden"
            src={assets.menu_icon}
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? 'fixed' : 'hidden'
        } top-0 right-0 w-4/5 h-full bg-white z-50 shadow-lg md:hidden transition-all`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <img className="w-32" src={assets.logo} alt="" />
          <img
            className="w-6 cursor-pointer"
            src={assets.cross_icon}
            alt="close"
            onClick={() => setShowMenu(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 text-gray-700 font-medium text-base p-6">
          <li><NavLink onClick={() => setShowMenu(false)} to='/'>HOME</NavLink></li>
          <li><NavLink onClick={() => setShowMenu(false)} to='/doctors'>ALL DOCTORS</NavLink></li>
          <li><NavLink onClick={() => setShowMenu(false)} to='/about'>ABOUT</NavLink></li>
          <li><NavLink onClick={() => setShowMenu(false)} to='/contact'>CONTACT</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
