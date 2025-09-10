import Image from "next/image";
import React from "react";
import Title from "../ui/title";
import { CheckIcon, LocateIcon } from "lucide-react";
import { Location } from "@/lib/icon";

// 16-я Центральноазиатская Международная выставка "Текстильное оборудование и технологии – CAITME 2025"

const AboutTwo = () => {
  return (
    <section className="lg:pt-25 lg:pb-25 pt-15 pb-15">
      <div className="container">
        {/* FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT SIDE - IMAGE GALLERY */}
          <div className="flex-1">
            {/* Top Large Image */}
            <div className="mb-6">
              <Image
                src={"/images/vistavka.jpg"}
                alt="Top Image"
                width={450}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="mb-6">
              <Image
                src={"/images/vistavka.jpg"}
                alt="Top Image"
                width={450}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            {/* Bottom 2 Images */}
          </div>

          {/* RIGHT SIDE - DESCRIPTION */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <Title className="text-[clamp(1.975rem,1.7423rem+1.9231vw,3rem)] leading-[120%] tracking-[-1.5px]">
              Выставка "CAITME 2025"
            </Title>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 text-green-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-800 lg:text-xl text-lg leading-relaxed">
                  <strong>CAITME 2025</strong> – крупнейшая в Центральной Азии
                  выставка текстильного оборудования и технологий <br />{" "}
                  <strong>Textile Expo Uzbekistan</strong> Осень 2025 – выставка
                  текстильной и швейной промышленности
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 text-green-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-800 lg:text-xl text-lg leading-relaxed">
                  Приглашаем вас на выставку! Мы рады сообщить, что наша
                  компания принимает участие в этом событии. На нашем стенде вы
                  сможете увидеть оборудование в работе и оценить его качество.
                  Для наших гостей предусмотрены специальные скидки!
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-600 text-[28px]">📍</span>
                <span className="text-gray-800 lg:text-xl text-lg leading-relaxed">
                  Ждём вас в павильоне №3, стенд F-30.
                </span>
              </li>
            </ul>
            <Title className="mt-10 text-[30px] text-center leading-[120%] tracking-[-1.5px]">
              Будем рады встрече с вами на выставке!
            </Title>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTwo;
