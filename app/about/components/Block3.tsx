import React from "react";
import bgJpg from "@/public/about/5.jpg";
import Image from "next/image";
export default function Block3() {
  return (
    <section className="container relative grid grid-cols-1 place-content-center gap-3 lg:my-40 lg:grid-cols-2 lg:gap-6">
      <Image alt="" src={bgJpg} />
      <aside className="m-auto">
        展望未來，我們將繼續投入研發，引領3D立體投影陪伴機器人技術的發展。通過結合虛擬現實、擴增現實和人工智能等領域的最新技術，我們將努力為用戶帶來更多前所未有的創新體驗。
      </aside>
    </section>
  );
}
