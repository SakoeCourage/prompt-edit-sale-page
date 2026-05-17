"use client";

import React from "react";
import styles from "@/app/page.module.css";

export function Testimonials() {
  const row1 = [
    {
      name: "Stripe",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.998 9.805c0-1.077-.852-1.442-2.127-1.442-1.636 0-3.155.513-4.526 1.258l-.872-3.896c1.654-.699 3.655-1.157 5.673-1.157 4.148 0 6.643 1.942 6.643 5.485 0 4.137-5.592 4.908-5.592 6.435 0 .543.435.792 1.137.792 1.91 0 3.696-.708 5.163-1.554l.872 3.867c-1.745.922-3.957 1.406-6.132 1.406-4.223 0-6.843-1.952-6.843-5.534 0-4.326 5.826-5.078 5.826-6.66z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: "Vercel",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 20H22L12 2Z" />
        </svg>
      )
    },
    {
      name: "Supabase",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.35 2L4 12.83h7.32L9.65 22 19 11.17h-7.32L13.35 2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: "Linear",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 13v1c0 1.1.9 2 2 2h2v3.93zm4.9-3.24c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V6h2c1.1 0 2-.9 2-2v.41c2.93 1.19 5 4.06 5 7.41 0 3.3-2.03 6.13-4.9 7.32z" />
        </svg>
      )
    },
    {
      name: "Figma",
      icon: (
        <svg width="16" height="18" viewBox="0 0 16 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 24c2.21 0 4-1.79 4-4v-4H4c-2.21 0-4 1.79-4 4s1.79 4 4 4zM4 12c-2.21 0-4 1.79-4 4s1.79 4 4 4h4v-8H4zM4 0C1.79 0 0 1.79 0 4s1.79 4 4 4h4V0H4zM12 0c-2.21 0-4 1.79-4 4v4h4c2.21 0 4-1.79 4-4s-1.79-4-4-4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4h4V8h-4z" />
        </svg>
      )
    },
    {
      name: "Notion",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.1 2h15.8c1.1 0 2.1 1 2.1 2.1v15.8c0 1.1-1 2.1-2.1 2.1H4.1C3 22 2 21 2 19.9V4.1C2 3 3 2 4.1 2zm1.7 3.5v13h2.3V9.7l5.9 8.8h2.3v-13h-2.3v8.8L8.1 5.5H5.8z" />
        </svg>
      )
    },
    {
      name: "Arc",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21c3-3 9-3 12 0" />
          <path d="M5 17c2.5-2.5 7.5-2.5 10 0" />
          <path d="M12 3a9 9 0 0 1 9 9v9H3v-9a9 9 0 0 1 9-9z" />
        </svg>
      )
    },
    {
      name: "Retool",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
      )
    },
    {
      name: "Loom",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      )
    },
    {
      name: "Resend",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      )
    }
  ];

  const row2 = [
    {
      name: "Clerk",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      name: "Railway",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11h20v2H2zm0-4h20v2H2zm0 8h20v2H2z" />
        </svg>
      )
    },
    {
      name: "Sentry",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    },
    {
      name: "Pinecone",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2zm0 4.85L18.15 19H5.85L12 6.85z" />
        </svg>
      )
    },
    {
      name: "Midjourney",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12A10 10 0 0 1 12 22M2 12A10 10 0 0 1 12 2M12 12L22 2M12 12L2 22" />
        </svg>
      )
    },
    {
      name: "ElevenLabs",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10v4M6 6v12M10 3v18M14 8v8M18 5v14M22 10v4" />
        </svg>
      )
    },
    {
      name: "Scale AI",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      )
    },
    {
      name: "Framer",
      icon: (
        <svg width="16" height="18" viewBox="0 0 16 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h16v8H8zm0 8h16v8H0zm8 8h8v8z" />
        </svg>
      )
    },
    {
      name: "Runway",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 13v1c0 1.1.9 2 2 2h2v3.93z" />
        </svg>
      )
    },
    {
      name: "LangChain",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.sectionLight} style={{ backgroundColor: "#fafafa", padding: "5rem 0" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ 
              color: "#ed1c24", 
              fontWeight: 800, 
              fontSize: "0.8rem", 
              letterSpacing: "0.15em", 
              textTransform: "uppercase",
              background: "rgba(237, 28, 36, 0.07)",
              padding: "0.55rem 1.2rem",
              borderRadius: "9999px",
              display: "inline-block"
            }}>
              Trusted By
            </span>
            <h2 style={{ 
              fontSize: "var(--section-title-size, 2.5rem)", 
              fontWeight: 900, 
              marginTop: "1.25rem", 
              color: "#111111",
              letterSpacing: "-0.03em"
            }}>
              Powering Creative Teams Globally
            </h2>
            <p style={{ 
              color: "#666666", 
              fontSize: "1.05rem", 
              maxWidth: "600px", 
              margin: "0.85rem auto 0",
              lineHeight: 1.6
            }}>
              PromptEdit is trusted by professional builders, copywriters, digital designers, and creators at industry-leading organizations.
            </p>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-track-left">
            {row1.concat(row1).map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="marquee-item">
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container" style={{ marginTop: "0.5rem" }}>
          <div className="marquee-track-right">
            {row2.concat(row2).map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="marquee-item">
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
