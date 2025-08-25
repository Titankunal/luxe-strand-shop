import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import ShopByShapeSection from "@/components/ShopByShapeSection";
import CareSection from "@/components/CareSection";
import DeliverySection from "@/components/DeliverySection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
        <ShopByShapeSection />
        <CareSection />
        <DeliverySection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;