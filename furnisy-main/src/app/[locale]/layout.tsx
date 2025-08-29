import React, { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "../globals.css";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import { languages, fallbackLng, type Locale } from "@/i18n/config";
import Header from "@/components/sections/header/header";
import Footer from "@/components/sections/footer";
import MobileNavbar from "@/components/sections/header/mobileNavbar";
import I18nClientProvider from "@/components/I18nClientProvider";

export const dynamic = "force-static";

export function generateStaticParams() {
  return languages.map((lng) => ({ locale: lng }));
}

type Props = {
  children: ReactNode;
  params: {
    locale?: string;
  };
};

const satoshi = localFont({
  src: [
    {
      path: "../../font/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    { path: "../../font/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../../font/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../font/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--satoshi",
});

export const metadata: Metadata = {
  title: "Furnisy - E-Commerce Template",
  description:
    "Furnisy - e-commerce template create by technology next.js, tailwind css, shadcn",
  keywords: [
    "ecommerce",
    "furnisy",
    "product",
    "site",
    "react.js",
    "next.js",
    "tailwind css",
  ],
};

export default function RootLayout({ children, params }: Props) {
  const param = (params?.locale ?? "") as Locale;
  const locale: Locale = (languages as readonly string[]).includes(param)
    ? param
    : fallbackLng;

  return (
    <html lang={locale}>
      <body className={`${satoshi.variable}`}>
        <I18nClientProvider locale={locale}>
          <StoreProvider>
            <Header locale={locale} />
            {children}
            <Footer />
            <MobileNavbar />
            <Toaster position="top-right" reverseOrder={false} />
          </StoreProvider>
        </I18nClientProvider>
      </body>
    </html>
  );
}
