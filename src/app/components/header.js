'use client';
import { useState, useEffect } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [activeSection, setActiveSection] = useState(null);

    const handleMouseEnter = (id) => {
        setActiveSection(id);
    };

    const handleMouseLeave = (bool) => {
            if(bool === false ){
                console.log("2==>",bool)
                setActiveSection(null);
            }
    };
  return (
    <>
      <header className="px-40 flex-col justify-between items-center p-6 fixed top-0 left-0 right-0 z-999 hidden md:block  text-white hover:bg-white hover:text-black  ">
        <div className="text-2xl font-bold tracking-widest text-center">
          <div class="text-3xl font-bold tracking-widest h-[75px]	">
            SABYASACHI
          </div>
        </div>

        <nav>
          <ul className="flex justify-between items-center  space-x-4 uppercase text-sm tracking-widest  ">
            <li  onMouseEnter={() => handleMouseEnter("whats_new")}
                    onMouseLeave={()=>handleMouseLeave()}><a href="#" className="hover:underline">What's New</a></li>
            <li><a href="#" className="hover:underline">High Jewellery</a></li>
            <li><a href="#" className="hover:underline">Fine Jewellery</a></li>
            <li><a href="#" className="hover:underline">Womenswear</a></li>
            <li><a href="#" className="hover:underline">Menswear</a></li>
            <li><a href="#" className="hover:underline">Weddings</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:underline">World of Sabyasachi</a></li>
          </ul>
        </nav>
      </header>

     
      {/* <main className={activeSection === "whats_new" ? "flex   visible" : "hidden"}  onMouseLeave={() => {
        // console.log("leaving")
        // setIsHovered(()=>false);  
        handleMouseLeave(false);
    }}>

   <aside className="w-1/4 p-8 border-r">
     <h2 className="text-lg font-semibold mb-4">What's New</h2>
     <ul className="space-y-2 text-sm">
       <li><a href="#" className="hover:underline">Sabyasachi Jewellery X Neiman Marcus</a></li>
       <li><a href="#" className="hover:underline">25 Years Of Sabyasachi</a></li>
       <li><a href="#" className="hover:underline">Sabyasachi X Printemps Doha</a></li>
       <li><a href="#" className="hover:underline">Sabyasachi X Bergdorf Goodman 2024</a></li>
       <li><a href="#" className="hover:underline">The Sari Edit</a></li>
       <li><a href="#" className="hover:underline">Heritage Bridal 2024</a></li>
       <li><a href="#" className="hover:underline">The Curiosity, Art & Antiquity Project</a></li>
       <li><a href="#" className="hover:underline">Bridal Couture 2024</a></li>
       <li><a href="#" className="hover:underline">Love. Wanderlust. Curiosity</a></li>
       <li><a href="#" className="hover:underline">Sabyasachi X Bergdorf Goodman</a></li>
     </ul>
   </aside>

   <section className= "w-3/4 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 " >
     <div className="flex flex-col items-center text-center">
       <img src="https://via.placeholder.com/300x400" alt="Image 1" className="mb-4"/>
       <h3 className="text-sm uppercase tracking-wider">Sabyasachi Jewellery X Neiman Marcus</h3>
     </div>

     <div className="flex flex-col items-center text-center">
       <img src="https://via.placeholder.com/300x400" alt="Image 2" className="mb-4"/>
       <h3 className="text-sm uppercase tracking-wider">25 Years Of Sabyasachi</h3>
     </div>

     <div className="flex flex-col items-center text-center">
       <img src="https://via.placeholder.com/300x400" alt="Image 3" className="mb-4"/>
       <h3 className="text-sm uppercase tracking-wider">Sabyasachi X Printemps Doha</h3>
     </div>

     <div className="flex flex-col items-center text-center">
       <img src="https://via.placeholder.com/300x400" alt="Image 4" className="mb-4"/>
       <h3 className="text-sm uppercase tracking-wider">Sabyasachi X Bergdorf Goodman 2024</h3>
     </div>

     <div className="flex flex-col items-center text-center">
       <img src="https://via.placeholder.com/300x400" alt="Image 5" className="mb-4"/>
       <h3 className="text-sm uppercase tracking-wider">The Sari Edit</h3>
     </div>
   </section>

 </main> */}
 


      {/* Header Navbar */}
      <header className="fixed top-0 left-0 right-0 z-999 flex items-center justify-between px-4 py-3 bg-transparent bolck md:hidden">
        {/* Hamburger Menu */}
        <div
          className="text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          &#9776;
        </div>

        {/* Brand Name */}
        <div className="text-white text-2xl font-bold">
          SABYASACHI
        </div>

        <div className="w-6"></div> {/* Empty for balance */}
      </header>

      {isOpen && (
      <div className=" min-h-screen ">
      {/* Sidebar Menu */}
        <div className="fixed top-0 left-0 w-full h-full z-9999 bg-white  md:hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <button
              className="text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h1 className="text-xl font-semibold">SABYASACHI</h1>
            <div className="w-6"></div>
          </div>

          <ul className="flex flex-col">
            {[
              "What's New",
              "High Jewellery",
              "Fine Jewellery",
              "Womenswear",
              "Menswear",
              "Weddings",
              "Accessories",
              "World of Sabyasachi",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
              >
                <span className="uppercase text-sm font-semibold">{item}</span>
                <span className="text-xl">&#8250;</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
      )}
 
    </>
  );
}

