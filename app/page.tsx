import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-primary ">
      <ul className="menu rounded-box w-56">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </main>
  );
}
