import Image from "next/image";
import React from "react";
import bg from "@/public/homeblock2.jpg";
import carousel_background from "@/public/carousel_background.png";
import carousel from "@/public/carousel.png";
export default function WebCarousel() {
  return (
    <section className="relative m-auto min-h-dvh">
      <div className="text-3xl font-bold tracking-[25px]">什麼是</div>
      <div className="text-3xl font-bold tracking-[25px]">ALPHABOX+</div>
      <Image alt="" src={bg} fill sizes="100vw" />
      <figure className="relative z-10">
        <Image
          alt=""
          src={carousel_background}
          className="relative"
          sizes="50vw"
          fill
        />
      </figure>
      <Image alt="" src={carousel} className="z-20" sizes="50vw" />

      <div className="relative mx-4 my-3 h-10 bg-gradient-to-l from-[#11002D] to-[#7000FF]"></div>
    </section>
  );
}
