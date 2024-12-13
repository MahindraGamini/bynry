import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, MapPin, Settings, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={24} />}
      </button>

      <div
        className={`
          fixed left-0 top-0 h-full w-48 bg-white shadow-lg p-3 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:block z-40
        `}
      >
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <span className="hidden md:inline">Profile Explorer</span>
          </h1>
        </div>

        <nav className="space-y-1">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem to="/profiles" icon={<Users size={18} />} label="Profiles" />
          <NavItem to="/map" icon={<MapPin size={18} />} label="Location View" />
          <NavItem to="/admin" icon={<Settings size={18} />} label="Admin Panel" />
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
        ${isActive
          ? 'bg-blue-100 text-blue-600'
          : 'text-gray-600 hover:bg-gray-100'
        }
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </NavLink>
  );
};

export default Sidebar;
