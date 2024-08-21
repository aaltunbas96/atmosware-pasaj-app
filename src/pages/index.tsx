import Campaigns from "@/components/home/Campaigns";
import HeroSection from "@/components/home/HeroSection";
import MostPurchased from "@/components/home/MostPurchased";
import Opportunities from "@/components/home/Opportunities";
import PopularCategories from "@/components/home/PopularCategories";
import SpecialOffer from "@/components/home/SpecialOffer";
import WhyUs from "@/components/home/WhyUs";
import RootLayout from "@/components/layout/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <main>
        <HeroSection />
        <PopularCategories />
        <SpecialOffer />
        <Campaigns />
        <MostPurchased />
        <Opportunities />
        <WhyUs />
      </main>
    </RootLayout>
  );
}
