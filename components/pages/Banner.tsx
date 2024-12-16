import Image, { StaticImageData } from "next/image";
import React from "react";
import homeBg from "@/public/home_background.jpg";
import { shrik_hand } from "@/fonts";
import p1 from "@/public/4a68b4dfacaa85d5d998065ee8d74c2b.png";
import p2 from "@/public/752815cf8f3e5a900e78af9fb4ed23cf.png";
import p3 from "@/public/07d98bcc195df890adb6bc35ff8dd136.png";
import p4 from "@/public/060b84978b2160b3ecc183f6d7b71b5c.png";
import clsx from "clsx";
interface CardProps {
  name?: string;
  url?: StaticImageData;
}
export default function Banner() {
  const data: CardProps[] = [
    {
      name: "Diane",
      url: p1,
    },
    {
      name: "Felix",
      url: p3,
    },
    {
      name: "Karina",
      url: p4,
    },
    {
      name: "Vito",
      url: p2,
    },
  ];
  return (
    <section className="relative min-h-56">
      <Image src={homeBg} alt="" sizes="100vw" fill />
      <div className="container relative top-0 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        {data.map((item, idx) => (
          <div key={item.name} className="relative min-h-[816px]">
            <h3
              className={clsx(
                "text-center text-3xl text-white",
                shrik_hand.className,
              )}
            >
              {item.name}
            </h3>
            <Image
              src={item.url || ""}
              alt=""
              fill
              className={clsx(
                "object-cover",
                idx === 1 && "translate-y-9",
                idx === 2 && "translate-y-9",
              )}
              sizes="100vw"
            />
          </div>
        ))}

        {/* <Image src={p3} alt="" sizes="25vw" className="translate-y-9" />
        <Image src={p4} alt="" sizes="25vw" className="translate-y-9" />
        <Image src={p2} alt="" sizes="25vw" /> */}
      </div>
      <div className="relative mx-4 my-3 h-10 bg-gradient-to-r from-[#11002D] to-[#7000FF]"></div>
    </section>
  );
}
