"use client"; // This component needs to be a client component to use hooks

import React, { useEffect } from "react";
import Link from "next/link";
import { Call, Email, Location, User } from "@/lib/icon";
import { User2 } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 items-start lg:gap-15 gap-10">
      <div className="shadow-md bg-home-bg-1 lg:p-10 p-7 flex flex-col gap-7.5 rounded-lg">
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <User className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Fullname
            </p>
            <p className="text-gray-1-foreground leading-[150%] mt-3">
              ERDOGAN DIKAGAC
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <User2 className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Position
            </p>
            <p className="text-gray-1-foreground leading-[150%] mt-3">
              Founder of Phoenix Machine Group
            </p>
          </div>
        </div>
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
      <div className="shadow-md bg-home-bg-1 lg:p-10 p-7 flex flex-col gap-7.5 rounded-lg">
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <User className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Fullname
            </p>
            <p className="text-gray-1-foreground leading-[150%] mt-3">
              OZCAN SEVINC
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <User2 className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Position
            </p>
            <p className="text-gray-1-foreground leading-[150%] mt-3">
              Marketing Director
            </p>
          </div>
        </div>
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
              +998 93 93 184 78 08
            </Link>
          </div>
        </div>
      </div>
      <div className="shadow-md bg-home-bg-1 lg:p-10 p-7 flex flex-col gap-7.5 rounded-lg">
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <User className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Fullname
            </p>
            <p className="text-gray-1-foreground leading-[150%] mt-3">
              RUSLAN SATTAROV
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="shrink-0 lg:w-15 lg:h-15 w-12 h-12 flex justify-center items-center border border-muted text-gray-1-foreground rounded-full">
            <User2 className="lg:size-[34px] size-7" />
          </div>
          <div>
            <p className="text-secondary-foreground text-lg font-medium leading-[150%] relative after:absolute after:left-0 after:bottom-0 after:w-14 after:h-px after:bg-primary">
              Position
            </p>
            <p className="text-gray-1-foreground leading-[150%] mt-3">
              Director of Spare Parts
            </p>
          </div>
        </div>
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
              +998 93 97 130 66 58
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
