import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopHeader from "./topHeader";
import HeaderExtraInfo from "./headerExtraInfo";
import Navbar from "./navbar";
import { getMenuData, getProductsData } from "@/lib/data";
import ShopingCartSidebar from "./shopingCartSidebar";
import { User } from "@/lib/icon";
import StickyHeader from "./stickyHeader";
import SearchPopup from "./searchPopup";
import { ProductType } from "@/types/productType";
import type { Locale } from "@/i18n/config";

export type Props = {
  locale: Locale;
};

const Header = async ({ locale }: Props) => {
  const menuList = await getMenuData();
  const { featuredProducts }: { featuredProducts: ProductType[] } =
    await getProductsData();
  return (
    <StickyHeader topHeaderContent={<TopHeader />}>
      <div className="lg:h-25 h-16 bg-home-bg-1 [.header-pinned_&]:shadow-md">
        <div className="container flex justify-between items-center h-full relative">
          <Link href={"/"} className="shrink-0">
            <Image
              width={190}
              height={100}
              src="/images/logo/logo_no_bg.png"
              alt="logo"
              priority
              style={{ height: "auto", width: "auto" }}
            />
          </Link>
          <div className="w-full">
            <Navbar locale={locale} data={menuList} />
          </div>

          {/*<div className="flex items-center justify-end gap-5 w-full">*/}
          {/*  <SearchPopup data={featuredProducts} />*/}
          {/* */}
          {/*  /!*<Link*!/*/}
          {/*  /!*  aria-label="user"*!/*/}
          {/*  /!*  href={"/login"}*!/*/}
          {/*  /!*  className="text-gray-1-foreground cursor-pointer lg:block hidden"*!/*/}
          {/*  /!*>*!/*/}
          {/*  /!*  <User />*!/*/}
          {/*  /!*</Link>*!/*/}
          {/*  /!*<ShopingCartSidebar />*!/*/}
          {/*</div>*/}
        </div>
      </div>
    </StickyHeader>
  );
};

export default Header;
