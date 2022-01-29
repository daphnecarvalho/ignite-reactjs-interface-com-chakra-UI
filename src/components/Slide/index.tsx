import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SlideItem } from "./SlideItem";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SlideProps {
  continents: {
    id: string;
    schema: string;
    title: string;
    subtitle: string;
  }[]
}

export function Slide({ continents }: SlideProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      style={{width: '100%', flex: '1', height: '100%'}}
    >
      {continents.map((continent) => (
        <SwiperSlide key={continent.id}>
          <SlideItem
            schema={continent.schema}
            title={continent.title}
            subtitle={continent.subtitle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}