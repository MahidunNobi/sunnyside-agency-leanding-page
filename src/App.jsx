import { useState } from 'react'

import './App.css'
import Navbar from './componants/Navbar'
import Footer from './componants/Footer'
import SecondSection from './pages/SecondSection'
import Testimonial from './pages/Testimonial'


function App() {
  

  return (
    <div className="App">

      <Navbar />
      <SecondSection />
      <Testimonial />



      
      <Footer />
    </div>
  )
}

export default App
