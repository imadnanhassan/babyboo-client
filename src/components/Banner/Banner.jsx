import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/img/gallery/cuty baby.jpg'



const Banner = () => {

   AOS.init({
      duration: 2000,
      offset: 100,
      easing: 'ease-in-sine',
      delay: 100,
   });
   return (
      <div className='py-24 container mx-auto ' data-aos="fade-up">
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}

         >

            <SwiperSlide>
               <div className='md:flex mb-5 items-center'>
                  <div>
                     <h2 className='font-Primary py-4 text-3xl font-semibold text-[#1e2d5f]'>Clothes made of cottonfabric</h2>
                     <p className='py-5 font-normal font-Primary text-lg text-slate-500 pr-4'>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical <br />  gentrify,  subway tile poke farm-to-table.   Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                     <button className='px-6 py-3 transform transition-all duration-200 bg-[#ff8441] text-white rounded-md hover:bg-[#1e2d5f] '>Shop Now</button>
                  </div>
                  <div>
                     <img src="https://wpbingosite.com/wordpress/babybo/wp-content/uploads/2022/11/slider-2.jpg" alt="" />
                  </div>
               </div>

            </SwiperSlide>
            <SwiperSlide>
               <div className='md:flex items-center'>
                  <div>
                     <h2 className='font-Primary py-4 text-3xl font-semibold text-[#1e2d5f]'>Clothes made of cottonfabric</h2>
                     <p className='py-5 font-normal font-Primary text-lg text-slate-500 pr-4'>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical <br />  gentrify,  subway tile poke farm-to-table.   Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                     <button className='px-6 py-3 transform transition-all duration-200 bg-[#ff8441] text-white rounded-md hover:bg-[#1e2d5f] '>Shop Now</button>
                  </div>
                  <div>
                     <img src="https://wpbingosite.com/wordpress/babybo/wp-content/uploads/2022/11/slider-2.jpg" alt="" />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='md:flex  items-center'>
                  <div>
                     <h2 className='font-Primary py-4 text-3xl font-semibold text-[#1e2d5f]'>Clothes made of cottonfabric</h2>
                     <p className='py-5 font-normal font-Primary text-lg text-slate-500 pr-4'>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical <br />  gentrify,  subway tile poke farm-to-table.   Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                     <button className='px-6 py-3 transform transition-all duration-200 bg-[#ff8441] text-white rounded-md hover:bg-[#1e2d5f] '>Shop Now</button>
                  </div>
                  <div>
                     <img src="https://wpbingosite.com/wordpress/babybo/wp-content/uploads/2022/11/slider-2.jpg" alt="" />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='md:flex  items-center'>
                  <div className='mb-10 py-3'>
                     <h2 className='font-Primary py-4 text-3xl font-semibold text-[#1e2d5f]'>Clothes made of cottonfabric</h2>
                     <p className='py-5 font-normal font-Primary text-lg text-slate-500 pr-4'>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical <br />  gentrify,  subway tile poke farm-to-table.   Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                     <button className='px-6 py-3 transform transition-all duration-200 bg-[#ff8441] text-white rounded-md hover:bg-[#1e2d5f] '>Shop Now</button>
                  </div>
                  <div>
                     <img src="https://wpbingosite.com/wordpress/babybo/wp-content/uploads/2022/11/slider-2.jpg" alt="" />
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;