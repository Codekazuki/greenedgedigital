import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className='site-header'>
      <div className='nav-inner container'>
        <div className='brand'>
          <img src={logo} alt='logo' className='logo' />
          <a href=''>GreenEdge</a>
        </div>
        <nav
          className={`nav ${open ? "open" : ""}`}
          aria-label='Main Navigation'
        >
          <NavLink
            to='/'
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to='/services'
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
        <div className='actions'>
          <button className='cta'>Get Started</button>
          <button
            className='theme-toggle'
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className='hamburger'
            aria-label='Toggle menu'
            onClick={() => setOpen((s) => !s)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
