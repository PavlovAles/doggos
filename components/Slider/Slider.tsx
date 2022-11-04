import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import style from './Slider.module.scss';
import DoggoCard from '../DoggoCard/DoggoCard';
import { TRandomDoggo } from '../../types/doggo';

interface SliderProps {
  doggos: TRandomDoggo[];
}

const Slider: FC<SliderProps> = ({ doggos }) => (
  <div className={style.container}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={style.mySwiper}
      >
        {doggos.map(item => (
          <SwiperSlide key={item.id} className={style.slide}>
            <DoggoCard doggo={item} />
          </SwiperSlide>
        ))}
      </Swiper>
  </div>
)

export default Slider;
