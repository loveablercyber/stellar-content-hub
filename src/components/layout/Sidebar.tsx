
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart, 
  Settings, 
  LogOut,
  Users,
  Search
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  const navItems = [
    { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/pages', icon: <FileText size={20} />, label: 'Pages' },
    { to: '/seo', icon: <Search size={20} />, label: 'SEO' },
    { to: '/statistics', icon: <BarChart size={20} />, label: 'Statistics' },
    { to: '/users', icon: <Users size={20} />, label: 'Users' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="bg-white border-r border-gray-200 w-64 flex-shrink-0 hidden md:block">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-cms-primary">CMS Admin</h1>
      </div>
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => 
              `flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors
              ${isActive 
                ? 'bg-cms-light text-cms-primary' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-cms-primary'}`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-2.5 mt-4 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-red-500 transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
