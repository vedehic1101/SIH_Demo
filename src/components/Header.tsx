import React from 'react';
import { Menu, Bell, User, Search, Award } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  showMenuButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, showMenuButton = false }) => {
  return (
    <header className="glass-card mx-4 mt-4 rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center space-x-4">
          {showMenuButton && (
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white">
                Prime Minister's Internship Scheme
              </h1>
              <p className="text-sm text-white/60">Government of India</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2">
            <Search className="h-4 w-4 text-white/60 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm w-64 text-white placeholder-white/60"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-white/60">Student</p>
            </div>
            <button className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;