import React from "react";
import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";
import scanSvg from "@/public/point_scan.svg";
import Image from "next/image";
export default function Page() {
  return (
    <section>
      <Block1 />
      <Block2 />
      <Block3 />
      <div className="flex min-h-24 items-center justify-center gap-x-4 bg-black text-white">
        <p>
          我們熱忱歡迎有志之士加入我們的團隊，共同創造更美好的未來。如果您對科技充滿熱情，並擁有相關領域的專業知識，請隨時查看我們的招聘信息或與我們聯繫，讓我們攜手共進。
        </p>
        <button className="btn bg-white">
          <Image alt="" src={scanSvg} sizes="20px" />
          查看職缺
        </button>
      </div>
    </section>
  );
}
