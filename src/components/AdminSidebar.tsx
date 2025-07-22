import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, Eye, MessageCircle, Briefcase, BookOpen, FileText, Target } from 'lucide-react';
import logo from '@/assets/logoGIDSBLUE.png';

const adminSidebarMenu = [
  { label: "Vue d'ensemble", icon: Eye, href: '#overview' },
  { label: 'Témoignages', icon: MessageCircle, href: '#temoignages' },
  { label: 'Services', icon: Briefcase, href: '#services' },
  { label: 'Formations', icon: BookOpen, href: '#formations' },
  { label: 'Blogs', icon: FileText, href: '#blogs' },
  { label: 'Missions', icon: Target, href: '#missions' },
];

const userRaw = localStorage.getItem('user');
let user;
try {
  user = userRaw ? JSON.parse(userRaw) : null;
} catch {
  user = null;
}
user = user && typeof user === 'object' ? user : {};
const name = typeof user.name === 'string' && user.name.trim() ? user.name : 'Admin';
const role = typeof user.role === 'string' && user.role.trim() ? user.role : 'Administrateur';
const avatar = typeof user.avatar === 'string' && user.avatar.trim() ? user.avatar : '';

export default function AdminSidebar({ active, onLogout }) {
  return (
    <aside className="bg-blue-900 shadow-xl border-r border-blue-950 px-2 pt-6 min-h-screen flex flex-col w-64">
      <div className="flex flex-col items-center gap-3 mb-8">
        <Avatar className="h-16 w-16 border-2 border-orange-400 shadow">
          {avatar ? (
            <AvatarImage src={avatar} alt={name} />
          ) : (
            <AvatarFallback className="text-orange-500 bg-orange-100">{name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)}</AvatarFallback>
          )}
        </Avatar>
        <div className="text-center">
          <div className="font-bold text-orange-500 text-lg">{name}</div>
          <div className="text-xs text-orange-500 font-medium">{role}</div>
        </div>
      </div>
      <nav className="flex-1 w-full">
        <ul className="flex flex-col gap-2">
          {adminSidebarMenu.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-base shadow-sm cursor-pointer 
                    ${isActive ? 'bg-blue-800 text-white font-bold scale-105' : 'text-white hover:bg-blue-800 hover:text-white'}
                  `}
                  style={{ minHeight: 48 }}
                >
                  <item.icon size={22} className={`transition-colors ${isActive ? 'text-white' : 'text-blue-200 group-hover:text-white'}`} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto mb-4 flex flex-col items-center">
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow border border-blue-800"
        >
          <LogOut size={18} /> Déconnexion
        </button>
      </div>
    </aside>
  );
} 