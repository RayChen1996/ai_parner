import React from "react";
import bgJpg from "@/public/homeblock2.jpg";
import Image from "next/image";
import photo from "@/public/about/98d2bb887cb7b13f9c45e0790c9af0ca.jpg";
import portSvg from "@/public/point_scan.svg";
export default function Block1() {
  return (
    <section className="relative min-h-dvh">
      <Image alt="" src={bgJpg} fill />
      <Image
        alt=""
        src={photo}
        sizes="100vw"
        className="relative h-[280px] lg:translate-y-[384px]"
      />

      <div className="relative text-white lg:translate-y-[404px]">
        <Image alt="" src={portSvg} sizes="20px" />
        <span>
          我們相信科技的力量能夠改變人類生活。通過不斷創新與優化，我們期待為您打造一款具有高度智能、豐富功能且呈現真實感的3D立體投影陪伴機器人，讓科技成為您生活中真誠的夥伴。{" "}
        </span>
      </div>
    </section>
  );
}
