import React from "react";
import Hero from "@/components/sections/hero";
import AboutTwo from "@/components/sections/aboutTwo";
import Newsletter from "@/components/sections/newsletter";
import {
  getClientsData,
  getHeroData,
  getPartnerData,
  getProductsData,
} from "@/lib/data";
import HomeClient from "./HomeClients";

const Home = async () => {
  const heroData = await getHeroData();
  const partnerData = await getPartnerData();
  const clientData = await getClientsData();
  const { featuredProducts } = await getProductsData();

  return (
    <>
      <Hero data={heroData} />
      <HomeClient
        partnerData={partnerData}
        clientData={clientData}
        featuredProducts={featuredProducts}
      />
      <AboutTwo />
      <Newsletter />
    </>
  );
};

export default Home;
