'use client';

import Link from 'next/link';
import Image from 'next/image';
import navbarologo from './navbarlogo2.png';
import { useState } from 'react';
import './navbar.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <Image
            src={navbarologo}
            alt="Barbarian Brew Museum Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* Menu Toggle Button */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <ul className={`navbar-nav ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <span className="navbar-separator"></span>
          </li>
          <li className="navbar-item">
            <Link href="/museo" className="navbar-link" onClick={closeMenu}>Il Museo</Link>
          </li>
          <li className="navbar-item separator">
            <span className="navbar-separator"></span>
          </li>
          <li className="navbar-item">
            <Link href="/shop" className="navbar-link" onClick={closeMenu}>Prodotti</Link>
          </li>
          <li className="navbar-item separator">
            <span className="navbar-separator"></span>
          </li>
          <li className="navbar-item">
            <Link href="/galleria" className="navbar-link" onClick={closeMenu}>Galleria</Link>
          </li>
          <li className="navbar-item separator">
            <span className="navbar-separator"></span>
          </li>
          <li className="navbar-item">
            <Link href="/eventi" className="navbar-link" onClick={closeMenu}>Eventi</Link>
          </li>
          <li className="navbar-item separator">
            <span className="navbar-separator"></span>
          </li>
          <li className="navbar-item">
            <Link href="/distillerie" className="navbar-link" onClick={closeMenu}>Distillerie</Link>
          </li>
          <li className="navbar-item separator">
            <span className="navbar-separator"></span>
          </li>
          <li className="navbar-item">
            <Link href="/contatti" className="navbar-link" onClick={closeMenu}>Contatti</Link>
          </li>
          {/* Social inseriti dentro la lista */}
          <li className="navbar-social-wrapper">
            <div className='linksocial'>
              <a href="https://www.instagram.com/barbarian.brew.museum/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon-style" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584642045592" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon-style" />
              </a>
            </div>
          </li>
        </ul>
      </div>
   
    </nav>
  );
}
