import type { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/header/Header";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-(--color-dark-2)">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main */}
      <div className="flex-1 flex flex-col">
      <Navbar />

        <main className="p-6 text-gray-900 dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
}