"use client";

import React, { useEffect } from "react";
import { LangSwitcher } from "@/components/LangSwitcher";
import type { Locale } from "@/i18n/config";

export type Props = {
  locale: Locale;
};

const HeaderExtraInfo = ({ locale }: Props) => {
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "uz";
  }, []);

  const handleLangChange = (value: string) => {
    localStorage.setItem("lang", value);
  };

  return (
    <div className="flex lg:flex-row flex-col lg:items-center gap-5 mt-5 lg:mt-0">
      <LangSwitcher current={locale} />
    </div>
  );
};

export default HeaderExtraInfo;
