"use client";

import React from "react";
import Title from "@/components/ui/title";

import { TShingLing } from "@/types/shingLingProductType";
import ShingLingClient from "@/components/sections/shingingClient";
import Card, { CardTitle } from "@/components/ui/card";

const FeaturedProducts = ({
  products,
  selectedPartner,
}: {
  products: TShingLing[];
  selectedPartner: string | null;
}) => {
  const filteredProducts = selectedPartner
    ? products.filter((prd) => prd.types === selectedPartner)
    : products;

  return (
    <section className="bg-home-bg-1 lg:pt-25 lg:pb-25 pt-15 pb-15">
      <div className="container">
        <div className="w-full">
          {filteredProducts?.length > 0 ? (
            <ShingLingClient shingLingData={filteredProducts} />
          ) : (
            <Card className="w-full flex items-center justify-center">
              <CardTitle className="text-[30px]">Ish jarayonida</CardTitle>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
