import React from 'react';
import  { ReactComponent as Logo }  from '../Assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white text-black shadow-md">
    <div className="flex items-center">
    
        <Logo className="w-8 h-8 mr-2" /> 
        <span className="text-lg font-bold"></span>
      </div>
      <div className="flex space-x-4">
        <NavLink to="/" label="Home" />
        <NavLink to="/new" label="New" />
        <NavLink to="/popular" label="Popular" />
        <NavLink to="/trending" label="Trending" />
        <NavLink to="/categories" label="Categories" />
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => {
  return (
    <a
      href={to}
      className="text-black hover:text-orange-400 transition duration-300"
    >
      {label}
    </a>
  );
};

export default Navbar;
