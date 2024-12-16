import React from "react";
import { saira_extra_condensed, shrik_hand } from "@/fonts";
import clsx from "clsx";
import arrowSvg from "@/public/line_end_arrow_notch.svg";
import Image from "next/image";
export default function Cards() {
  const cards_data: Card[] = [
    {
      text: "1",
      name: "Diane",
      type: "知識型",
      description: "學術領導/知識分享/智能問答",
    },
    {
      text: "2",
      name: "Felix",
      type: "娛樂型",
      description: "音樂播放/語音互動/遊戲陪伴",
    },
    {
      text: "3",
      name: "Karina",
      type: "生活型",
      description: "健康提醒/日程安排/智能家居",
    },
    {
      text: "4",
      name: "Vito",
      type: "情感型",
      description: "情感識別/心情分析/心靈支持",
    },
  ];
  return (
    <section className="grid min-h-dvh grid-cols-1 lg:grid-cols-4">
      {cards_data.map((item, idx) => (
        <Card key={`card-${idx}`} {...item}></Card>
      ))}
    </section>
  );
}

type Card = {
  text?: string;
  name?: string;
  type?: string;
  description?: string;
};
function Card({ text, description, name, type }: Card) {
  return (
    <div className="flex flex-col items-center justify-center border-x bg-black text-white">
      <span
        className={clsx(
          saira_extra_condensed.className,
          "h-[600px] text-9xl leading-[600px] text-white",
        )}
      >
        {text}
      </span>
      <span className={clsx("", shrik_hand.className)}>{name}</span>
      <div className="flex">
        <div>
          <div>{type}</div>
          <div>{description}</div>
        </div>
        <div>
          <Image alt="" src={arrowSvg} />
        </div>
      </div>
    </div>
  );
}
