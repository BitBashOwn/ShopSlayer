import Sidebar from "../components/Sidebar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      <main className="ml-[256px] flex h-screen flex-1 flex-col overflow-hidden bg-white">
        {children}
      </main>
    </div>
  );
}
