import Banner from "@/components/pages/Banner";
import Cards from "@/components/pages/Cards";
import ContractUs from "@/components/pages/ContractUs";
import News from "@/components/pages/News";
import WebCarousel from "@/components/pages/WebCarousel";

export default function Home() {
  return (
    <main>
      <Banner />
      <WebCarousel />
      <News />
      <ContractUs />
      <Cards />
    </main>
  );
}
