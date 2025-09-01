import { ChevronRight } from "@/lib/icon";
import Link from "next/link";
import React from "react";

type PropsType = {
  pageTitle: string;
  breadcrumbLink?: string;
  breadcrumbLabel?: string;
  currentPage: string;
};

const PageHeader = ({
  pageTitle,
  breadcrumbLink,
  breadcrumbLabel,
  currentPage,
}: PropsType) => {
  return (
    <section className='bg-[linear-gradient(0deg,_rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.50)_100%),url("/images/page-header.avif")] bg-center bg-cover bg-no-repeat'>
      <div className="lg:py-20 py-12 text-center">
        <h5 className="text-white capitalize">{pageTitle}</h5>
        <ul className="text-base leading-[162%] flex items-center justify-center gap-0.5 mt-[15px]">
          <li className="flex items-center gap-0.5">
            <Link
              href={"/"}
              className="text-gray-2-foreground hover:text-white transition-all duration-500"
            >
              Home
            </Link>
            <span className="text-gray-2-foreground">
              <ChevronRight className="size-4" />
            </span>
          </li>
          {breadcrumbLink && (
            <li className="flex items-center gap-0.5">
              <Link
                href={breadcrumbLink || "#"}
                className="text-gray-2-foreground hover:text-white transition-all duration-500"
              >
                {breadcrumbLabel}
              </Link>
              <span className="text-gray-2-foreground">
                <ChevronRight className="size-4" />
              </span>
            </li>
          )}
          <li className="max-w-[320px]">
            <span className="line-clamp-1">{currentPage}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
