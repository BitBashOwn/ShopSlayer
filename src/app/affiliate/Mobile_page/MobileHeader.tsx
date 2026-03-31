// app/components/MobileHeader.tsx
export default function MobileHeader() {
  return (
    <div className="px-4 pt-4">
      
      <div className="flex justify-between items-center">
        <h1 className="text-[#2D1B69] font-semibold">ShopSlayer</h1>
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-[#2D1B69]">
          Hey Sarah 👋
        </h2>
        <p className="text-sm text-gray-500">
          23 campaigns available
        </p>
      </div>
    </div>
  );
}