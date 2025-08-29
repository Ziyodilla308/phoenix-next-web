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
import { getProductsData } from "@/lib/data";

const FeaturedProducts = async () => {
  const { featuredProducts }: { featuredProducts: ProductType[] } =
    await getProductsData();

  return (
    <section className="bg-home-bg-1 lg:pt-25 lg:pb-25 pt-15 pb-15">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <Title>Featured Products</Title>
          <Link
            href={"/shop"}
            className="text-gray-1-foreground lg:text-xl text-lg border-b border-b-primary hover:border-b-primary hover:text-secondary-foreground duration-500"
          >
            View All
          </Link>
        </div>
        <p className="text-gray-1-foreground mt-3 leading-[166.667%]">
          Explore the best of Furnisy Featured Collection.
        </p>

        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10">
          {featuredProducts.map((prd) => (
            <Card key={prd.id}>
              <CardHeader>
                <CardImg src={prd.thumbnail} height={600} width={340} />
                <CardLabel isLabel={prd.name ? prd.name : false}>
                  {prd.name}
                </CardLabel>
                <CardIcons product={prd} />
              </CardHeader>
              <CardFooter>
                <CardTitle path="/product-details">{prd.name}</CardTitle>
                <CardLabel>{prd.description}</CardLabel>
                <CardPriceEnhanced price={prd.price} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
