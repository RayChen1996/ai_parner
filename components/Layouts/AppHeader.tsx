import React from "react";
import { shrik_hand } from "@/fonts";
import clsx from "clsx";
import { options, authOptions } from "@/options";
import Link from "next/link";
import { Menu } from "lucide-react";
export default function AppHeader() {
  return (
    <header className="mx-auto w-full border-b-2 bg-primary px-6 text-white">
      <nav className="navbar">
        <div className="navbar-start">
          <a
            className={clsx(
              "btn btn-ghost text-xl font-bold",
              shrik_hand.className,
            )}
          >
            ALPHABOX+
          </a>
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
          <ul className="hidden items-center gap-2 lg:flex">
            {authOptions.map((item, _) => {
              if (item.name === "訂閱") {
                return (
                  <Link href={item?.url || ""} key={item.name} className="btn">
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
