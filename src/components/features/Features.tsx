"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Typography";

// Premium Stateful Video Component with Shimmer Loading Placeholder & Smooth Fade-in
function BentoVideo({ src, className, style }: { src: string; className?: string; style?: React.CSSProperties }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* Premium Shimmer Skeleton Placeholder */}
      {!isLoaded && (
        <div className={styles.bentoPlaceholder}>
          {/* Subtle translucent camera vector outline */}
          <div style={{ opacity: 0.15, transform: "scale(1.2)" }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 7l-7 5 7 5V7z" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </div>
        </div>
      )}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onLoadedData={() => setIsLoaded(true)}
      />
    </div>
  );
}

export function Features() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-switch active aspect ratio frame every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="features" 
      className={styles.sectionLight} 
      style={{ 
        backgroundColor: "#ffffff", 
        padding: "5rem 6% 6rem 6%",
        alignItems: "flex-start"
      }}
    >
      <div className={styles.bentoContainer} style={{ flexShrink: 0, width: "100%" }}>
        {/* Bento Grid Header */}
        <div style={{ maxWidth: "600px", marginBottom: "3rem" }}>
          <Badge variant="gray">THE GALLERY</Badge>
          <Text style={{ marginTop: "1rem" }}>
            <span className={styles.textHighlight}>Generate</span> cinematic <span className={styles.textHighlight}>video</span>, <span className={styles.textHighlight}>high-fidelity images</span>, and <span className={styles.textHighlight}>creative assets</span> using the world's leading models on demand—all from a single pay-as-you-go credit pool.
          </Text>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          
          {/* Card 1: Cinematic Nature Waterfall (Tall, row span 2) -> TikTok & Instagram */}
          <div className={`${styles.bentoCard} ${styles.bentoRow2}`}>
            <div className={styles.bentoVisualContainer}>
              <BentoVideo 
                src="/feat-videos/vecteezy_waterfall-in-a-wild-nature_2140013.mp4" 
                className={styles.bentoVisualImg}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className={styles.bentoOverlay}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800 }}>Water Synthesis & Simulation</h4>
                    <p style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.25rem" }}>Cinematic Waterfall</p>
                  </div>
                  {/* Platform Capsule pill */}
                  <div style={{ display: "flex", gap: "0.4rem", background: "rgba(255,255,255,0.07)", padding: "0.25rem 0.5rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.12)", alignItems: "center" }}>
                    {/* TikTok SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.98-1.72-.08-.07-.15-.14-.23-.22v6.62c.03 1.93-.45 3.92-1.63 5.43-1.6 2.12-4.3 3.32-6.94 3.01-2.93-.27-5.59-2.39-6.38-5.26-.95-3.32.72-7.05 3.93-8.31.81-.33 1.69-.5 2.56-.5 1.34 0 2.58.4 3.61 1.08V.02z"/>
                    </svg>
                    {/* Instagram SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ffffff" }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
                
                {/* Sample Prompt on Hover */}
                <div className={styles.bentoPromptBlock}>
                  <p style={{ fontSize: "0.65rem", lineHeight: 1.3, opacity: 0.9, margin: 0, fontStyle: "italic" }}>
                    "Cinematic 8k drone shot of a majestic waterfall cascading down a lush tropical cliffside into a crystal clear pool, mist rising, photorealistic water simulation."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Cinematic Urban Time-Lapse (Wide, column span 2) -> YouTube & Facebook */}
          <div className={`${styles.bentoCard} ${styles.bentoCol2}`}>
            <div className={styles.bentoVisualContainer}>
              <BentoVideo 
                src="/feat-videos/vecteezy_time-lapse-at-floor-level-of-vehicles-driving-on-the-street_1616219.mp4" 
                className={styles.bentoVisualImg}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className={styles.bentoOverlay}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <div>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 800 }}>Hyper-Lapse City Street</h4>
                    <p style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.25rem" }}>Urban Time-Lapse</p>
                  </div>
                  {/* Platform Capsule pill */}
                  <div style={{ display: "flex", gap: "0.45rem", background: "rgba(255,255,255,0.07)", padding: "0.25rem 0.5rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.12)", alignItems: "center" }}>
                    {/* YouTube SVG */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
                      <path d="M23.498 6.163c-.272-.98-1.09-1.755-2.127-2.025C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.37.538c-1.036.27-1.855 1.045-2.128 2.025C0 8.04 0 12 0 12s0 3.96.502 5.837c.273.98 1.09 1.755 2.128 2.025C4.5 20.4 12 20.4 12 20.4s7.5 0 9.37-.538c1.037-.27 1.855-1.045 2.128-2.025C24 15.96 24 12 24 12s0-3.96-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    {/* Facebook SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Sample Prompt on Hover */}
                <div className={styles.bentoPromptBlock}>
                  <p style={{ fontSize: "0.65rem", lineHeight: 1.3, opacity: 0.9, margin: 0, fontStyle: "italic" }}>
                    "Floor-level time-lapse of city traffic at sunset, cars speeding with long light trails, towering skyscrapers, cinematic neon color grading."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Aerial Water Simulation (Standard width & height) -> Instagram & Facebook */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoVisualContainer}>
              <BentoVideo 
                src="/feat-videos/vecteezy_aerial-view-of-white-sand-beach-and-water-surface-texture_7536781.mp4" 
                className={styles.bentoVisualImg}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className={styles.bentoOverlay}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800 }}>Aerial Fluid Simulation</h4>
                    <p style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.25rem" }}>Beach Water Texture</p>
                  </div>
                  {/* Platform Capsule pill */}
                  <div style={{ display: "flex", gap: "0.4rem", background: "rgba(255,255,255,0.07)", padding: "0.25rem 0.5rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.12)", alignItems: "center" }}>
                    {/* Instagram SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ffffff" }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    {/* Facebook SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Sample Prompt on Hover */}
                <div className={styles.bentoPromptBlock}>
                  <p style={{ fontSize: "0.65rem", lineHeight: 1.3, opacity: 0.9, margin: 0, fontStyle: "italic" }}>
                    "Epic aerial view of a pristine white sand beach, turquoise ocean waves crashing and creating detailed white foam patterns, hyper-realistic fluid simulation."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Highline Cliff Drone Shot (Standard width & height) -> TikTok & Instagram */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoVisualContainer}>
              <BentoVideo 
                src="/feat-videos/vecteezy_man-highlining-between-steep-rock-cliffs-in-a-canyon_76744867.mp4" 
                className={styles.bentoVisualImg}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className={styles.bentoOverlay}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800 }}>Man Highlining Canyon</h4>
                    <p style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.25rem" }}>Drone Action Shot</p>
                  </div>
                  {/* Platform Capsule pill */}
                  <div style={{ display: "flex", gap: "0.4rem", background: "rgba(255,255,255,0.07)", padding: "0.25rem 0.5rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.12)", alignItems: "center" }}>
                    {/* TikTok SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.98-1.72-.08-.07-.15-.14-.23-.22v6.62c.03 1.93-.45 3.92-1.63 5.43-1.6 2.12-4.3 3.32-6.94 3.01-2.93-.27-5.59-2.39-6.38-5.26-.95-3.32.72-7.05 3.93-8.31.81-.33 1.69-.5 2.56-.5 1.34 0 2.58.4 3.61 1.08V.02z"/>
                    </svg>
                    {/* Instagram SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ffffff" }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
                
                {/* Sample Prompt on Hover */}
                <div className={styles.bentoPromptBlock}>
                  <p style={{ fontSize: "0.65rem", lineHeight: 1.3, opacity: 0.9, margin: 0, fontStyle: "italic" }}>
                    "Thrilling drone tracking shot of a man walking on a highline slackline stretched between steep red canyon cliffs, massive depth, golden hour light."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Active Sports Tracking (Tall, row span 2) -> TikTok & Instagram & WhatsApp */}
          <div className={`${styles.bentoCard} ${styles.bentoRow2}`}>
            <div className={styles.bentoVisualContainer}>
              <BentoVideo 
                src="/feat-videos/vecteezy_back-view-low-angle-tracking-asian-women-orange-cyclist_3488451.mp4" 
                className={styles.bentoVisualImg}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className={styles.bentoOverlay}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800 }}>Cinematic Subject Tracking</h4>
                    <p style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.25rem" }}>Orange Cyclist Sunset</p>
                  </div>
                  {/* Platform Capsule pill */}
                  <div style={{ display: "flex", gap: "0.4rem", background: "rgba(255,255,255,0.07)", padding: "0.25rem 0.5rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.12)", alignItems: "center" }}>
                    {/* TikTok SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.98-1.72-.08-.07-.15-.14-.23-.22v6.62c.03 1.93-.45 3.92-1.63 5.43-1.6 2.12-4.3 3.32-6.94 3.01-2.93-.27-5.59-2.39-6.38-5.26-.95-3.32.72-7.05 3.93-8.31.81-.33 1.69-.5 2.56-.5 1.34 0 2.58.4 3.61 1.08V.02z"/>
                    </svg>
                    {/* Instagram SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ffffff" }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    {/* WhatsApp SVG */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.198 1.451 4.85 1.453 5.464 0 9.909-4.446 9.912-9.913.002-2.647-1.02-5.136-2.877-6.997a9.83 9.83 0 0 0-6.99-2.872c-5.467 0-9.913 4.446-9.915 9.913-.001 1.77.464 3.5 1.348 5.013l-.974 3.56 3.646-.957z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Sample Prompt on Hover */}
                <div className={styles.bentoPromptBlock}>
                  <p style={{ fontSize: "0.65rem", lineHeight: 1.3, opacity: 0.9, margin: 0, fontStyle: "italic" }}>
                    "Low angle tracking shot from behind an Asian female cyclist wearing orange jersey riding along a mountain highway during a spectacular golden sunset."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Social Publishing Aspect Ratio Card (Wide, column span 2) */}
          <div className={`${styles.bentoCard} ${styles.bentoCol2}`} style={{ background: "linear-gradient(135deg, #1f1f26, #121216)", border: "1px solid rgba(237, 28, 36, 0.15)", position: "relative", minHeight: "220px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className={styles.bentoShareText}>
              <div className={styles.bentoShareBadgeWrapper}>
                <span className={styles.bentoBadge} style={{ background: "rgba(237, 28, 36, 0.1)", color: "#ed1c24", border: "1px solid rgba(237, 28, 36, 0.2)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  {/* Share Icon SVG */}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ed1c24" }}>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                  Social Ready
                </span>
              </div>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#ffffff", marginTop: "0.8rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                Share Instantly
              </h4>
              <p style={{ fontSize: "0.8rem", opacity: 0.7, color: "#cccccc", marginTop: "0.4rem", lineHeight: 1.45 }}>
                Export and share directly to TikTok, Instagram, YouTube, Facebook, and WhatsApp.
              </p>

              {/* Minimal Social Media Bubble Row directly below */}
              <div className={styles.bentoShareSocials}>
                {/* TikTok Mini */}
                <div className={styles.socialIconMini} title="TikTok">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.98-1.72-.08-.07-.15-.14-.23-.22v6.62c.03 1.93-.45 3.92-1.63 5.43-1.6 2.12-4.3 3.32-6.94 3.01-2.93-.27-5.59-2.39-6.38-5.26-.95-3.32.72-7.05 3.93-8.31.81-.33 1.69-.5 2.56-.5 1.34 0 2.58.4 3.61 1.08V.02z"/>
                  </svg>
                </div>
                {/* Instagram Mini */}
                <div className={styles.socialIconMini} title="Instagram">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                {/* YouTube Mini */}
                <div className={styles.socialIconMini} title="YouTube">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.163c-.272-.98-1.09-1.755-2.127-2.025C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.37.538c-1.036.27-1.855 1.045-2.128 2.025C0 8.04 0 12 0 12s0 3.96.502 5.837c.273.98 1.09 1.755 2.128 2.025C4.5 20.4 12 20.4 12 20.4s7.5 0 9.37-.538c1.037-.27 1.855-1.045 2.128-2.025C24 15.96 24 12 24 12s0-3.96-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                {/* Facebook Mini */}
                <div className={styles.socialIconMini} title="Facebook">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                {/* WhatsApp Mini */}
                <div className={styles.socialIconMini} title="WhatsApp">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.198 1.451 4.85 1.453 5.464 0 9.909-4.446 9.912-9.913.002-2.647-1.02-5.136-2.877-6.997a9.83 9.83 0 0 0-6.99-2.872c-5.467 0-9.913 4.446-9.915 9.913-.001 1.77.464 3.5 1.348 5.013l-.974 3.56 3.646-.957z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Animated Technical Wireframe Aspect Ratio Graphic with Authentic Brand SVGs */}
            <div className={styles.aspectRatioGraphicContainer}>
              {/* 16:9 Landscape Frame (YouTube/Widescreen) */}
              <div 
                className={`${styles.ratioFrame} ${styles.frameLandscape} ${activeIdx === 0 ? styles.activeFrame : ""}`}
                onClick={() => setActiveIdx(0)}
              >
                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", marginBottom: "0.2rem" }}>
                  {/* YouTube Icon */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.163c-.272-.98-1.09-1.755-2.127-2.025C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.37.538c-1.036.27-1.855 1.045-2.128 2.025C0 8.04 0 12 0 12s0 3.96.502 5.837c.273.98 1.09 1.755 2.128 2.025C4.5 20.4 12 20.4 12 20.4s7.5 0 9.37-.538c1.037-.27 1.855-1.045 2.128-2.025C24 15.96 24 12 24 12s0-3.96-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {/* Facebook Icon */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span>16:9</span>
              </div>

              {/* 1:1 Square Frame (Instagram/Facebook Feed) */}
              <div 
                className={`${styles.ratioFrame} ${styles.frameSquare} ${activeIdx === 1 ? styles.activeFrame : ""}`}
                onClick={() => setActiveIdx(1)}
              >
                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", marginBottom: "0.2rem" }}>
                  {/* Instagram Icon */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  {/* Facebook Icon */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span>1:1</span>
              </div>

              {/* 9:16 Portrait Frame (TikTok/WhatsApp Status) */}
              <div 
                className={`${styles.ratioFrame} ${styles.framePortrait} ${activeIdx === 2 ? styles.activeFrame : ""}`}
                onClick={() => setActiveIdx(2)}
              >
                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", marginBottom: "0.2rem" }}>
                  {/* TikTok Icon */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.98-1.72-.08-.07-.15-.14-.23-.22v6.62c.03 1.93-.45 3.92-1.63 5.43-1.6 2.12-4.3 3.32-6.94 3.01-2.93-.27-5.59-2.39-6.38-5.26-.95-3.32.72-7.05 3.93-8.31.81-.33 1.69-.5 2.56-.5 1.34 0 2.58.4 3.61 1.08V.02z"/>
                  </svg>
                  {/* WhatsApp Icon */}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.198 1.451 4.85 1.453 5.464 0 9.909-4.446 9.912-9.913.002-2.647-1.02-5.136-2.877-6.997a9.83 9.83 0 0 0-6.99-2.872c-5.467 0-9.913 4.446-9.915 9.913-.001 1.77.464 3.5 1.348 5.013l-.974 3.56 3.646-.957z"/>
                  </svg>
                </div>
                <span>9:16</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
