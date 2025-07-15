import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E6F0F5' }}>
      <div className="flex bg-white rounded-2xl shadow-lg max-w-5xl w-full overflow-hidden">
        {/* left image */}
        <div 
          className="hidden md:block md:w-1/2 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80')",
            filter: "brightness(0.85)"
          }} 
          aria-label="Booking concept image"
        ></div>

        {/* create account*/}
        <form 
          className="w-full md:w-1/2 p-12 flex flex-col justify-center"
          onSubmit={onSubmitHandler}
        >
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: '#287094' }}>{state === 'Sign Up' ? "Create Account" : "Login"}</h2>
          <p className="mb-8 text-gray-600 text-lg">{state === 'Sign Up' ? "Sign up now to book your appointment." : "Log in to your account."}</p>

          {state === "Sign Up" && (
            <div className="mb-5">
              <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#287094] transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
          )}

          <div className="mb-5">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#287094] transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#287094] transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#1f5a70] transition"
            style={{ backgroundColor: '#287094' }}
          >
            {state === 'Sign Up' ? "Create Account" : "Login"}
          </button>

          <p className="mt-6 text-center text-gray-600 text-sm">
            {state === "Sign Up"
              ? <>Already have an account? <span onClick={() => setState('Login')} className="text-[#287094] cursor-pointer underline">Login here</span></>
              : <>Don't have an account? <span onClick={() => setState('Sign Up')} className="text-[#287094] cursor-pointer underline">Sign up</span></>
            }
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
