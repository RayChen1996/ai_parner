import React from "react";
import png from "@/public/homeblock2.jpg";
import Image, { StaticImageData } from "next/image";
import { saira_extra_condensed } from "@/fonts";
import P1 from "@/public/news/1.jpg";
import P2 from "@/public/news/2.jpg";
import P3 from "@/public/news/3.jpg";
import P4 from "@/public/news/4.jpg";
import P5 from "@/public/news/5.jpg";
import emergencySvg from "@/public/emergency2.svg";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
interface NewsCardProps {
  title?: string;
  url?: StaticImageData;
  index?: number;
  dateTime?: string;
  description?: string;
}
export default function Page() {
  const news: NewsCardProps[] = [
    {
      title: "產品升級公告",
      dateTime: "2023.06.30",
      index: 1,
      description:
        "榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！",
      url: P1,
    },
    {
      title: "限時優惠活動",
      dateTime: "2023.06.01",
      index: 2,
      description:
        "為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。",
      url: P2,
    },
    {
      title: "參加科技展覽",
      dateTime: "2023.06.30",
      index: 3,
      description:
        "本公司將參與今年的台灣國際科技展覽，屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！",
      url: P3,
    },
    {
      title: "新功能上線",
      dateTime: "2023.06.30",
      index: 4,
      description:
        "為使您的3D立體陪伴機器人更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。近期，我們新推出智慧家居控制功能。",
      url: P4,
    },
    {
      title: "用戶見面會",
      dateTime: "2023.06.30",
      index: 5,
      description:
        "為進一步滿足客戶需求，並優化產品性能，我們將舉行用戶見面會。屆時，我們將向您展示我們的研發成果，同時聆聽您的意見和建議，讓我們共同打造更完美的產品！同時聆聽您的意見和建議！",
      url: P5,
    },
  ];
  return (
    <div className="relative min-h-dvh">
      <Image alt="" src={png} fill className="object-cover" />
      <div className="relative m-auto w-10/12">
        <h1 className="text-5xl font-bold tracking-[50px] text-white">
          最新消息
        </h1>
        {news.map((item, idx) => (
          <div
            key={`news-${idx}`}
            className="flex items-center justify-center gap-x-6 text-white"
          >
            <span
              className={clsx(
                saira_extra_condensed.className,
                "h-[600px] text-9xl leading-[600px]",
              )}
            >
              {item.index}
            </span>
            <span className="w-1/3">
              <Image
                alt=""
                src={item.url || ""}
                sizes="100vw"
                className="aspect-[196/226]"
              />
            </span>
            <div className="border-y">
              <div className="flex items-center gap-5 tracking-[25px]">
                <Image alt="" src={emergencySvg || ""} /> {item.dateTime}
              </div>
              <div className="mb-3 tracking-[25px]">{item.title}</div>
              <p className="mb-10">{item.description}</p>
            </div>
            <div className="justify-end">
              <ArrowRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
