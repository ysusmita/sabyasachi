'use client';
import { useState } from 'react';
export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <>
      <footer class="bg-white border-t border-gray-200 text-black text-sm">
        <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 class="font-semibold mb-2">Contact Us</h3>
            <p>📞 Call Us: +91 9884039111</p>
            <p>📧 Email Us: Admin@Khwaaish.Com</p>
            <div class="flex justify-center md:justify-start gap-3 mt-3 text-xl">
              <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="Help"><i class="fas fa-question-circle"></i></a>
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Store Address</h3>
            <div class="flex">
              <div class=""></div>
              <div>
                <p>No: 53/2, C.P. Ramaswamy Road, Abiramapuram</p>
                <p>Chennai, Tamil Nadu 600018</p>
                <a href="#" >Show In Google Maps</a>

              </div>
            </div>

          </div>

          <div>
            <h3 class="font-semibold mb-2">Quick Links</h3>
            <ul class="space-y-1">
              <li><a href="#" class="hover:underline">Blog</a></li>
              <li><a href="#" class="hover:underline">Our Story</a></li>
              <li><a href="#" class="hover:underline">Privacy Policy</a></li>
              <li><a href="#" class="hover:underline">Contact Us</a></li>
              <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 mt-6 py-4 text-center text-xs text-gray-600">
          ©2025 Khwaaish Diamonds. All Right Reserved.
        </div>
      </footer>


    </>
  );
}
