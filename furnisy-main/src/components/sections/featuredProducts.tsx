"use client";

import React from "react";
import Card, {
  CardFooter,
  CardHeader,
  CardImg,
  CardTitle,
  CardPriceEnhanced,
  CardLabel,
  CardIcons,
} from "@/components/ui/card";
import Title from "@/components/ui/title";
import Link from "next/link";
import { ProductType } from "@/types/productType";

const FeaturedProducts = ({
  products,
  selectedPartner,
}: {
  products: ProductType[];
  selectedPartner: string | null;
}) => {
  const filteredProducts = selectedPartner
    ? products.filter((prd) => prd.types === selectedPartner)
    : products;

  return (
    <section className="bg-home-bg-1 lg:pt-25 lg:pb-25 pt-15 pb-15">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <Title>Featured Products</Title>
        </div>
        <p className="text-gray-1-foreground mt-3 leading-[166.667%]">
          Explore the best of Furnisy Featured Collection.
        </p>

        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((prd) => (
              <Card key={prd.id}>
                <CardHeader>
                  <CardImg src={prd.thumbnail} height={600} width={340} />
                  <CardLabel isLabel={!!prd.name}>{prd.name}</CardLabel>
                  <CardIcons product={prd} />
                </CardHeader>
                <CardFooter>
                  <CardTitle path="/product-details">{prd.name}</CardTitle>
                  <CardLabel>{prd.description}</CardLabel>
                  {/*<CardPriceEnhanced price={prd.price} />*/}
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No products found for this partner.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
