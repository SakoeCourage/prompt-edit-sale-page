"use client";

import React, { useRef, useState } from "react";
import styles from "@/app/page.module.css";
import { Button } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);
  const [img3Loaded, setImg3Loaded] = useState(false);

  return (
    <section ref={sectionRef} className={styles.sectionDark} style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
      {/* Loop video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroBgVideo}
      >
        <source
          src="/hero-bg.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.heroBgOverlay}></div>

      <div className={styles.heroMainWrapper}>
        <div className={styles.heroGridTwoColumns}>
          {/* Left Column: Headline and CTA */}
          <div className={styles.heroLeft}>
            <Heading level={1} style={{ fontSize: "var(--hero-title-size, 3.6rem)", lineHeight: "1.1", fontWeight: 900, letterSpacing: "-0.03em" }}>
              All Your AI Tools.
            </Heading>
            <div style={{ marginTop: "1rem", marginBottom: "1.8rem", display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <span style={{ 
                fontFamily: "Garamond, Baskerville, Georgia, serif", 
                fontStyle: "italic", 
                fontSize: "var(--hero-italic-size, 1.9rem)", 
                color: "#ff4500",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}>
                One Place.
              </span>
              <span style={{ 
                fontFamily: "Garamond, Baskerville, Georgia, serif", 
                fontStyle: "italic", 
                fontSize: "var(--hero-italic-size, 1.9rem)", 
                color: "#ffffff", 
                opacity: 0.95,
                fontWeight: 500,
                borderLeft: "1px solid rgba(255,255,255,0.15)",
                paddingLeft: "1.5rem",
                letterSpacing: "-0.01em"
              }}>
                Zero Subs.
              </span>
            </div>
            <Text variant="sub" style={{ marginTop: "0" }}>
              Instead of signing up for multiple websites, learning different interfaces, and stacking expensive subscriptions... PromptEdit gives you a single place to access all the major tools.
            </Text>
            <div className={styles.heroCtaWrapper}>
              <Button>Claim Credit Discount</Button>
              <div className={styles.activeUsers}>
                <div className={styles.avatarStack}>
                  <div className={styles.avatar} style={{ backgroundColor: "#ff4500" }}>A</div>
                  <div className={styles.avatar} style={{ backgroundColor: "#e0e0e0", color: "#111" }}>C</div>
                  <div className={styles.avatar} style={{ backgroundColor: "#333" }}>+9</div>
                </div>
                <div className={styles.activeUserCount}>
                  <h4>15K+</h4>
                  <p>Active Creators</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Credit Cards stack */}
          <div className={styles.heroRightCards}>
            <div className={styles.cardContainer}>
              {/* Card 1: Orange - Sunlit Cyclist Video */}
              <div className={`${styles.creditCard} ${styles.cardOrange}`} style={{ color: "white" }}>
                {!videoLoaded && <div className={styles.cardMediaLoader} />}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  onPlay={() => setVideoLoaded(true)}
                  className={styles.heroCardBgImg}
                  style={{ opacity: videoLoaded ? 1 : 0, transition: "opacity 0.5s ease-out" }}
                >
                  <source
                    src="/feat-videos/vecteezy_back-view-low-angle-tracking-asian-women-orange-cyclist_3488451.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.heroCardOverlay} />
                <div className={styles.heroCardContent}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className={styles.cardChip} style={{ background: "rgba(255, 69, 0, 0.85)", color: "white", borderRadius: "6px", padding: "0.25rem 0.5rem", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "1px" }}>
                      RUNWAY GEN-3
                    </div>
                    <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-geist-mono, monospace)" }}>0.0150 pe</span>
                  </div>
                  <div className={styles.cardMiddle} style={{ marginTop: "auto" }}>
                    <div className={styles.cardNumber} style={{ fontSize: "0.7rem", opacity: 0.8, letterSpacing: "1.5px", fontFamily: "var(--font-geist-mono, monospace)" }}>
                      ASSET ID: VD-302
                    </div>
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardHolder}>
                      <label style={{ fontSize: "0.6rem", opacity: 0.5, textTransform: "uppercase" }}>Prompt Outcome</label>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, display: "block", marginTop: "0.1rem" }}>Sunlit Cyclist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Silver - Fiction Landscape */}
              <div className={`${styles.creditCard} ${styles.cardSilver}`} style={{ color: "white" }}>
                {!img2Loaded && <div className={styles.cardMediaLoader} />}
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop" 
                  alt="Emerald Valleys Synthesized" 
                  onLoad={() => setImg2Loaded(true)}
                  className={styles.heroCardBgImg}
                  style={{ opacity: img2Loaded ? 1 : 0, transition: "opacity 0.5s ease-out" }}
                />
                <div className={styles.heroCardOverlay} />
                <div className={styles.heroCardContent}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className={styles.cardChip} style={{ background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(4px)", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "6px", padding: "0.25rem 0.5rem", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "1px" }}>
                      SDXL ULTRA
                    </div>
                    <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-geist-mono, monospace)" }}>0.0018 pe</span>
                  </div>
                  <div className={styles.cardMiddle} style={{ marginTop: "auto" }}>
                    <div className={styles.cardNumber} style={{ fontSize: "0.7rem", opacity: 0.8, letterSpacing: "1.5px", fontFamily: "var(--font-geist-mono, monospace)" }}>
                      ASSET ID: SD-401
                    </div>
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardHolder}>
                      <label style={{ fontSize: "0.6rem", opacity: 0.5, textTransform: "uppercase" }}>Prompt Outcome</label>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, display: "block", marginTop: "0.1rem" }}>Emerald Valleys</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Black - Abstract Fluid */}
              <div className={`${styles.creditCard} ${styles.cardBlack}`} style={{ color: "white" }}>
                {!img3Loaded && <div className={styles.cardMediaLoader} />}
                <img 
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop" 
                  alt="Cosmic Fluid Art Synthesized" 
                  onLoad={() => setImg3Loaded(true)}
                  className={styles.heroCardBgImg}
                  style={{ opacity: img3Loaded ? 1 : 0, transition: "opacity 0.5s ease-out" }}
                />
                <div className={styles.heroCardOverlay} />
                <div className={styles.heroCardContent}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className={styles.cardChip} style={{ background: "rgba(0, 0, 0, 0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "0.25rem 0.5rem", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "1px" }}>
                      FLUX.1 PRO
                    </div>
                    <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-geist-mono, monospace)" }}>0.0040 pe</span>
                  </div>
                  <div className={styles.cardMiddle} style={{ marginTop: "auto" }}>
                    <div className={styles.cardNumber} style={{ fontSize: "0.7rem", opacity: 0.8, letterSpacing: "1.5px", fontFamily: "var(--font-geist-mono, monospace)" }}>
                      ASSET ID: FL-009
                    </div>
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardHolder}>
                      <label style={{ fontSize: "0.6rem", opacity: 0.5, textTransform: "uppercase" }}>Prompt Outcome</label>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, display: "block", marginTop: "0.1rem" }}>Cosmic Fluid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
