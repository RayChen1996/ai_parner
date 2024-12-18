import React from "react";
import { noto_sans_tc } from "@/fonts";
import clsx from "clsx";
import lineSvg from "@/public/Line.svg";
import Image from "next/image";
export default function Page() {
  return (
    <div className="min-h-dvh bg-[#E9E2F3]">
      <section className="container">
        <h1
          className={clsx(
            "font-bold tracking-[50px] lg:pt-16 lg:text-6xl",
            noto_sans_tc.className,
          )}
        >
          FAQ
        </h1>
        <Image alt="" src={lineSvg} className="my-10" />

        <section className="grid grid-cols-1 md:grid-cols-2">
          <aside>
            <ul>
              <li>ALPHABOX+ 使用問題</li>
              <li>訂購與運送</li>
              <li>產品保養與維修</li>
            </ul>
          </aside>
          <main></main>
        </section>
      </section>
    </div>
  );
}
