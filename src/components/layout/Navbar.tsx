import React from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        PROMPT<span>EDIT</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Tools</a>
        </li>
        <li>
          <a href="#benefits">Savings</a>
        </li>
        <li>
          <a href="#partners">Providers</a>
        </li>
        <li>
          <a href="#sandbox">Playground</a>
        </li>
      </ul>
      <Button style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}>
        Get Credits
      </Button>
    </nav>
  );
}
