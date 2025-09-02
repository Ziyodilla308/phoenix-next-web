import MyPageHeader from "@/components/sections/myPageHeader";
import Card from "@/components/ui/card";
import ShopSidebarMenu from "@/components/sections/pmtShop/ShopSidebarMenu";
import { getAutomatedDesign } from "@/lib/data";
import { TSearchBarList } from "@/types/shopSidebarType";

const AutomatedDesign = async () => {
  const automatedData = await getAutomatedDesign();

  const filters = automatedData.map((item: TSearchBarList) => item.label);
  return (
    <div>
      <MyPageHeader
        title="Automated Design"
        description="Har qanday to'lovlar va pul o'tkazmalarini onlayn amalga oshirish uchun kartangizni Davr Mobile ilovasiga bog'lashingiz mumkin"
        imageSrc="/images/page-header/ironing-equipment-img.png"
        imageAlt="Ironing Equipment"
      />

      {/* Main container */}
      <div className="container mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <ShopSidebarMenu filters={filters} />
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Products will go here
                </h2>
                <p className="text-muted-foreground">
                  Bu joyda mahsulotlar ro‘yxati chiqadi.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedDesign;
