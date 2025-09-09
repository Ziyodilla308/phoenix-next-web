import MyPageHeader from "@/components/sections/myPageHeader";
import { getShingLing } from "@/lib/data";
import ShingLingClient from "@/components/sections/shingingClient";

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
        <ShingLingClient shingLingData={shingLingData} />
      </div>
    </div>
  );
};

export default ShingLing;
