import React, { ReactNode } from "react";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header/header";
import MobileNavbar from "@/components/sections/header/mobileNavbar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default HomeLayout;
