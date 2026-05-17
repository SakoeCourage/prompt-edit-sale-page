"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function Benefits() {
  const [activeBenefit, setActiveBenefit] = useState(0);

  // Auto transition for benefit cards stack every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const benefitsData = [
    {
      title: "NO SUBSCRIPTIONS",
      color: "linear-gradient(135deg, #ed1c24, #b30e16)",
      textColor: "#ffffff",
      desc: "Stop stacking monthly charges. Only pay for what you actually use by purchasing AI credits—think of it like buying gas for a car."
    },
    {
      title: "COMPLETE FREEDOM",
      color: "rgba(18, 18, 22, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      textColor: "#ffffff",
      desc: "Try every premium model, swap between different architectures instantly, and find exactly what matches your workflow with zero recurring bills."
    },
    {
      title: "SPECIAL OFFER",
      color: "linear-gradient(135deg, #e0e0e0, #a0a0a0)",
      textColor: "#111111",
      desc: "As a welcome offer for our launch, we put together a special discounted credit offer to help you get started right away."
    }
  ];

  return (
    <section id="benefits" className={styles.sectionLight}>
      <div className={styles.benefitsGrid}>
        {/* Benefits Left Card Stack Parallax */}
        <div className={styles.benefitsLeft}>
          <div className={styles.benefitsIndicators}>
            <div
              className={`${styles.indicatorDot} ${activeBenefit === 0 ? styles.indicatorDotActive : ""}`}
              onClick={() => setActiveBenefit(0)}
            ></div>
            <div
              className={`${styles.indicatorDot} ${activeBenefit === 1 ? styles.indicatorDotActive : ""}`}
              onClick={() => setActiveBenefit(1)}
            ></div>
            <div
              className={`${styles.indicatorDot} ${activeBenefit === 2 ? styles.indicatorDotActive : ""}`}
              onClick={() => setActiveBenefit(2)}
            ></div>
          </div>

          <div className={styles.benefitsCardStack}>
            {benefitsData.map((b, index) => {
              // Calculate dynamic positioning/stacking depth rotation
              const diff = (index - activeBenefit + 3) % 3;
              let zIndex = 3 - diff;
              let transform = `rotate(${diff * 6}deg) translate(${diff * 20}px, ${diff * 15}px) scale(${1 - diff * 0.08})`;
              let opacity = diff === 0 ? 1 : diff === 1 ? 0.7 : 0.4;

              return (
                <div
                  key={index}
                  className={styles.benefitsCard}
                  style={{
                    background: b.color,
                    color: b.textColor,
                    border: b.border || "none",
                    zIndex,
                    transform,
                    opacity,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em" }}>CREDIT BENEFITS</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>{b.title}</h3>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Right Copy column */}
        <div className={styles.benefitsRight}>
          <Badge variant="gray">BENEFITS</Badge>
          <Heading level={2}>Saving Money in the Process</Heading>
          <div className={styles.benefitsList}>
            <div className={styles.benefitsListItem}>
              <div className={styles.benefitsItemIcon}>✓</div>
              <div className={styles.benefitsItemText}>Zero Monthly Subscription Overhead</div>
            </div>
            <div className={styles.benefitsListItem}>
              <div className={styles.benefitsItemIcon}>✓</div>
              <div className={styles.benefitsItemText}>Access & Switch All Leading Models on Demand</div>
            </div>
            <div className={styles.benefitsListItem}>
              <div className={styles.benefitsItemIcon}>✓</div>
              <div className={styles.benefitsItemText}>Special Discounted Launch Credits Offer</div>
            </div>
          </div>
          <div className={styles.benefitsCtaRow}>
            <Button>Claim Welcome Offer</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
