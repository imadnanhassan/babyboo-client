import React from 'react';
import { MdEmail } from "react-icons/md";
import {
   FaFacebookF,
   FaInstagram,
   FaPhoneAlt,
   FaTwitter,
   FaYoutube,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import qr from "../../assets/img/footer/qr.png";
import appStore from "../../assets/img/footer/app-store.png";
import playStore from "../../assets/img/footer/play-store.png";
import paypal from "../../assets/img/footer/paypal.png";
import mastercard from "../../assets/img/footer/mastercard.png";
import visacard from "../../assets/img/footer/visacard.png";
import service1 from "../../assets/img/services/service1.png";
import service2 from "../../assets/img/services/service2.png";
import service3 from "../../assets/img/services/service3.png";
import service4 from "../../assets/img/services/service4.png";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
   const now = new Date();
   const update = now.getFullYear();
   AOS.init({
      duration:2000
   });
   return (
      <footer className="lg:max-w-[1350px] mx-auto py-10  font-Primary" >
         <section className="border-b-2 px-7 py-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center md:justify-between" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="flex items-center gap-x-4">
               <img src={service1} alt="service1" />
               <div className="">
                  <strong className="mb-2 -mt-1 block">Fast & Secure Delivery</strong>
                  <p className="mt-1 text-gray-500">Tell about your service.</p>
               </div>
            </div>
            <div className="flex items-center gap-x-4">
               <img src={service2} alt="service1" />
               <div className="">
                  <strong className="mb-2 -mt-1 block">Money Back Guarantee</strong>
                  <p className="mt-1 text-gray-500">Within 10 days.</p>
               </div>
            </div>
            <div className="flex items-center gap-x-4">
               <img src={service3} alt="service1" />
               <div className="">
                  <strong className="mb-2 -mt-1 block">24 Hour Return Policy</strong>
                  <p className="mt-1 text-gray-500">No question ask.</p>
               </div>
            </div>
            <div className="flex items-center gap-x-4">
               <img src={service4} alt="service1" />
               <div className="">
                  <strong className="mb-2 -mt-1 block">Pro Quality Support</strong>
                  <p className="mt-1 text-gray-500">24/7 Live support.</p>
               </div>
            </div>
            <div></div>
            <div></div>
         </section>
        
         <section className="grid grid-cols-1 px-7 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b-2 pb-5" data-aos="fade-up">
            <div>
               <img className='w-44' src={logo} alt="" />
               <p className='py-5 font-normal font-Primary text-base text-slate-500 pr-4'>
                  You will find children’s and children’s clothing, shoes, toys, strollers, car seats, maternity clothes, accessories and more for children aged 0-10 in us.
               </p>
            </div>
            <div>
               <strong>Account</strong>
               <ul className="gap-y-2 flex flex-col mt-5">
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100 hover:before:w-contain">
                        My Account
                     </Link>
                  </li>
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100 hover:before:w-contain">
                        Login / Register
                     </Link>
                  </li>
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100">
                        Cart
                     </Link>
                  </li>
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100">
                        Whislist
                     </Link>
                  </li>
                  <li>
                     <Link to={'/all-toy'} className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100">
                        Shop
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <strong>Quick Link</strong>
               <ul className="gap-y-2 flex flex-col mt-5">
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100 hover:before:w-contain">
                        Privacy Policy
                     </Link>
                  </li>
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100 hover:before:w-contain">
                        Terms of Use
                     </Link>
                  </li>
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100">
                        FAQ
                     </Link>
                  </li>
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100">
                        Contact
                     </Link>
                  </li>
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100">
                        About
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <strong>Download App</strong>
               <ul className="gap-y-2 flex flex-col my-5">
                  <li>
                     <Link className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-[#ff8441] before:transition-all before:duration-200 hover:before:scale-x-100 hover:before:w-contain">
                        Save $3 With App & New User only
                     </Link>
                  </li>
               </ul>
               <div className="grid grid-rows-2 grid-cols-2 gap-y-3">
                  <div className="row-span-2 w-[100px]">
                     <img className="w-full" src={qr} alt="" />
                  </div>
                  <div>
                     <img src={appStore} alt="" />
                  </div>
                  <div>
                     <img src={playStore} alt="" />
                  </div>
               </div>
            </div>
         
         
         
         </section>
        
         <section className="flex flex-col px-7 md:flex-row gap-y-5 justify-between items-center" >
            <div>
               <ul className="flex justify-center md:justify-start gap-x-4 mt-5">
                  <li className="group">
                     <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#3b5998] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                           <FaFacebookF className="text-[#3b5998] group-hover:text-gray-50 duration-500"></FaFacebookF>
                        </a>
                     </div>
                  </li>
                  <li className="group">
                     <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#00acee] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                           <FaTwitter className="text-[#00acee] group-hover:text-gray-50 duration-500"></FaTwitter>
                        </a>
                     </div>
                  </li>
                  <li className="group">
                     <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#d62976] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                           <FaInstagram className="text-[#d62976] group-hover:text-gray-50 duration-500"></FaInstagram>
                        </a>
                     </div>
                  </li>
                  <li className="group">
                     <div className="flex items-center justify-center w-10 h-10 group-hover:scale-100 group-hover:bg-[#FF0000] bg-slate-200 transition duration-500 rounded-full  shadow-2xl shadow-black">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                           <FaYoutube className="text-[#FF0000] group-hover:text-gray-50 duration-500"></FaYoutube>
                        </a>
                     </div>
                  </li>
               </ul>
            </div>
            <div>
               <p>&#169; {update} All Rights reserved by <a href="#" className='hover:underline text-[#ff8441]'>BabyBo</a> </p>
            </div>
            <div className="flex items-center gap-x-5">
               <p>Accept for</p>
               <div>
                  <img src={paypal} alt="" />
               </div>
               <div>
                  <img src={mastercard} alt="" />
               </div>
               <div>
                  <img src={visacard} alt="" />
               </div>
            </div>
         </section>
      </footer>
   );
};

export default Footer;