import React from "react";
import { Metadata } from "next";
import BlogSlider from "@/components/sections/blogs/blogSlider";
import FeaturedProducts from "@/components/sections/featuredProducts";
import HomeCategory from "@/components/sections/homeCategory";
import Newsletter from "@/components/sections/newsletter";
import Hero from "@/components/sections/hero";
import AboutTwo from "@/components/sections/aboutTwo";
import { getBlogData, getCategoriesData, getHeroData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our furniture store.",
};

const Home = async () => {
  const categoriesData = await getCategoriesData();
  const blogData = await getBlogData();
  const heroData = await getHeroData();

  return (
    <>
      <Hero data={heroData} />
      <HomeCategory categories={categoriesData} />
      {/*<FeaturedProducts />*/}
      <AboutTwo />
      {/*<TopCollections data={topCollections} />*/}
      {/*<AdsSlider data={ads} />*/}
      <BlogSlider blogs={blogData} />
      {/*<TestimonialSlider testimonials={testimonialData} />*/}
      <Newsletter />
      {/*<InstagramGallery />*/}
    </>
  );
};

export default Home;
