"use client";

import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlidehow = ({ images, title, className }: Props) => {

  return (
    <div className={className}>
      <Swiper
        style={
          {
            width: '100vw',
            height: '500px'
          }
        }
        pagination
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Navigation, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={500}
              src={`/products/${image}`}
              alt={title}
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};
