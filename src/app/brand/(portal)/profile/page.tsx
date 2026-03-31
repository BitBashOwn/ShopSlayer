export default function ProfileView() {
  return (
    <div className="flex flex-col h-full bg-[#fafafa]">
      <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between sticky top-0 z-30">
        <h1 className="text-xl font-bold text-[#1a1a6e]">Brand Profile</h1>
      </div>
      <div className="p-8 max-w-3xl">
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
             <h2 className="text-xl font-bold text-[#1a1a6e] mb-2">GlowLab Co.</h2>
             <p className="text-gray-500 mb-6 font-medium">Manage your brand details, billing, and team members here.</p>
             <div className="border border-dashed border-gray-300 rounded-xl p-12 text-center text-gray-500 font-medium">
                  Profile settings coming soon.
             </div>
        </div>
      </div>
    </div>
  );
}
