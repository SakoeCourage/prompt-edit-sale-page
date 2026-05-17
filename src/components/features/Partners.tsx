import React from "react";
import styles from "@/app/page.module.css";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Typography";

export function Partners() {
  return (
    <section id="partners" className={styles.sectionDark} style={{ position: "relative" }}>
      {/* Frosted Glass Backdrop Blur Overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 50% 30%, rgba(15, 16, 22, 0.3) 0%, rgba(10, 11, 15, 0.65) 100%)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <div className={styles.partnersGrid} style={{ position: "relative", zIndex: 1 }}>
        {/* Left card */}
        <div className={styles.partnerLeftCard}>
          <div>
            <Heading level={2} style={{ fontSize: "var(--partners-title-size, 2.8rem)", marginBottom: "1rem" }}>
              Real-Time AI Router Integrations
            </Heading>
            <p style={{ color: "#888888", fontSize: "0.95rem", lineHeight: 1.6 }}>
              PromptEdit connects you directly to the raw, premium APIs of all major AI labs with low latency.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "2rem" }}>
            <div style={{ fontSize: "var(--partners-stat-size, 3rem)", fontWeight: 900, letterSpacing: "-0.04em" }}>100%</div>
            <div style={{ fontSize: "0.75rem", color: "#888888", maxWidth: "160px", lineHeight: 1.4 }}>
              Direct API integrations with no middleman markup or subscription limits.
            </div>
          </div>
        </div>

        {/* Right 2x2 brands grid */}
        <div className={styles.partnerRightGrid}>
          <div className={styles.partnerBrandCard}>
            <span className={styles.partnerLogoText} style={{ color: "#ff4500" }}>OpenAI</span>
            <p style={{ fontSize: "0.75rem", opacity: 0.6 }}>GPT-4o & GPT-4 Turbo</p>
          </div>
          <div className={styles.partnerBrandCard}>
            <span className={styles.partnerLogoText} style={{ color: "#ffffff" }}>Anthropic</span>
            <p style={{ fontSize: "0.75rem", opacity: 0.6 }}>Claude 3.5 Sonnet & Haiku</p>
          </div>
          <div className={styles.partnerBrandCard}>
            <span className={styles.partnerLogoText} style={{ color: "#e0e0e0" }}>Flux Labs</span>
            <p style={{ fontSize: "0.75rem", opacity: 0.6 }}>Flux.1 Schnell & Dev</p>
          </div>
          <div className={`${styles.partnerBrandCard} ${styles.partnerTextCard}`}>
            <p>ONE CREDIT POOL TO ACCESS EVERY FOUNDATIONAL AI MODEL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
