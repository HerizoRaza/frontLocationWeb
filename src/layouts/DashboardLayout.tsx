import { useState } from "react";
import type { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/header/Header";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-(--color-dark-2)">

      {/* Sidebar — reçoit juste isOpen, gère elle-même sa largeur */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Colonne droite */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">

        {/* Navbar avec toggle */}
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        {/* Contenu scrollable */}
        <main className="flex-1 overflow-y-auto p-6 text-gray-900 dark:text-white">
          {children}
        </main>

      </div>
    </div>
  );
}