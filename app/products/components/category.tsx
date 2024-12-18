import React from "react";
interface categorysProps {
  title: string;
  onClickFn?: () => void;
}
export default function Category() {
  const datas: categorysProps[] = [
    {
      title: "Diane",
    },
    {
      title: "Felix",
    },

    {
      title: "Karina",
    },

    {
      title: "Vito",
    },
  ];
  return (
    <section className="m-auto flex items-center justify-center bg-black py-4 lg:gap-x-6">
      {datas.map((item, idx) => (
        <button
          className="btn rounded-full border bg-black text-white"
          key={`btn-${idx}`}
        >
          {item.title}
        </button>
      ))}
    </section>
  );
}
