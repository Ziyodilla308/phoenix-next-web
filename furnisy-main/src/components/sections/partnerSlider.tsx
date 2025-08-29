"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@/lib/icon";
import { partnerType } from "@/db/partnerData";

const PartnerSlider = ({
  partners,
  className,
}: {
  className?: string;
  partners: partnerType[];
}) => {
  return (
    <div
      className={cn(
        "container lg:pt-25 lg:pb-25 pt-15 pb-15 relative",
        className,
      )}
    >
      <Swiper
        loop
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000, // 3 soniya
          disableOnInteraction: false, // foydalanuvchi interaksiya qilsa ham davom etadi
        }}
        navigation={{
          nextEl: ".next-el",
          prevEl: ".prev-el",
        }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          568: { slidesPerView: 3, spaceBetween: 20 },
          991: { slidesPerView: 5, spaceBetween: 30 },
        }}
        wrapperClass="py-10"
      >
        {partners.map(({ id, logo }) => (
          <SwiperSlide key={id}>
            <a href="#fproducts">
              <div className="lg:px-14 px-5 relative w-full h-[60px] lg:h-[80px]">
                <Image
                  src={logo}
                  alt="partner logo"
                  fill
                  className="object-contain hover:grayscale transition-all duration-500 rounded-xl"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 w-full flex justify-between items-center pointer-events-none">
          <div className="prev-el w-10 h-10 rounded-full bg-home-bg-1 drop-shadow-3xl cursor-pointer text-gray-1-foreground flex justify-center items-center hover:text-white hover:bg-primary transition-all duration-500 pointer-events-auto">
            <ArrowLeft className="size-4" />
          </div>
          <div className="next-el w-10 h-10 rounded-full bg-home-bg-1 drop-shadow-3xl cursor-pointer text-gray-1-foreground flex justify-center items-center hover:text-white hover:bg-primary transition-all duration-500 pointer-events-auto">
            <ArrowRight className="size-4" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
