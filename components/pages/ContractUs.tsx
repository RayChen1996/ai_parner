import React from "react";
import emergencySvg from "@/./public/emergency2.svg";
import scanSvg from "@/./public/point_scan2.svg";
import Image from "next/image";
export default function ContractUs() {
  return (
    <section className="relative grid grid-cols-1 gap-x-3 bg-[#1F0F39] text-white md:grid-cols-2">
      <aside>
        <h3 className="text-4xl font-bold tracking-[25px] text-white">
          聯絡我們
        </h3>
        <div className="flex gap-x-3">
          <span className="h-6 w-6 rounded-full bg-white"></span>
          <span className="h-6 w-24 rounded-full bg-white"></span>
        </div>
        <div className="font-bold">
          <span>讓科技成為您的最佳夥伴</span>
          <p>立即體驗神奇功能並享限時優惠！</p>
        </div>
      </aside>
      <form>
        <Image alt="" src={emergencySvg} />
        <div className="flex flex-col">
          <input type="email" className="input input-md" placeholder="EMAIL" />
          <textarea
            placeholder="COMMENTS"
            className="textarea textarea-bordered"
          ></textarea>
          <button className="btn btn-primary">
            <Image alt="" src={scanSvg} />
            送出
          </button>
        </div>
      </form>
    </section>
  );
}
