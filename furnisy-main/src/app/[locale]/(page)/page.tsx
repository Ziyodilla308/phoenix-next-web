import React from "react";
import FeaturedProducts from "@/components/sections/featuredProducts";
import HomeCategory from "@/components/sections/homeCategory";
import Newsletter from "@/components/sections/newsletter";
import Hero from "@/components/sections/hero";
import AboutTwo from "@/components/sections/aboutTwo";
import {
  getBlogData,
  getCategoriesData,
  getClientsData,
  getHeroData,
  getPartnerData,
} from "@/lib/data";
import PartnerSlider from "@/components/sections/partnerSlider";
import Title from "@/components/ui/title";
import ClientSlider from "@/components/sections/shopDetails/clientSlider";

const Home = async () => {
  const categoriesData = await getCategoriesData();
  const blogData = await getBlogData();
  const heroData = await getHeroData();
  const partnerData = await getPartnerData();
  const clientData = await getClientsData();

  return (
    <>
      <Hero data={heroData} />
      <div className="mt-30 container text-center">
        <Title>Our Partners</Title>
        <PartnerSlider partners={partnerData} />
      </div>
      {/*<HomeCategory categories={categoriesData} />*/}
      <div id="fproducts">
        <FeaturedProducts />
      </div>
      <div className="mt-30 container text-center">
        <Title>Our Cliens</Title>
        <ClientSlider clients={clientData} />
      </div>
      <AboutTwo />
      {/*<TopCollections data={topCollections} />*/}
      {/*<AdsSlider data={ads} />*/}
      {/*<BlogSlider blogs={blogData} />*/}
      {/*<TestimonialSlider testimonials={testimonialData} />*/}
      <Newsletter />
      {/*<InstagramGallery />*/}
    </>
  );
};

export default Home;
