'use client';
import { useState } from "react";
import { useRef } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Main() {
    const [isPlaying, setIsPlaying] = useState(true);
      const videoRef = useRef(null);
      const toggleVideo = () => {
        setIsPlaying((prev) => !prev);
      };
    
    return (
        <>
        <Header/>
    <section className="relative h-[499px] md:h-screen w-full overflow-hidden ">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-center "
      >
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Centered text and button */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 text-center z-10">
        <h1 className="text-white text-xl sm:text-4xl font-bold tracking-widest mb-6 uppercase ">
          SABYASACHI X BERGDORF GOODMAN
        </h1>
        <button className="border border-white text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
          Explore
        </button>
      </div>

      {/* Play/Pause Button at Bottom-Left */}
      {/* <button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 bg-white bg-opacity-60 text-black text-xs px-4 py-2 rounded-full z-20 hover:bg-opacity-90 transition-all duration-300"
      >
        {isPlaying ? "Pause" : "Play"}
      </button> */}
       <button 
      onClick={toggleVideo} 
      type="button" 
      className="absolute bottom-6 right-6  flex items-center justify-center w-10 h-10 rounded-full bg-black text-white transition-all duration-300 hover:bg-gray-700"
      aria-label={isPlaying ? "Pausar todas las animaciones" : "Reproducir todas las animaciones"} 
      aria-pressed={isPlaying ? "true" : "false"}
    >
      {/* Play/Pause Icon */}
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 40 40" className="w-6 h-6">
          <title>Pause</title>
          <g fill="none" stroke="none">
            <rect fill="#FFFFFF" x="16" y="15" width="3" height="10"></rect>
            <rect stroke="#FFFFFF" x="0.5" y="0.5" width="39" height="39" rx="19.5"></rect>
            <rect fill="#FFFFFF" x="21" y="15" width="3" height="10"></rect>
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 40 40" className="w-6 h-6">
          <title>Play</title>
          <g fill="none" stroke="none">
            <polygon fill="#FFFFFF" points="17 15 26 20 17 25"></polygon>
            <rect stroke="#FFFFFF" x="0.5" y="0.5" width="39" height="39" rx="19.5"></rect>
          </g>
        </svg>
      )}
    </button>
    </section>
    <section className="media-container relative section-bg-template--15060547043382__4c730bdd-2bf3-4d23-b930-7f8043ffb4f0  pt-[3.75rem] md-down:pt-10  pb-[3.75rem] md-down:pb-10 ">
    <div className="section-wrapper container">
        <div className="content-wrapper max-w-[39.938rem] lg-down:max-w-[34.625rem] md-down:max-w-[28.063rem] sm-down:max-w-auto mx-auto text-center">
            
                <div className="brand-paragraph text-large text-body font-light ">
                    <p>“For culture to be relevant, it needs to be dynamic.” </p>
                </div>
            
            
            
        </div>
    </div>
</section>
<section
      className="relative h-[499px] md:h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: "url('https://sabyasachi.com/cdn/shop/files/Untitled-1-08_640x.jpg?v=1731475807%201x,%20//sabyasachi.com/cdn/shop/files/Untitled-1-08_640x@2x.jpg?v=1731475807%202x,%20//sabyasachi.com/cdn/shop/files/Untitled-1-08_640x@3x.jpg?v=1731475807%203x')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 text-center">
        <h1 className="text-white text-2xl sm:text-4xl font-bold tracking-widest mb-6 uppercase text-xl leading-9 md:text-base md:leading-normal">
          SABYASACHI X BERGDORF GOODMAN
        </h1>
        <button className="border border-white text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
          Explore
        </button>
      </div>
    </section>
   
<section className="media-container relative section-bg-template--15060547043382__text_button_svg_qL8itE  pt-0  pb-[3.75rem] md-down:pb-10 ">
    <div className="section-wrapper container">
        <div className="content-wrapper max-w-[39.938rem] lg-down:max-w-[34.625rem] md-down:max-w-[28.063rem] sm-down:max-w-auto mx-auto text-center">
            
            
            
        </div>
    </div>
</section>
<section
      className="relative h-[499px] md:h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: "url('https://sabyasachi.com/cdn/shop/files/Untitled-1-08_640x.jpg?v=1731475807%201x,%20//sabyasachi.com/cdn/shop/files/Untitled-1-08_640x@2x.jpg?v=1731475807%202x,%20//sabyasachi.com/cdn/shop/files/Untitled-1-08_640x@3x.jpg?v=1731475807%203x')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 text-center">
        <h1 className="text-white text-2xl sm:text-4xl font-bold tracking-widest mb-6 uppercase text-xl leading-9 md:text-base md:leading-normal">
          SABYASACHI X BERGDORF GOODMAN
        </h1>
        <button className="border border-white text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
          Explore
        </button>
      </div>
    </section>
    <section className="media-container relative section-bg-template--15060547043382__text_button_svg_qL8itE  pt-0  pb-[3.75rem] md-down:pb-10 ">
    <div className="section-wrapper container">
        <div className="content-wrapper max-w-[39.938rem] lg-down:max-w-[34.625rem] md-down:max-w-[28.063rem] sm-down:max-w-auto mx-auto text-center">
            
            
            
        </div>
    </div>
</section>
<section
      className="relative h-[499px] md:h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: "url('https://sabyasachi.com/cdn/shop/files/Untitled-1-08_640x.jpg?v=1731475807%201x,%20//sabyasachi.com/cdn/shop/files/Untitled-1-08_640x@2x.jpg?v=1731475807%202x,%20//sabyasachi.com/cdn/shop/files/Untitled-1-08_640x@3x.jpg?v=1731475807%203x')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 text-center">
        <h1 className="text-white text-2xl sm:text-4xl font-bold tracking-widest mb-6 uppercase text-xl leading-9 md:text-base md:leading-normal">
          SABYASACHI X BERGDORF GOODMAN
        </h1>
        <button className="border border-white text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
          Explore
        </button>
      </div>
    </section>
    <section class="media-container relative section-bg-template--15060547043382__1c35a919-d043-4a61-bbb8-5a7ce367a8cc  pt-[3.75rem] md-down:pt-10  pb-[3.75rem] md-down:pb-10 md-left:p-10 ">
    <div class="section-wrapper container">
        <div class="content-wrapper max-w-[39.938rem] lg-down:max-w-[34.625rem] md-down:max-w-[28.063rem] sm-down:max-w-auto mx-auto text-center">
            
                <div class="brand-paragraph text-large text-body font-light px-4 md:px-0">
                    <p>“Crowded narrow lanes with balconies jutting out of beautiful old mansions and homes, jostling for space in North Calcutta. So rich in its nonchalance, between the clamour of grandeur and decay. It’s almost spiritual, the neglect of luxury and the casual existence of glamour. It makes Calcutta unforgettable.”</p>
                </div>
            

            
        </div>
    </div>
</section>

   <Footer/>
        </>
    )}