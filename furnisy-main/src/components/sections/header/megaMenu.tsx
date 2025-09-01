"use client";

import React from "react";
import Link from "next/link";
import { MegamenuType } from "@/db/menuList";
import { cn } from "@/lib/utils";

const MegaMenu = ({
  data,
  isOpen,
}: {
  data: MegamenuType[];
  isOpen: boolean;
}) => {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-full w-full z-50 bg-home-bg-1 shadow-lg rounded-b-lg overflow-hidden flex lg:flex-row flex-col justify-between transition-all duration-500 ease-in-out",
        isOpen
          ? "max-h-[600px] opacity-100 visible translate-y-0"
          : "max-h-0 opacity-0 invisible -translate-y-3",
      )}
    >
      <div className="container mx-auto flex w-full">
        {data.map(({ menus, id }) => (
          <div key={id} className="flex-1">
            {menus.map(({ id, items, title }) => (
              <div key={id} className="px-6 lg:py-7.5 py-3">
                {title && (
                  <b className="text-secondary-foreground font-medium block mb-3 capitalize">
                    {title}
                  </b>
                )}
                <div className="w-full">
                  {items.map(({ id, path, label }) => (
                    <div key={id}>
                      <Link
                        aria-label="nav"
                        href={path}
                        className="dropdown-item text-base text-gray-1-foreground py-1.5 inline-block capitalize hover:text-secondary-foreground transition-all duration-500"
                      >
                        {label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
