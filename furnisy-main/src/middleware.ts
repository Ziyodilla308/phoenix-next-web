import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { languages, fallbackLng, type Locale } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const hasLocale = (languages as readonly string[]).some(
    (lng) => pathname === `/${lng}` || pathname.startsWith(`/${lng}`),
  );
  if (hasLocale) return;

  const cookieLng = req.cookies.get("lng")?.value as Locale | undefined;
  const locale: Locale = (languages as readonly string[]).includes(
    cookieLng ?? "",
  )
    ? (cookieLng as Locale)
    : fallbackLng;

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robotos.txt|sitemap.xml).*)"],
};
