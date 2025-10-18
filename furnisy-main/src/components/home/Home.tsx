import React from "react";
import Hero from "@/components/sections/hero";
import AboutTwo from "@/components/sections/aboutTwo";
import Newsletter from "@/components/sections/newsletter";
import {
  getBlogData,
  getClientsData,
  getHeroData,
  getPartnerData,
  getShingLing,
} from "@/lib/data";
import HomeClient from "./HomeClients";
import BlogSlider from "@/components/sections/blogs/blogSlider";

const Home = async () => {
  const heroData = await getHeroData();
  const partnerData = await getPartnerData();
  const clientData = await getClientsData();
  const shingLingData = await getShingLing();
  const blogSliderData = await getBlogData();

  return (
    <>
      <Hero data={heroData} />
      <HomeClient
        partnerData={partnerData}
        clientData={clientData}
        searchShingLing={shingLingData}
      />
      {/*<AboutTwo />*/}
      <BlogSlider blogs={blogSliderData} />
      <Newsletter />
    </>
  );
};

export default Home;
