"use client";

import React, { useState } from "react";
import PartnerSlider from "@/components/sections/partnerSlider";
import FeaturedProducts from "@/components/sections/featuredProducts";
import Title from "@/components/ui/title";
import ClientSlider from "@/components/sections/shopDetails/clientSlider";
import { partnerType } from "@/db/partnerData";
import { clientType } from "@/db/clientData";
import { ProductType } from "@/types/productType";

const HomeClient = ({
  partnerData,
  clientData,
  featuredProducts, // 👈 qo‘shildi
}: {
  partnerData: partnerType[];
  clientData: clientType[];
  featuredProducts: ProductType[]; // 👈 typing qo‘shildi
}) => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  return (
    <>
      <div className="mt-30 container text-center">
        <Title>Our Partners</Title>
        <PartnerSlider
          partners={partnerData}
          onSelectPartner={(code) => setSelectedPartner(code)}
        />
      </div>

      <div id="fproducts">
        <FeaturedProducts
          products={featuredProducts} // 👈 propni to‘g‘ri uzatyapmiz
          selectedPartner={selectedPartner}
        />
      </div>

      <div className="mt-30 container text-center">
        <Title>Our Clients</Title>
        <ClientSlider clients={clientData} />
      </div>
    </>
  );
};

export default HomeClient;
