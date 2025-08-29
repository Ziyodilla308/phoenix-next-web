import React from "react";
import Link from "next/link";
import { MegamenuType } from "@/db/menuList";
import { cn } from "@/lib/utils";
import { getProductsData } from "@/lib/data";
import { ProductType } from "@/types/productType";

const MegaMenu = async ({ data }: { data: MegamenuType[] }) => {
  const { featuredProducts }: { featuredProducts: ProductType[] } =
    await getProductsData();

  return (
    <div className="absolute z-50 left-0 bg-home-bg-1 flex lg:flex-row flex-col justify-between w-full transition-all duration-500 lg:h-0 h-auto overflow-hidden lg:group-hover:h-[400px] shadow-lg rounded-b-lg">
      {data.map(({ menus, id }) => {
        return (
          <div key={id}>
            {menus.map(({ id, items, title }) => {
              return (
                <div key={id} className="px-6 lg:py-7.5 py-3">
                  <b className="text-secondary-foreground font-medium block mb-3 capitalize">
                    {title}
                  </b>
                  <div className="w-full">
                    {items.map(({ id, path, label }) => {
                      return (
                        <div key={id}>
                          <Link
                            aria-label="nav"
                            href={path}
                            className={cn(
                              "dropdown-item text-base text-gray-1-foreground py-1.5 inline-block capitalize hover:text-secondary-foreground transition-all duration-500",
                            )}
                          >
                            {label}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MegaMenu;
