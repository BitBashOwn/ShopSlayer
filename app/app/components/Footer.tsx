// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#2D1B69] text-white px-6 lg:px-16 py-10">
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        
        {/* Left - Logo */}
        <h1 className="font-semibold text-[16px]">ShopSlayer</h1>

        {/* Center - Links */}
        <div className="flex flex-col gap-2 text-[12px] text-gray-300">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">For Brands</a>
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right - Copyright */}
        <p className="text-[12px] text-gray-300 md:text-right">
          © 2026 ShopSlayer by Huskee Digital
        </p>
      </div>

    </footer>
  );
}