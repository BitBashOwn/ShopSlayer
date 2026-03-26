// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CampaignSection from "./components/CampaignSection";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#2D1B69] min-h-screen">
      <Navbar />
      <Hero />
      <CampaignSection />
      <HowItWorks />
      <Footer />
    </main>
  );
}