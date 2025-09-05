import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Award, 
  Settings, 
  LogOut,
  User,
  Calendar,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/dashboard/profile', icon: User, label: 'Profile' },
    { path: '/dashboard/internships', icon: Award, label: 'Internships' },
    { path: '/dashboard/applications', icon: FileText, label: 'Applications' },
    { path: '/dashboard/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 glass-card m-4 rounded-2xl transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:shadow-none
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">PM Internship</h3>
                <p className="text-sm text-white/60">Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border-r-2 border-orange-500' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/20">
            <button className="flex items-center space-x-3 px-4 py-3 w-full text-left text-white/70 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;