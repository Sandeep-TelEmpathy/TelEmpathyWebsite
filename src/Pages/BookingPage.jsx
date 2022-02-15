import React from 'react'
import BookingNav from '../components/BookingNav'
import logo from '../components/Images/Logo_TelEmpathy.png'

const BookingPage = () => {
  return (
    <div>
        <BookingNav/>

        <div className="container mt-5">
            <div className="block1 text-center p-5" style={{backgroundColor:'rgba(246,246,246,1)'}} >
                <div className="block-2 text-center p-3">
                    <img src={logo} alt="" style={{width: '40%'}} />
                    <h1>Book a Session with an online Psychologist</h1>
                </div>
            </div>
        </div>

        <div className="psyhead mt-5 text-center">
            <h2 style={{fontWeight: 'bold'}}>List of our Psychologist</h2>
            <hr  style={{width: '10%',margin:"auto",height: '3px'}} />
        </div>


    </div>
  )
}

export default BookingPage