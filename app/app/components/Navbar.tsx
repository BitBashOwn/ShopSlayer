// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h1 className="text-white font-bold text-lg">ShopSlayer</h1>

      <div className="flex items-center gap-3">
        <button className="border border-white text-white px-4 py-1 rounded-full text-sm">
          For Brands →
        </button>
        <button className="text-white text-sm">Sign In</button>
      </div>
    </nav>
  );
}