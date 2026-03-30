import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CampaignSection from "./components/CampaignSection";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <div className="bg-primary">
        <Navbar />
        <Hero />
      </div>
      <CampaignSection />
      <HowItWorks />
      <Footer />
    </main>
  );
}
