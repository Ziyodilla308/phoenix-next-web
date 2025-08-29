"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { languages, type Locale } from "@/i18n/config";

type Props = { current: Locale };

export function LangSwitcher({ current }: Props) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const stripped = (() => {
    const parts = pathname.split("/");
    if ((languages as readonly string[]).includes(parts[1])) {
      const rest = parts.slice(2).join("/");
      return `/${rest}`.replace(/\/+$/, "/") || "/";
    }
    return pathname;
  })();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newLocale = e.target.value as Locale;
      const newPath = `/${newLocale}${stripped === "/" ? "" : stripped}`;
      router.push(newPath);
    },
    [router, stripped],
  );
  return (
    <div>
      <select name="lang" id="lang" value={current} onChange={handleChange}>
        {(languages as readonly Locale[]).map((lng) => (
          <option key={lng} value={lng}>
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
