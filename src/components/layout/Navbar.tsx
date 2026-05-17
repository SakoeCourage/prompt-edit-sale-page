"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`nav-mobile-backdrop ${menuOpen ? "nav-mobile-backdrop-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <img src="/favicon.png" alt="PromptEdit logo" className="nav-logo-icon" />
          <span className="nav-logo-text">PROMPT<span className="nav-logo-accent">EDIT</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#features">Workspaces</a></li>
          <li><a href="#benefits">Savings Flow</a></li>
          <li><a href="#providers">Providers</a></li>
          <li><a href="#testimonials">Creators</a></li>
          <li><a href="#sandbox">Playground</a></li>
        </ul>
        <div className="nav-actions">
          <Button className="nav-button">Get Started</Button>
          <button
            className={`nav-burger ${menuOpen ? "nav-burger-open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nav-mobile-drawer ${menuOpen ? "nav-mobile-drawer-open" : ""}`}>
          <div className="nav-drawer-header">
            <a href="#" className="nav-logo" onClick={handleLinkClick}>
              <img src="/favicon.png" alt="PromptEdit logo" className="nav-logo-icon" />
              <span className="nav-logo-text">PROMPT<span className="nav-logo-accent">EDIT</span></span>
            </a>
            <button className="nav-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <ul>
            <li><a href="#features" onClick={handleLinkClick}>Workspaces</a></li>
            <li><a href="#benefits" onClick={handleLinkClick}>Savings Flow</a></li>
            <li><a href="#providers" onClick={handleLinkClick}>Providers</a></li>
            <li><a href="#testimonials" onClick={handleLinkClick}>Creators</a></li>
            <li><a href="#sandbox" onClick={handleLinkClick}>Playground</a></li>
          </ul>
          <div className="nav-drawer-cta">
            <Button onClick={handleLinkClick} style={{ width: "100%", justifyContent: "center" }}>Get Started</Button>
          </div>
        </div>
      </nav>
    </>
  );
}
