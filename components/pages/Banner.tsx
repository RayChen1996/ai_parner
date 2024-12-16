import Image from "next/image";
import React from "react";
import homeBg from "@/public/home_background.jpg";

import p1 from "@/public/4a68b4dfacaa85d5d998065ee8d74c2b.png";
import p2 from "@/public/752815cf8f3e5a900e78af9fb4ed23cf.png";
import p3 from "@/public/07d98bcc195df890adb6bc35ff8dd136.png";
import p4 from "@/public/060b84978b2160b3ecc183f6d7b71b5c.png";
export default function Banner() {
  return (
    <section className="relative min-h-56">
      <Image src={homeBg} alt="" sizes="100vw" fill />
      <div className="relative top-0 grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-x-8">
        <Image src={p1} alt="" sizes="25vw" />
        <Image src={p2} alt="" sizes="25vw" />
        <Image src={p3} alt="" sizes="25vw" />
        <Image src={p4} alt="" sizes="25vw" />
      </div>
    </section>
  );
}
