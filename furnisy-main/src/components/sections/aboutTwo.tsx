import Image from "next/image";
import React from "react";
import Title from "../ui/title";
import { CheckIcon } from "lucide-react";

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
                src={"/images/happy/pmt_happy_1.jpg"}
                alt="Top Image"
                width={350}
                height={300}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            {/* Bottom 2 Images */}
            <div className="grid grid-cols-2 gap-6">
              <Image
                src={"/images/happy/pmt_happy_2.jpg"}
                alt="Bottom Left"
                width={350}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
              <Image
                src={"/images/happy/pmt_happy_2.jpg"}
                alt="Bottom Right"
                width={350}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT SIDE - DESCRIPTION */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <Title className="text-[clamp(1.875rem,1.4423rem+1.9231vw,3rem)] leading-[120%] tracking-[-1.5px]">
              Why Choose Us
            </Title>

            <p className="text-gray-500 lg:text-lg text-base max-w-[550px]">
              We don’t just sell machines — we provide solutions that empower
              your creativity and grow your business. Here’s why thousands of
              professionals trust us:
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 text-green-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-800 lg:text-xl text-lg leading-relaxed">
                  <strong>Effortless selection process</strong> – explore a wide
                  range of industrial sewing machines with clear comparisons so
                  you can quickly find the model that perfectly fits your needs.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 text-green-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-800 lg:text-xl text-lg leading-relaxed">
                  <strong>Access to trusted global brands</strong> – we work
                  only with manufacturers that are recognized worldwide for
                  durability, precision, and innovative technology.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 text-green-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-800 lg:text-xl text-lg leading-relaxed">
                  <strong>Secure and hassle-free experience</strong> – enjoy
                  transparent pricing, flexible payment methods, and dedicated
                  support that ensures peace of mind from purchase to setup.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTwo;
