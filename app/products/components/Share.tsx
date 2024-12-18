import Image from "next/image";
import React from "react";
import jph from "@/public/homeblock2.jpg";
export default function Share() {
  return (
    <section className="relative min-h-dvh text-white">
      <Image alt="" src={jph} fill />
      <div className="container relative pt-40">
        <h1 className="text-5xl font-bold tracking-[50px]">使用分享</h1>
        <p className="mt-3">
          展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。
        </p>
      </div>
    </section>
  );
}
