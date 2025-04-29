'use client';
import { useState } from 'react';
export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
      <>
      <footer className="bg-black text-white py-12  hidden md:block">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

            {/* WHAT'S NEW */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">What's New</h3>
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
                <li><a href="#" className="hover:underline">The High Jewellery Show</a></li>
              </ul>
            </div>

            {/* WORLD OF SABYASACHI */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">World of Sabyasachi</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">History</a></li>
                <li><a href="#" className="hover:underline">Collaborations</a></li>
                <li><a href="#" className="hover:underline">The Sabyasachi Art Foundation</a></li>
                <li><a href="#" className="hover:underline">Social Initiatives</a></li>
                <li><a href="#" className="hover:underline">Craft Preservation</a></li>
                <li><a href="#" className="hover:underline">Art of Retail</a></li>
              </ul>
            </div>

            {/* CUSTOMER CARE */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Customer Care</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Stores</a></li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Social</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">YouTube</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>

            {/* CORPORATE */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Corporate</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      <footer className="bg-black  text-white py-12 px-8 sm:px-6 lg:px-8 block md:hidden">
        <div id="shopify-section-footer" class="shopify-section"><div class="bg-dark">
          <div class="container text-white">
            <div class="section-footer-padding-footer md:grid max-w-[31.813rem] md:max-w-none mx-auto ">
              <div class="md:grid grid-cols-12 lg-down:grid-cols-10 gap-[1.875rem] lg:gap-10  lg-down:mb-10 md-down:mb-0 relative footer border-white/[.1] border-b md:border-b-0">

                <div class="col-span-2 " ><div onClick={() => toggleSection('whats-new')} class="footer_link text-old-silver font-futura-pt uppercase cursor-pointer md:cursor-auto flex md:block justify-between md:pb-2.5 pt-5 pb-5 md:pt-0 border-white/[.1] border-t md:border-t-0 items-center" data-title="whats-new">
                  <p class="text-old-silver text-small font-medium tracking-[0.063rem] text-sm  text-gray-400 uppercase  mb-4">WHAT'S NEW</p>
                  <span class="md:hidden mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="white"></path>
                    </svg>
                  </span>
                </div>
                {openSection === 'whats-new' && (
                  <ul class="md:block footer-block__details-content list-unstyled whats-new"><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                    <a href="/pages/sabyasachi-jewellery-x-neiman-marcus" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Sabyasachi Jewellery X Neiman Marcus ">
                      Sabyasachi Jewellery X Neiman Marcus
                    </a>
                  </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/25-years-sabyasachi" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="25 Years Of Sabyasachi ">
                        25 Years Of Sabyasachi
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/sabyasachi-x-printemps-doha" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Sabyasachi X Printemps Doha ">
                        Sabyasachi X Printemps Doha
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/sabyasachi-x-bergdorf-goodman-2024" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Sabyasachi X Bergdorf Goodman 2024 ">
                        Sabyasachi X Bergdorf Goodman 2024
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/the-sari-edit-1" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="The Sari Edit ">
                        The Sari Edit
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/heritage-bridal-2024" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Heritage Bridal 2024 ">
                        Heritage Bridal 2024
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/caap-2024" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="The Curiosity, Art &amp; Antiquity Project ">
                        The Curiosity, Art &amp; Antiquity Project
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/bridal-couture-2024" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Bridal Couture 2024 ">
                        Bridal Couture 2024
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/resort-2024" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Love.  Wanderlust. Curiosity ">
                        Love.  Wanderlust. Curiosity
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/sabyasachi-x-bergdorf-goodman" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Sabyasachi X Bergdorf Goodman ">
                        Sabyasachi X Bergdorf Goodman
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/the-high-jewellery-show" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="The High Jewellery Show ">
                        The High Jewellery Show
                      </a>
                    </li></ul>
                     )}
                    </div>


                <div class="col-span-2 "><div onClick={() => toggleSection('WORLD_OF_SABYASACHI')} class="footer_link text-old-silver font-futura-pt uppercase cursor-pointer md:cursor-auto flex md:block justify-between md:pb-2.5 pt-5 pb-5 md:pt-0 border-white/[.1] border-t md:border-t-0 items-center active-link" data-title="world-of-sabyasachi">
                  <p class="text-old-silver text-small font-medium tracking-[0.063rem] text-sm  text-gray-400 uppercase  mb-4">WORLD OF SABYASACHI</p>
                  <span class="md:hidden mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="white"></path>
                    </svg>
                  </span>
                </div>
                {openSection === 'WORLD_OF_SABYASACHI' && (
                  <ul class="md:block footer-block__details-content list-unstyled world-of-sabyasachi active"><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                    <a href="/pages/history" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="History ">
                      History
                    </a>
                  </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/collaborations" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Collaborations ">
                        Collaborations
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/the-sabyasachi-art-foundation" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="The Sabyasachi Art Foundation ">
                        The Sabyasachi Art Foundation
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/social-initiatives" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Social Initiatives ">
                        Social Initiatives
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/craft-preservation" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Craft Preservation ">
                        Craft Preservation
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/art-of-retail" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Art of Retail ">
                        Art of Retail
                      </a>
                    </li></ul>
                )}</div>


                <div class="col-span-2 "><div onClick={() => toggleSection('CUSTOMER-CARE')} class="footer_link text-old-silver font-futura-pt uppercase cursor-pointer md:cursor-auto	flex md:block justify-between md:pb-2.5 pt-5 pb-5 md:pt-0 border-white/[.1] border-t md:border-t-0 items-center" data-title="customer-care">
                  <p class="text-old-silver text-small font-medium tracking-[0.063rem] text-sm  text-gray-400 uppercase  mb-4">CUSTOMER CARE</p>
                  <span class="md:hidden mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="white"></path>
                    </svg>
                  </span>
                </div>
                {openSection === 'CUSTOMER-CARE' && (
                  <ul class="md:block footer-block__details-content list-unstyled customer-care"><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                    <a href="/pages/contact" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Contact ">
                      Contact
                    </a>
                  </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/stores" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Stores ">
                        Stores
                      </a>
                    </li></ul>
                )}</div>


                <div class="col-span-2 "><div onClick={() => toggleSection('SOCIAL')} class="footer_link text-old-silver font-futura-pt uppercase cursor-pointer md:cursor-auto	flex md:block justify-between md:pb-2.5 pt-5 pb-5 md:pt-0 border-white/[.1] border-t md:border-t-0 items-center" data-title="social">
                  <p class="text-old-silver text-small font-medium tracking-[0.063rem] text-sm  text-gray-400 uppercase  mb-4">SOCIAL</p>
                  <span class="md:hidden mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="white"></path>
                    </svg>
                  </span>
                </div>
                {openSection === 'SOCIAL' && (
                  <ul class="md:block footer-block__details-content list-unstyled social"><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                    <a href="https://www.instagram.com/sabyasachiofficial/" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Instagram ">
                      Instagram
                    </a>
                  </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="https://www.youtube.com/c/SabyasachiOfficial" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="YouTube ">
                        YouTube
                      </a>
                    </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="https://www.facebook.com/sabyaofficial/" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Facebook ">
                        Facebook
                      </a>
                    </li></ul>)}</div>


                <div class="col-span-2 "><div onClick={() => toggleSection('CORPORATE')} class="footer_link text-old-silver font-futura-pt uppercase cursor-pointer md:cursor-auto	flex md:block justify-between md:pb-2.5 pt-5 pb-5 md:pt-0 border-white/[.1] border-t md:border-t-0 items-center" data-title="corporate">
                  <p class="text-old-silver text-small font-medium tracking-[0.063rem] text-sm  text-gray-400 uppercase  mb-4">CORPORATE</p>
                  <span class="md:hidden mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="white"></path>
                    </svg>
                  </span>
                </div>
                {openSection === 'CORPORATE' && (
                  <ul class="md:block footer-block__details-content list-unstyled corporate"><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                    <a href="/pages/privacy-policy" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Privacy Policy ">
                      Privacy Policy
                    </a>
                  </li><li class="link md:mb-[0.625rem] mb-[0.938rem]">
                      <a href="/pages/terms-of-use" class="footer_link-link hover:underline link no-border text-white font-light font-futura-pt normal-case underline-offset-[0.5rem] decoration-1	" title="Terms of Use ">
                        Terms of Use
                      </a>
                    </li></ul>)}</div>


               
                  </div>
                  </div>
                </div>
              </div>



            </div>
          </footer>

        </>
          );
  }
