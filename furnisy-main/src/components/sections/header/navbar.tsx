"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./mobileMenu";
import MegaMenu from "./megaMenu";
import { menuType } from "@/db/menuList";
import type { Locale } from "@/i18n/config";

const Navbar = ({ locale, data }: { locale: Locale; data: menuType[] }) => {
  const [openMenuId, setOpenMenuId] = useState<string | number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentMegaMenu = data.find(
    (item) => item.id === openMenuId && item.megaMenu,
  )?.megaMenu;

  // Body click -> megaMenu yopilishi
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    }

    if (openMenuId) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenuId]);

  return (
    <>
      {/* Mobile menu */}
      <MobileMenu locale={locale} data={data} />

      {/* Desktop menu */}
      <nav className="relative lg:block hidden" ref={menuRef}>
        <ul className="flex justify-end gap-10">
          {data.map((item) => {
            const isOpen = openMenuId === item.id;
            const hasDropdown = !!item.dropdownList;
            const hasMegaMenu = !!item.megaMenu;

            return (
              <li key={item.id} className="relative">
                {hasDropdown || hasMegaMenu ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(isOpen ? null : item.id);
                    }}
                    className="py-5 text-gray-1-foreground flex items-center gap-1 capitalize hover:text-secondary-foreground transition-all duration-500"
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className="py-5 text-gray-1-foreground flex items-center gap-1 capitalize hover:text-secondary-foreground transition-all duration-500"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {hasDropdown && isOpen && (
                  <ul className="absolute z-50 bg-home-bg-1 min-w-44 px-6 py-7.5 shadow-3xl grid gap-x-10 gap-y-2 rounded-b-lg transition-all duration-500">
                    {item.dropdownList!.map((dropItem) => (
                      <li key={dropItem.id}>
                        <Link
                          href={dropItem.path}
                          className="inline-block text-gray-1-foreground capitalize hover:text-secondary-foreground transition-all duration-500"
                        >
                          {dropItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mega menu alohida chiqadi */}
        {currentMegaMenu && (
          <MegaMenu data={currentMegaMenu} isOpen={!!currentMegaMenu} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
