import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../assets/img/gallery/cuty baby.jpg'
import img2 from '../../../assets/img/allToy/img1.jpg'
import img3 from '../../../assets/img/allToy/img3.jpg'
import img5 from '../../../assets/img/allToy/img5.jpg'
import img7 from '../../../assets/img/allToy/img7.jpg'
import img10 from '../../../assets/img/allToy/img10.jpg'

const Gallery = () => {
   AOS.init({
      duration: 2000,
      easing: 'ease-in-sine',
   });
   return (
      <section className="text-gray-600 body-font">
         <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
               <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Master Cleanse Reliac Heirloom
               </h1>
               <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                  gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                  heard of them man bun deep jianbing selfies heirloom.
               </p>
            </div>
            {/* img  */}

            <div className="  py-3 mx-auto items-center cursor-none" data-aos="fade-down-right">
               <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
                  <div className="w-full row-span-2">
                     <img

                        src={img7}
                        alt="Photo by Claudio Schwarz on Unsplash"

                        className="inset-0 h-full w-full object-cover object-center bg-cover bg-no-repeat rounded opacity-75 hover:opacity-100"
                     />
                  </div>
                  <div className="w-full col-span-2 row-span-2">
                     <img
                        src={img1}
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
                     />
                  </div>
                  <div className="w-full ">
                     <img
                        src={img3}
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
                     />
                  </div>
                  <div className="w-full">
                     <img
                        src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
                     />
                  </div>
                  <div className="w-full col-span-2 row-span-2">
                     <img
                        src={img2}
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
                     />
                  </div>
                  <div className="w-full col-span-2">
                     <img
                        src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
                     />
                  </div>
                  <div className="w-full">
                     <img
                        src={img5}
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
                     />
                  </div>
                  <div className="w-full">
                     <img
                        src={img10}
                        alt="Photo by Claudio Schwarz on Unsplash"
                        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
                     />
                  </div>
               </div>
            </div>

         </div>
      </section>

   );
};

export default Gallery;