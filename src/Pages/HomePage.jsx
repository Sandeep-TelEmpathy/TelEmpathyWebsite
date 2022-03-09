import React from 'react'
import Association from '../components/Association'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

const HomePage = () => {
  return (
    <div>
<Navbar/>
                <Header/>
        <Faq/>
        <Association/>
        <NewsLetter/>
        
        
        
        <Footer/>
    </div>
  )
}

export default HomePage