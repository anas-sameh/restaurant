import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Autoplay, Pagination } from 'swiper/modules';


import './Swiper.css';      

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}


export default function MySwiper({ data,  configKey = 'default' , timeConfig = 'default' }) {
  const chunks = chunkArray(data, 1);
  const getConfig = (key) => {  
    const configs = {
      default: { slidesPerView: 1 },
      default3: { slidesPerView: 3 },
      default5: { slidesPerView: 5 },
    };
    return configs[key] || configs.default;
  };
  const { slidesPerView } = getConfig(configKey);


  const getTimeConfig = (config) => {
    const times = {
        default: { delay: 3000 },
        fast: { delay: 1000 },
        slow: { delay: 5000 },
    };
    return times[config] || times.default;
};
const { delay } = getTimeConfig(timeConfig);



  

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={1}
      slidesPerView={slidesPerView}
      loop={true}
      watchSlidesProgress={true}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: slidesPerView,
          spaceBetween: 1
        }
      }}
    >
        {chunks.map((group, i) => (
        <SwiperSlide key={i} style={{ width: '100%' }}>
          <div>
            {[0, 1].map(row => (
              <div key={row}>
                {group.slice(row * 3, row * 3 + 3).map((Component, j) => (
                  <div key={j}>{Component}</div>
                ))}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}