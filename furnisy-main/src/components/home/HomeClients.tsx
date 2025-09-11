"use client";

import React, { useState } from "react";
import PartnerSlider from "@/components/sections/partnerSlider";
import FeaturedProducts from "@/components/sections/featuredProducts";
import Title from "@/components/ui/title";
import ClientSlider from "@/components/sections/shopDetails/clientSlider";
import { partnerType } from "@/db/partnerData";
import { clientType } from "@/db/clientData";
import { ProductType } from "@/types/productType";
import { TShingLing } from "@/types/shingLingProductType";

const HomeClient = ({
  partnerData,
  clientData,
  searchShingLing,
}: {
  partnerData: partnerType[];
  clientData: clientType[];
  searchShingLing: TShingLing[];
}) => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  return (
    <>
      <div className="mt-30 container text-center">
        <Title>Наши партнёры</Title>
        <PartnerSlider
          partners={partnerData}
          onSelectPartner={(code) => setSelectedPartner(code)}
        />
      </div>

      <div id="fproducts">
        <FeaturedProducts
          products={searchShingLing}
          selectedPartner={selectedPartner}
        />
      </div>

      <div className="mt-30 container text-center">
        <Title>Наши клиенты</Title>
        <ClientSlider clients={clientData} />
      </div>
    </>
  );
};

export default HomeClient;
