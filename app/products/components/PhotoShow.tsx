import React from "react";
import p1 from "@/public/products/1.png";
import p2 from "@/public/products/2.png";
import Image from "next/image";
export default function PhotoShow() {
  return (
    <section className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">
      <figure className="relative">
        <Image alt="" src={p1} />
      </figure>
    </section>
  );
}
