"use client";
import Image from "next/image";
import React from "react";


import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  product_image_url: string;
  product_title: string;
}

const ProdImage = ({ product_image_url, product_title }: Props) => {

  return (
    <>
        <div className="productDetails-image-mainImage">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={"auto"}
            id="my-test-gallery"
            className="pswp-gallery"
            pagination={{
              dynamicBullets: true,
            }}
          >
            <SwiperSlide>
              <a
                href={product_image_url}
                data-pswp-width={1500}
                data-pswp-height={1500}
                key={`my-test-gallery-first`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={product_image_url}
                  width={300}
                  height={300}
                  alt={product_title}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  );
};

export default ProdImage;
