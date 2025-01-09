import "./Slider.css";
import image1 from '../../assets/225.jpg';
import image2 from '../../assets/226.jpg';
import image3 from '../../assets/227.jpg';
import image4 from '../../assets/228.jpg';
import image5 from '../../assets/229.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider() {
  const data = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
  ];

  return (
    <Swiper
      slidesPerView={1}
      navigation
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} alt="slide" className="slide-item" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
