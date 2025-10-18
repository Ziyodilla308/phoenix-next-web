"use client";

import { TShingLing } from "@/types/shingLingProductType";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

type Props = {
  shingLingData: TShingLing[];
};

const ShingLingClient = ({ shingLingData }: Props) => {
  return (
    <PhotoProvider>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 justify-items-center">
        {shingLingData.map((item: TShingLing) => (
          <div
            key={item.id}
            className="bg-white shadow-sm rounded-lg gap-8 w-full"
          >
            <div className="relative mx-4 -mt-6 h-70 overflow-hidden rounded-xl bg-clip-border group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#caccd1] via-[#caccd1] to-[#caccd1] opacity-90 rounded-full"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <PhotoView src={item.images}>
                  <img
                    src={item.images}
                    alt={item.label}
                    loading="lazy"
                    className="h-full w-full object-contain cursor-pointer"
                  />
                </PhotoView>
              </div>
            </div>

            <div className="p-6">
              <a href={item.navigate} target={"_blank"}>
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
                  {item.label}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                  {item.label}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default ShingLingClient;
