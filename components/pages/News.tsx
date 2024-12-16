import Image from "next/image";
import React from "react";
import bg from "@/public/homeblock2.jpg";

export default function News() {
  return (
    <section className="relative m-auto min-h-dvh">
      <Image alt="" src={bg} fill sizes="100vw" />
    </section>
  );
}
