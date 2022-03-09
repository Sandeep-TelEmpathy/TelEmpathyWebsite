import React, { useState } from 'react'
import './style.css'
import { Navigate, useHistory, useNavigate } from "react-router-dom";

import logo from '../components/Images/Logo_TelEmpathy.png'
import google from '../components/Images/google1.png'
// import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase'
import { getRedirectResult, signInWithRedirect, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const SignInWithGoogle = () => {
  // const [isLoggedin, setIsLoggedin] = useState(null)
  let navigate=useNavigate();



  const signInWithFirebase = () => {

    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider).then((re) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(re);
      // Redirect to the Booking Screen
      // return { redirectTo: "/booking" }
      setIsLoggedin = true;





    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
      // return { redirectTo: "/signin-with-google" }
      setIsLoggedin = false;


      // ...
    });


  }
  return (
    <div style={{ backgroundColor: '#E9EBE2' }}>
      <div className="signinwithgoogle">
        <div className="signinbox">
          <div className="signin text-center">
            <div className="imglogo">
              <img src={logo} alt="" />
            </div>
            <div className="google mt-5">
              {/* <Link path={isLoggedin ? '/booking' : '/signin-with-google'}> */}
              <button onClick={signInWithFirebase} > <img src={google} className="googlelogo" alt="" /> <span className="mx-2">Sign in with Google</span>  </button>
              {/* </Link> */}
              

            </div>
          </div>
        </div>


      </div>

    </div>

  )
}

export default SignInWithGoogle