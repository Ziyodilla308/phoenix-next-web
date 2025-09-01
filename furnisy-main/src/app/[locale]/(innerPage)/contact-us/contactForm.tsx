"use client"; // This component needs to be a client component to use hooks

import React, { useEffect } from "react";
import Link from "next/link";
import { Call, Email, Location } from "@/lib/icon";

const ContactForm = () => {
  return (
    <div className="grid lg:grid-cols-[auto_28%] md:grid-cols-[auto_35%] items-start lg:gap-15 gap-10">
      <div className="bg-home-bg-1 lg:p-10 p-7 flex flex-col gap-7.5 rounded-lg">
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <Location className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Office Address
            </p>
            <p className="text-gray-1-foreground leading-[150%] mt-3">
              Ташкент, Яккасарайский район, улица Махмуда Тараби, 29А
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <Email className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Send Message
            </p>
            <Link
              href={"mailto:info@logistip.com"}
              className="text-gray-1-foreground leading-[150%] mt-3 inline-block hover:text-secondary-foreground transition-all duration-500"
            >
              erdogandikagach@yahoo.com
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <Call className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Call Us
            </p>
            <Link
              href={"tel:2345 56789"}
              className="text-gray-1-foreground leading-[150%] mt-3 inline-block hover:text-secondary-foreground transition-all duration-500"
            >
              +998 93 184 83 25
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
