// import React from "react";
// import "./home.css";
// import Navbar from "../components/navbar";
// import Carousels from "../components/Carousels";
// import Mainbody from "../components/mainbody";
// import Footer from "../components/footer";
// import FormSection from "../components/formSection";
// const home = () => {
//   return (
//     <>
//         <Navbar />
//       <div className="carousel-div">
//         <Carousels />
//       </div>
//       <div className="landing-page-body">
//         <Mainbody />
//       </div>
//       <div className="form-input">
//         <FormSection />
//       </div>
//       <div className="Footer-div">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default home;

import React from 'react'
import './home.css';
import Navbar from '../components/navbar'
import  Carousel from '../components/carousel'
import Mainbody from '../components/mainbody';
import Footer from '../components/footer';
import FormSection from '../components/formSection';
import ChatBot from '../components/ChatBot';
const home = () => {
  return (

    <>
      <Navbar/>
    <Carousel/>
    <div className='landing-page-body'>
      <Mainbody/>

    </div>
    <div className='form-input m-8'>
      <FormSection/>

    </div>
    <div className='Footer-div'>
      <Footer/>

    </div>
    <div className='Chat-bot'>

       <ChatBot/>
    </div>
    
          

    </>
  )
}

export default home

