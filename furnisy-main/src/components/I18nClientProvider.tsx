"use client";

import { useEffect, type ReactNode } from "react";
import { getI18nClient } from "@/i18n/i18nInstance";
import type { Locale } from "@/i18n/config";

export default function I18nClientProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  useEffect(() => {
    getI18nClient(locale);
  }, [locale]);

  return <>{children}</>;
}
