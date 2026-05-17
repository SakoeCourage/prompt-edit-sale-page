"use client";

import React, { useState } from "react";
import styles from "@/app/page.module.css";

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "PromptEdit completely saved my budget. I was paying $80/month for various AI tools. Now I spend about $12/month in credits and get the exact same premium models.",
      name: "Sarah Connor",
      role: "Independent Content Creator",
      avatarInitials: "SC"
    },
    {
      quote: "The ability to compare Claude and GPT-4 answers side-by-side without switching tabs or stacking subscriptions is a total game changer for my writing workflow.",
      name: "Alex Rivers",
      role: "Freelance Copywriter",
      avatarInitials: "AR"
    },
    {
      quote: "I bought the PromptEdit launch discount credit pack and it's lasted me three months of intensive testing. It's so nice not having another monthly bill.",
      name: "David Chen",
      role: "Digital Entrepreneur",
      avatarInitials: "DC"
    }
  ];

  return (
    <section className={styles.sectionLight} style={{ backgroundColor: "#fafafa" }}>
      <div className={styles.testimonialSlider}>
        <div className={styles.testimonialQuote}>
          "{testimonials[currentTestimonial].quote}"
        </div>
        <div className={styles.testimonialDivider}></div>
        <div className={styles.testimonialControls}>
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorAvatar}>
              {testimonials[currentTestimonial].avatarInitials}
            </div>
            <div className={styles.authorMeta}>
              <h5>{testimonials[currentTestimonial].name}</h5>
              <p>{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <div className={styles.sliderArrows}>
            <button
              className={styles.sliderArrowBtn}
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              ←
            </button>
            <button
              className={styles.sliderArrowBtn}
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
