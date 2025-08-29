import { InitOptions } from "i18next";

export const languages = ["uz", "ru", "en"] as const;
export type Locale = (typeof languages)[number];
export const fallbackLng: Locale = "uz";

export const i18nOptions: InitOptions = {
  supportedLngs: languages as unknown as string[],
  fallbackLng,
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
};
