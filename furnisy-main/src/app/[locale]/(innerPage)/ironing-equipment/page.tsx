import MyPageHeader from "@/components/sections/myPageHeader";
import Card from "@/components/ui/card";
import ShopSidebarMenu from "@/components/sections/pmtShop/ShopSidebarMenu";
import { getIroningEquipment } from "@/lib/data";
import { TSearchBarList } from "@/types/shopSidebarType";

const IroningEquipment = async () => {
  const ironingData = await getIroningEquipment();

  const filters = ironingData.map((item: TSearchBarList) => item.label);

  return (
    <div>
      <MyPageHeader
        title="Ironing Equipment Accessories"
        description="Ironing Equipment Accessories"
        imageSrc="/images/page-header/ironing-equipment-img.png"
        imageAlt="Ironing Equipment"
      />

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
                <p className="text-muted-foreground">В процессе</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IroningEquipment;
