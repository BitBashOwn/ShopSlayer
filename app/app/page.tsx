// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-[#2D1B69] min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}