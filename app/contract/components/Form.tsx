import Image from "next/image";
import React from "react";
import png from "@/public/homeblock2.jpg";
import { noto_sans_tc } from "@/fonts";
import clsx from "clsx";
export default function Form() {
  return (
    <section className="relative min-h-dvh">
      <Image src={png} alt="" fill />
      <div className="container relative">
        <span
          className={clsx(
            "font-black tracking-[50px] text-white lg:mt-40 lg:text-[64px]",
            noto_sans_tc.className,
          )}
        >
          聯絡我們
        </span>
      </div>
      <div className="container relative grid grid-cols-1 gap-6 text-white md:grid-cols-2">
        <form className="">
          <p>
            您的意見與需求對我們至關重要！如果您對 ALPHABOX+
            有任何疑問、建議或需求，請隨時填寫以下表單，我們將在 24
            小時內回覆您。您的寶貴意見將幫助我們不斷改進產品與服務，為您帶來更優質的體驗。
          </p>

          <p className="lg:my-16">
            我們期待您的來信與來電，竭誠為您解答。讓我們攜手共創更美好的未來！
          </p>
          <div className="flex flex-col gap-3">
            <input type="text" className="input input-md" placeholder="姓名" />
            <input type="text" className="input input-md" placeholder="EMAIL" />
            <input
              type="text"
              className="input input-md"
              placeholder="聯絡電話"
            />

            <textarea
              className="textarea textarea-bordered"
              placeholder="COMMENTS"
            ></textarea>
          </div>
        </form>
        <aside>
          <Heading title="客服時間" />
          <div className="mb-10">
            <time>週一至週五 09:00-18:00</time>
          </div>

          <Heading title="聯絡地址" />
          <div className="mb-10">
            <address>高雄市新興區民生一路 56 號</address>
          </div>

          <Heading title="聯絡地址" />
          <a href="tel:">+886-2-12345678</a>
          <a href="mailto:customer@alphabox.com">
            mailto:customer@alphabox.com
          </a>
        </aside>
      </div>
    </section>
  );
}

function Heading({ title }: { title: string }) {
  return <h2 className="text-2xl text-white/50">{title}</h2>;
}
