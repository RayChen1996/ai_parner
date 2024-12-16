import React from "react";
import emergencySvg from "@/./public/emergency.svg";
import Image from "next/image";
import { shrik_hand } from "@/fonts";
import { footOptions } from "@/options";
import Link from "next/link";
import clsx from "clsx";
export default function AppFooter() {
  return (
    <footer className="container lg:navbar">
      <div className="navbar-start block">
        <div>
          <a
            className={clsx(
              "btn btn-ghost text-xl font-bold",
              shrik_hand.className,
            )}
          >
            ALPHABOX+
          </a>
        </div>

        <a href="">Copyright © 2023 Hexschool.</a>
      </div>
      <div className="navbar-center">
        <a>
          <Image alt="" src={emergencySvg} />
        </a>
      </div>
      <div className="navbar-end">
        <ul className="flex items-center gap-2">
          {footOptions.map((item, _) => (
            <Link href={item?.url || ""} key={item.name} className=" ">
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
