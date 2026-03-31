import Sidebar from "../components/Sidebar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-[240px] h-screen bg-white flex flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
