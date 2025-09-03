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

      <div className="container mx-auto px-6 mt-10 gap-x-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          {shingLingData &&
            shingLingData.map((item: TShingLing) => (
              <div
                key={item.id}
                className="h-[16em] w-full border border-black rounded-[1.5em] bg-gradient-to-br from-white to-[rgba(0,0,0,0.1)] text-black font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em] backdrop-blur-[12px]"
              >
                <div>
                  <h1 className="text-[20px] font-medium">{item.label}</h1>
                  <p className="text-[0.85em]">{item.label}</p>
                </div>

                <a
                  href={item.navigate}
                  target="_blank"
                  className="h-fit w-fit px-[1em] py-[0.25em] border border-black text-black rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:bg-black hover:text-white duration-200"
                >
                  <p>View details</p>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShingLing;
