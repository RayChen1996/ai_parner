import React from "react";
import photo2 from "@/public/about/2.jpg";
import photo3 from "@/public/about/3.jpg";
import photo4 from "@/public/about/4.jpg";

import { noto_sans_tc } from "@/fonts";
import Image from "next/image";
import clsx from "clsx";
export default function Block2() {
  return (
    <section className="container relative min-h-dvh">
      <PhotoGrid />
      <SectionTitle title="ALPHABOX+" />
      <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
        <span>
          我們提供多款3D立體投影陪伴機器人，涵蓋知識型、娛樂型、生活型和情感型等不同類別，以滿足您的各種需求。每款產品都經過精心設計，具備高度智能化、多功能和人性化操作等特點，讓您在日常生活中獲得更便利的陪伴體驗。
        </span>
        <span>
          <span>此外，我們還提供完善的售後服務，包括</span>
          <span>產品保固</span>、<span>技術支援</span>及<span>線上客服</span>
          協助，確保您在購買與使用過程中得到全面支持。
        </span>
      </div>

      <hr className="mt-10 h-[2px] bg-black lg:mt-20" />
      <hr className="mt-2 h-3 bg-black" />
    </section>
  );
}

interface SectionTitleProps {
  title: string;
}
function SectionTitle({ title }: SectionTitleProps) {
  return (
    <section
      className={clsx(
        "text-center font-bold tracking-[50px] lg:text-8xl",
        noto_sans_tc.className,
      )}
    >
      {title}
    </section>
  );
}

function PhotoGrid() {
  return (
    <section className="grid grid-cols-1 gap-x-3 lg:my-10 lg:grid-cols-3 lg:gap-x-10">
      <Image alt="" sizes="25vw" src={photo2} />
      <Image alt="" sizes="25vw" src={photo3} />
      <Image alt="" sizes="25vw" src={photo4} />
    </section>
  );
}
