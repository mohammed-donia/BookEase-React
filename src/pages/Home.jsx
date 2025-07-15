import React from 'react'
import Header from '../components/Header'
import SpecilityMenu from '../components/SpecilityMenu'
import ToDoctors from '../components/ToDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
       <Header/>
       <SpecilityMenu/>
       <ToDoctors/>
       <Banner/>

    </div>
  )
}

export default Home