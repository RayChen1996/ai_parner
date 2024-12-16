import React from "react";
import { shrik_hand } from "@/fonts";
import clsx from "clsx";
import { options, authOptions } from "@/options";
import Link from "next/link";
import { Menu } from "lucide-react";
import scanSvg from "@/public/point_scan.svg";
import Image from "next/image";
export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full border-b-2 bg-primary px-6 text-white backdrop-blur-md">
      <nav className="navbar">
        <div className="navbar-start">
          <Link
            href={"/"}
            className={clsx(
              "btn btn-ghost text-xl font-bold",
              shrik_hand.className,
            )}
          >
            ALPHABOX+
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {options.map((item) => (
              <li key={item.name}>
                <Link href={`/${item.url}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn lg:hidden">
            <Menu size={20} />
          </button>
          <ul className="hidden items-center gap-2 lg:flex lg:gap-6">
            {authOptions.map((item, _) => {
              if (item.name === "訂閱") {
                return (
                  <Link href={item?.url || ""} key={item.name} className="btn">
                    <Image alt="" src={scanSvg} />
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <a key={item.name} className="cursor-pointer">
                    {item.name}
                  </a>
                );
              }
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
