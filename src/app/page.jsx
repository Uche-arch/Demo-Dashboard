


"use client";

import { useState } from "react";
import Dashboard from "@/components/dashboard/dashboard";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="relative min-h-screen lg:grid lg:grid-cols-[220px_1fr] gap-4 p-2 md:4">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Dashboard */}
      <Dashboard onMenuClick={() => setSidebarOpen(true)} />
    </main>
  );
}
