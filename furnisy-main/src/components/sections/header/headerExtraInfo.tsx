"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LangSwitcher } from "@/components/LangSwitcher";
import type { Locale } from "@/i18n/config";

type CountriesList = {
  flag: string;
  country: string;
  code: string;
  symbol: string;
  language: string;
};

export type Props = {
  locale: Locale;
};

const countriesList: CountriesList[] = [
  {
    flag: "/images/flag/us.png",
    country: "United States",
    code: "USD",
    language: "EN",
    symbol: "$",
  },
  {
    flag: "/images/flag/uk.png",
    country: "United Kingdom",
    code: "GBP",
    language: "EN",
    symbol: "£",
  },
  {
    flag: "/images/flag/russia.png",
    country: "Russia",
    code: "RUB",
    language: "RU",
    symbol: "₽",
  },
  {
    flag: "/images/flag/turkey.png",
    country: "Turkey",
    code: "TRY",
    language: "TR",
    symbol: "₺",
  },
];

const HeaderExtraInfo = ({ locale }: Props) => {
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "uz";
  }, []);

  const handleLangChange = (value: string) => {
    localStorage.setItem("lang", value);
  };

  return (
    <div className="flex lg:flex-row flex-col lg:items-center gap-5 mt-5 lg:mt-0">
      {/* Currency Select */}
      <Select defaultValue={"USD"}>
        <SelectTrigger
          aria-label="currency"
          className="w-28 p-0 h-auto border-none bg-transparent text-gray-1-foreground font-normal capitalize flex"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="border-none bg-background">
          {countriesList.map(({ code, flag, symbol }) => (
            <SelectItem
              key={code}
              value={code}
              className="text-lg focus:bg-home-bg-1 focus:text-inherit pl-2 cursor-pointer capitalize"
            >
              <Image
                src={flag}
                width={24}
                height={16}
                alt={code}
                className="inline -inset -mt-1 mr-2"
              />
              <span>{code}</span>
              <span className="ml-1">{symbol}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <LangSwitcher current={locale} />
    </div>
  );
};

export default HeaderExtraInfo;
