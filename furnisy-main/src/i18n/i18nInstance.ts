"use client";

import i18next, { type i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { i18nOptions, type Locale } from "@/i18n/config";

let initialized = false;

export function getI18nClient(locale: Locale): i18n {
  if (!initialized) {
    i18next
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (lng: string, ns: string) => import(`./locales/${lng}/${ns}.json`),
        ),
      )
      .init({
        ...i18nOptions,
        lng: locale,
        react: {
          useSuspense: false,
        },
      });
    initialized = true;
  } else {
    void i18next.changeLanguage(locale);
  }
  return i18next;
}
