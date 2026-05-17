"use client";

import React, { useRef } from "react";
import styles from "@/app/page.module.css";
import { Heading, Text } from "@/components/ui/Typography";

export function HeroSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className={styles.sectionDark} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "6rem", paddingBottom: "6rem" }}>
      {/* Background overlay blending with Hero */}
      <div className={styles.heroBgOverlay} style={{ background: "rgba(11, 12, 16, 0.94)" }}></div>

      <div className={styles.heroMainWrapper} style={{ gap: "3.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <Heading level={2} style={{ textTransform: "uppercase", letterSpacing: "-0.03em" }}>
            Why PromptEdit
          </Heading>
          <Text variant="sub" style={{ marginTop: "1rem", color: "#aaa", lineHeight: "1.6", textAlign: "center", margin: "1rem auto 0 auto", maxWidth: "100%" }}>Think of PromptEdit like a grocery store for AI. Instead of signing up for a bunch of different websites, learning a bunch of different interfaces, and stacking expensive subscriptions on top of each other, PromptEdit gives you one place to access all the major tools you need to create AI content.</Text>
        </div>

        <div className={styles.heroBottomSteps} style={{ borderTop: "none", marginTop: 0 }}>
          {/* Scroll-scrubbed Horizontal Progress Bar */}
          <div className={styles.stepsProgressContainer}>
            <div className={styles.stepsProgressLineActive} />
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.horizontalStepCard}>
              <span className={styles.stepNumber}>STEP 01</span>
              <Heading level={3}>Pick Your AI Model</Heading>
              <Text variant="lead">Select from GPT-4o, Claude 3.5, Gemini, Stable Diffusion, or Flux in a single dashboard.</Text>
            </div>

            <div className={styles.horizontalStepCard}>
              <span className={styles.stepNumber}>STEP 02</span>
              <Heading level={3}>Use what you need</Heading>
              <Text variant="lead">Test outputs, refine prompts, and switch between your favorite models in a single playground with no friction.</Text>
            </div>

            <div className={styles.horizontalStepCard}>
              <span className={styles.stepNumber}>STEP 03</span>
              <Heading level={3}>No Subscription Bill</Heading>
              <Text variant="lead">Only pay for what you actually use by purchasing AI credits. Think of it like buying gas.</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
