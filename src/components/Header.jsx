import React from "react";
import "./Header.css";
import Img from "./Images/happy.png";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
const Header = () => {
  return (
    <div >
      <header>
        {/* container main-hero-container */}
        <section className="header container my-3 m-auto">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex   justify-content-center flex-column align-items-center ">
              <div>
                <h1
                  className="display-2 my-3 pt-5"
                  style={{ fontWeight: "600"}}
                >
                  We are here for you! <br />
                </h1>
                <p className="main-hero-para ">
                  Start your journey of Mental Health Care.
                </p>
                <h3>Book a Session with an Online Psychologist</h3>

                {/* <div className="input-group mt-3"> */}
                {/* <div
                  className="inputbtn"
                  style={{ width: "100%", display: "flex" }}
                > */}
          

      <Link to="/signin-with-google" href=""><button
                    className="input-group-button px-2 py-2 mx-0 mt-4 "
                    style={{ backgroundColor: "#5041BB", color: "white",border:"2px solid #5041BB",borderRadius:"4px",boxShadow: "2px 2px rgba(0.1,0.1,0.1,0.3)"}}
                  >
                    Get Started
                  </button></Link>
                  
                  <Link to="/howtouse" href=""><button
                    className="input-group-button btn2  p-2 "
                    style={{ color: "#5041BB", FontWeight: "bold",border:"2px solid #5041BB" ,borderRadius:"4px",boxShadow: "2px 2px rgba(0.1,0.1,0.1,0.3)" }}
                  >
                    How to Use?
                  </button></Link>

                  
                {/* </div> */}
                {/* <div > */}
                <br />
                <br />
                <a href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=+919819481283" style={{textDecoration: 'none'}}>
                <span
                  className="mt-3 mb-5  p-1 "
                  style={{ backgroundColor: "#DFEAFE", borderRadius: "15px" }}
                >
                  <span
                    className="p-1"
                    style={{
                      backgroundColor: "#4d61fc",
                      color: "white",
                      borderRadius: "15px",
                      fontSize: "12px"
                    }}
                  >
                    Any Queries? 
                  </span>
                  <span className="p-1" style={{ color: "#627efc" ,fontSize: "12px",cursor:"pointer",fontWeight:"bold" }}>
                  WhatsApp Us<i className="bi bi-arrow-right " style={{fontSize:"16px"}}/>
                  </span>
                </span>
                </a>
                

                {/* </div> */}
               

                

                
               
              {/* </div> */}
              
              


              
                

               
                
              </div>
              {/* <a href="#"> */}

              {/* </a> */}
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src={Img}
                alt="heroimg"
                className="img-fluid bounce-1"

                // style={{height:"550px"}}
              />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
