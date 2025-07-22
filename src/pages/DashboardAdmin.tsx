import React, { useEffect, useState } from 'react';
import { SidebarProvider, Sidebar, adminSidebarMenu } from '@/components/ui/sidebar';
import Topbar from '@/components/ui/Topbar';
import { MessageCircle, Briefcase, BookOpen, FileText, Target } from 'lucide-react';

const iconMap = {
  MessageCircle,
  Briefcase,
  BookOpen,
  FileText,
  Target,
};

const DashboardAdmin = () => {
  const [active, setActive] = useState(window.location.hash || '#temoignages');

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      window.location.href = '/login';
    }
    const onHashChange = () => setActive(window.location.hash || '#temoignages');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Sidebar collapsible="offcanvas" className="bg-white/90 shadow-xl border-r border-blue-100 px-2 pt-6">
          <nav className="flex flex-col gap-2">
            {adminSidebarMenu.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = active === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-blue-800 transition-all duration-200 hover:bg-blue-100/80 hover:text-blue-900 group text-base shadow-sm cursor-pointer ${isActive ? 'bg-blue-200/80 text-blue-900 font-bold scale-105' : ''}`}
                  style={{ minHeight: 48 }}
                >
                  <Icon size={22} className={`transition-colors ${isActive ? 'text-blue-900' : 'text-blue-500 group-hover:text-blue-700'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </Sidebar>
        <div className="flex-1 flex flex-col min-h-screen">
          <Topbar />
          <main className="flex-1 p-6 md:p-10 animate-fade-in">
            <div className="text-2xl font-bold text-blue-900 mb-6">Bienvenue sur le Dashboard Admin</div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <SectionCard title="Témoignages" />
              <SectionCard title="Services" />
              <SectionCard title="Formations" />
              <SectionCard title="Blogs" />
              <SectionCard title="Missions" />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const SectionCard = ({ title }: { title: string }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-xl font-semibold text-blue-700 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer min-h-[120px] animate-fade-in">
    {title}
  </div>
);

export default DashboardAdmin; 