import React from "react";
import { noto_sans_tc } from "@/fonts";
import clsx from "clsx";
import jpg from "@/public/contract/dd0b797946c19a0992413c8821fc88ac.png";
import jpg2 from "@/public/contract/2.png";
import jpg3 from "@/public/contract/3.png";
import jpg4 from "@/public/contract/4.png";
import Image, { type StaticImageData, type ImageProps } from "next/image";
interface photosProps {
  image: StaticImageData;
  title: string;
}
export default function PickRole() {
  const data: photosProps[] = [
    {
      image: jpg,
      title: "",
    },
    {
      image: jpg2,
      title: "",
    },
    {
      image: jpg3,
      title: "",
    },
    {
      image: jpg4,
      title: "",
    },
  ];
  return (
    <div className="min-h-dvh">
      <section className="container">
        <h3
          className={clsx(
            "text-[64px] font-black tracking-[50px] lg:mt-40",
            noto_sans_tc.className,
          )}
        >
          選擇自己要的角色
        </h3>

        <div className="flex items-center gap-6 text-5xl">
          <span
            className={clsx(
              "font-black text-[#6E01F8]",
              noto_sans_tc.className,
            )}
          >
            20K+
          </span>
          <span className={clsx("font-black", noto_sans_tc.className)}>
            使用者喜歡我們的服務
          </span>
        </div>
      </section>
      <div className="lg:mt-20">
        {data.map((item, idx) => {
          return (
            <div
              key={`photo-${idx}`}
              className={clsx("flex", idx % 2 === 0 ? "" : "justify-end")}
            >
              <Image
                alt=""
                src={item.image}
                className="h-[232px] w-2/3 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
