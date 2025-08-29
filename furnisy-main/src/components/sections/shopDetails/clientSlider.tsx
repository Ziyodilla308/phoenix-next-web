// ClientSlider.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@/lib/icon";
import { partnerType } from "@/db/partnerData";
import { clientType } from "@/db/clientData";

interface ClientSliderProps {
  clients: clientType[];
  onSelectClient?: (code: string) => void; // yangi props
  className?: string;
}

export default function ClientSlider({
  clients,
  onSelectClient,
  className,
}: ClientSliderProps) {
  const handleClick = (client: clientType) => {
    if (onSelectClient) onSelectClient(client.id.toString());
  };

  return (
    <div
      className={`container lg:pt-25 lg:pb-25 pt-15 pb-15 relative ${className}`}
    >
      <Swiper
        loop
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".next-el", prevEl: ".prev-el" }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          568: { slidesPerView: 3, spaceBetween: 20 },
          991: { slidesPerView: 5, spaceBetween: 30 },
        }}
        wrapperClass="py-10"
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div
              onClick={() => handleClick(client)}
              className="lg:px-14 px-5 relative w-full h-[60px] lg:h-[80px] cursor-pointer"
            >
              <Image
                src={client.logo}
                alt="client logo"
                fill
                className="object-contain hover:grayscale transition-all duration-500 rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}

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
}
