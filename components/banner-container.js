import Outline from './Shared/Outline';
import Title from './Shared/Title';
import CardBanner from './card-banner';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';
const BannerContainer = () => {
  return (
    <div className='bg-amber-50'>
      <Outline>
        <Title title={'Portfolio Projects'} />
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=''>
          <SwiperSlide>
            <CardBanner
              name='#Planning'
              paragraph='
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.'
              image='https://images.unsplash.com/photo-1603901622056-0a5bee231395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhZnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardBanner
              name='#Architecture'
              paragraph='
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.'
              image='https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardBanner
              name='#Construction'
              paragraph='
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.'
              image='https://images.unsplash.com/photo-1593786267440-550458cc882a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            />
          </SwiperSlide>
          <SwiperSlide>
            <li className='lg:hidden'>
              <ul className='mx-3'>
                <li className='relative'>
                  <div className='absolute bg-gradient-to-b from-transparent to-[#0009] text-white inset-0 p-4 rounded-md h-[200px] w-[200px] text-center text-lg'>
                    View More
                  </div>
                </li>
              </ul>
            </li>
          </SwiperSlide>
        </Swiper>
      </Outline>
    </div>
  );
};

export default BannerContainer;
