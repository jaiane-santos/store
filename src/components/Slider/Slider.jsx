import "./Slider.css";
import image1 from '../../assets/219.jpg'
import image2 from '../../assets/9714920.jpg'
import image3 from '../../assets/4183742.jpg'
import image4 from '../../assets/9744418.jpg'
import image5 from '../../assets/9909575.jpg'
import image6 from '../../assets/10291453.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
    const data = [
        {id: 1, image : image1},
        {id: 2, image: image2},
        {id: 3, image: image3},
        {id: 4, image: image4},
        {id: 5, image: image5},
        {id: 6, image: image6}
    ]

  return (
      <Swiper
      slidesPerView={1}
      pagination={{clickable: true}}
      navigation
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
