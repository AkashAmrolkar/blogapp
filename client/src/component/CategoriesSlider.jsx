import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';

const CategoriesSlider = () => {
  return (
    <div className=' p-5 rounded-xl bg-[#fff9f3] relative'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation={{ clickable: true }}
    //pagination={{ clickable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}

    >
        <SwiperSlide className='px-3 py-8 text-center border swiper-slide-active rounded-xl shadow-md'><NavLink to='#' className='w-full h-full block'>Slide 1</NavLink></SwiperSlide>
        <SwiperSlide className='px-3 py-8 text-center border swiper-slide-active rounded-xl shadow-md'>Slide 2</SwiperSlide>
        <SwiperSlide className='px-3 py-8 text-center border swiper-slide-active rounded-xl shadow-md'>Slide 3</SwiperSlide>
        <SwiperSlide className='px-3 py-8 text-center border swiper-slide-active rounded-xl shadow-md'>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default CategoriesSlider