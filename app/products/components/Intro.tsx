import React from "react";
import svg from "@/public/point_scan.svg";
import Image from "next/image";
import Svg from "@/components/svg/mark";
interface IntroCardProps {
  title: string;
  description: string;
}
export default function Intro() {
  const data: IntroCardProps[] = [
    {
      title: "先進的3D投影技術",
      description:
        "Vito 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！",
    },
    {
      title: "人性化的互動設計",
      description:
        "Vito 具有高度智能的語音辨識和回應功能，您可以像跟朋友聊天一樣，與 Vito  進行自然、流暢的對話。",
    },
    {
      title: "豐富的應用場景",
      description:
        "無論是家庭娛樂、教育培訓還是商業展示，Vito 都能夠輕鬆滿足您的需求，為您提供更多元的互動體驗。",
    },
    {
      title: "高度自主性",
      description:
        "Vito 具有強大的自主學習能力，能夠不斷地學習並優化自己，為您創造更加便捷、貼心的生活方式。",
    },
    {
      title: "簡單易用的操作界面",
      description:
        "Vito 擁有直觀的操作界面，讓您可以輕鬆地掌握並運用它的各種功能。",
    },
  ];
  return (
    <section className="container bg-white pb-40">
      <div className="mt-[88px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Svg />
          <span>學術領導/知識分享/智能問答</span>
        </div>

        <div>ALPHABOX+</div>
      </div>
      <p>
        歡迎來到ALPHABOX+的全新世界！在這裡，我們很榮幸地向您介紹我們的最新力作
        - 3D立體投影機器人 Felix！
      </p>

      <div className="mt-[120px] grid grid-cols-1 gap-x-6 gap-y-[104px] lg:grid-cols-3">
        {data.map((item, idx) => (
          <div key={`card-${idx}`}>
            <h2 className="font-bold">{item.title}</h2>
            <p className="mt-6">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
