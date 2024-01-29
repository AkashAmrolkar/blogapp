import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';
import { categories } from '../categories';

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
      {
        categories?.map((category, index)=>(
          <SwiperSlide className='px-3 py-8 text-center border swiper-slide-active rounded-xl shadow-md'>
              <div>
                <img src={category.image} />
                <p>{category.name}</p>
              </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
}

export default CategoriesSlider