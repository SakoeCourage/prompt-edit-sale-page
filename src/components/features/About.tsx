"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/page.module.css";
import { Badge } from "@/components/ui/Badge";
import { Heading, Text } from "@/components/ui/Typography";

interface CounterProps {
  target: string;
  suffix?: string;
  duration?: number;
}

function Counter({ target, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    const end = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (isNaN(end)) return;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [started, target, duration]);

  return <div ref={elementRef}>{count}{suffix}</div>;
}

export function About() {
  return (
    <section id="about" className={styles.sectionLight}>
      <div className={styles.aboutHeader}>
        <div>
          <Badge variant="gray">GROCERY STORE FOR AI</Badge>
          <Heading level={2}>Getting to know PromptEdit</Heading>
        </div>
        <div>
          <Text>
            Think of PromptEdit like a grocery store for AI. Instead of signing up for a bunch of different websites, learning a bunch of different interfaces, and stacking expensive subscriptions on top of each other, PromptEdit gives you one place to access all the major tools you need to create AI content.
          </Text>
        </div>
      </div>

      {/* Asymmetric Counter Metric Cards */}
      <div className={styles.aboutGrid}>
        {/* Card 1: Orange, 50% */}
        <div className={`${styles.aboutCard} ${styles.aboutCardOrange}`}>
          <div className={styles.aboutCardIcon}>💰</div>
          <div>
            <div className={styles.aboutCardMetric}>
              <Counter target="65" suffix="%" />
            </div>
            <p className={styles.aboutCardLabel}>Average creator savings compared to stacking active monthly subscriptions.</p>
          </div>
        </div>

        {/* Card 2: Black, 25% */}
        <div className={`${styles.aboutCard} ${styles.aboutCardBlack}`}>
          <div className={styles.aboutCardIcon}>⚡</div>
          <div>
            <div className={styles.aboutCardMetric}>
              <Counter target="1" suffix="" />
            </div>
            <p className={styles.aboutCardLabel}>Unified playground workspace to access all major foundational models.</p>
          </div>
        </div>

        {/* Card 3: Gray, 25% */}
        <div className={`${styles.aboutCard} ${styles.aboutCardGray}`}>
          <div className={styles.aboutCardIcon}>❌</div>
          <div>
            <div className={styles.aboutCardMetric}>
              <Counter target="0" suffix="" />
            </div>
            <p className={styles.aboutCardLabel} style={{ color: "#555" }}>
              Subscriptions required. No monthly bills, recurring commitments, or lock-ins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
