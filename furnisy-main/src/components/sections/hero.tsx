"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "@/lib/icon";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { HeroDataType } from "@/db/heroData";
import { useTranslation } from "react-i18next";

const Hero = ({ data }: { data: HeroDataType[] }) => {
  const { t } = useTranslation();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  }, []);

  return (
    <section>
      <Swiper
        grabCursor
        loop
        speed={1000}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
          bulletClass: "hero-pagination-bullet",
          bulletActiveClass: "hero-pagination-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => {
          videoRefs.current.forEach((video) => {
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          });
          const activeVideo = videoRefs.current[swiper.realIndex];
          if (activeVideo) {
            activeVideo.play().catch(() => {});
          }
        }}
      >
        {data.map(({ description, id, thumbnail, title, image }, idx) => (
          <SwiperSlide key={id} className="relative bg-black">
            {({ isActive }) => (
              <div className="relative w-full h-full">
                {/* Video background */}
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={thumbnail}
                  muted
                  playsInline
                  loop
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Black overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-[1]" />

                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(255,255,255,0)_50%] to-[rgba(255,255,255,0.7)_100%] z-[2]" />

                {/* Content */}
                <div className="relative z-[3] container lg:pt-[190px] sm:pt-[140px] pt-30 xl:pb-[193px] lg:pb-[170px] pb-[150px]">
                  {/* Flex container with text left and img right */}
                  <motion.div
                    initial={{ y: 90, opacity: 0 }}
                    animate={
                      isActive ? { y: 0, opacity: 1 } : { y: 90, opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: isActive ? 0.5 : 0,
                    }}
                    className="flex items-start justify-between max-w-full gap-8"
                  >
                    {/* Text */}
                    <div className="flex flex-col gap-4">
                      <h1 className="text-[clamp(2.25rem,1.3269rem+4.1026vw,6.25rem)] leading-[115%] text-white font-light">
                        {title}
                      </h1>
                      <p className="text-[22px] text-white max-w-[570px]">
                        {description}
                      </p>
                      {/*<Button*/}
                      {/*  asChild*/}
                      {/*  size={"medium"}*/}
                      {/*  className="mt-4 max-w-[188px] lg:leading-[170%] leading-[170%] group"*/}
                      {/*>*/}
                      {/*  <Link href={"/shop"}>*/}
                      {/*    Shop Now{" "}*/}
                      {/*    <ArrowUp className="group-hover:rotate-45 transition-transform duration-500" />*/}
                      {/*  </Link>*/}
                      {/*</Button>*/}
                    </div>

                    {/* Image on the right */}
                    <div className="flex w-full justify-end">
                      <img
                        src={image}
                        alt="Hero side"
                        className="w-[1000px] h-[300px] object-contain hidden lg:block"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-x-2.5"></div>
      </Swiper>
    </section>
  );
};

export default Hero;
