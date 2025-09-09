import React from "react";
import Hero from "@/components/sections/hero";
import AboutTwo from "@/components/sections/aboutTwo";
import Newsletter from "@/components/sections/newsletter";
import {
  getClientsData,
  getHeroData,
  getPartnerData,
  getShingLing,
} from "@/lib/data";
import HomeClient from "./HomeClients";

const Home = async () => {
  const heroData = await getHeroData();
  const partnerData = await getPartnerData();
  const clientData = await getClientsData();
  const shingLingData = await getShingLing();

  return (
    <>
      <Hero data={heroData} />
      <HomeClient
        partnerData={partnerData}
        clientData={clientData}
        searchShingLing={shingLingData}
      />
      <AboutTwo />
      <Newsletter />
    </>
  );
};

export default Home;
