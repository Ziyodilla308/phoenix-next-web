import MyPageHeader from "@/components/sections/myPageHeader";
import { getShingLing } from "@/lib/data";
import { TShingLing } from "@/types/shingLingProductType";

const ShingLing = async () => {
  const shingLingData = await getShingLing();

  return (
    <div>
      <MyPageHeader
        title="Shing Ling"
        description="Har qanday to'lovlar va pul o'tkazmalarini onlayn amalga oshirish uchun kartangizni Davr Mobile ilovasiga bog'lashingiz mumkin"
        imageSrc="/images/page-header/ironing-equipment-img.png"
        imageAlt="Ironing Equipment"
      />

      <div className="container mx-auto px-6 mt-15 gap-x-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 justify-items-center">
          {/*{shingLingData &&*/}
          {/*  shingLingData.map((item: TShingLing) => (*/}
          {/*    // image*/}
          {/*    <div*/}
          {/*      key={item.id}*/}
          {/*      className="h-[16em] w-full border border-black rounded-[1.5em] bg-gradient-to-br from-white to-[rgba(0,0,0,0.1)] text-black font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em] backdrop-blur-[12px]"*/}
          {/*    >*/}
          {/*      <div>*/}
          {/*        <h1 className="text-[20px] font-medium">{item.label}</h1>*/}
          {/*        <p className="text-[0.85em]">{item.label}</p>*/}
          {/*      </div>*/}

          {/*      <a*/}
          {/*        href={item.navigate}*/}
          {/*        target="_blank"*/}
          {/*        className="h-fit w-fit px-[1em] py-[0.25em] border border-black text-black rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:bg-black hover:text-white duration-200"*/}
          {/*      >*/}
          {/*        <p>View details</p>*/}
          {/*        <svg*/}
          {/*          className="w-6 h-6 group-hover:translate-x-[10%] duration-300"*/}
          {/*          stroke="currentColor"*/}
          {/*          strokeWidth="1"*/}
          {/*          viewBox="0 0 24 24"*/}
          {/*          fill="currentColor"*/}
          {/*          xmlns="http://www.w3.org/2000/svg"*/}
          {/*        >*/}
          {/*          <path*/}
          {/*            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"*/}
          {/*            strokeLinejoin="round"*/}
          {/*            strokeLinecap="round"*/}
          {/*          ></path>*/}
          {/*        </svg>*/}
          {/*      </a>*/}
          {/*    </div>*/}
          {/*  ))}*/}

          {shingLingData &&
            shingLingData.map((item: TShingLing) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-lg gap-8 w-full"
              >
                <div className="relative mx-4 -mt-6 h-70 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={item.images}
                      alt="no photo"
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
                    {item.label}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShingLing;
