import React from "react";
import styles from "@/app/page.module.css";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  style?: React.CSSProperties;
}

export function Heading({ children, level = 2, className = "", style }: HeadingProps) {
  if (level === 1) {
    return (
      <h1 className={`${styles.heroTitle} ${className}`} style={style}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 className={`${styles.stepTitle} ${className}`} style={style}>
        {children}
      </h3>
    );
  }

  return (
    <h2 className={`${styles.aboutTitle} ${className}`} style={style}>
      {children}
    </h2>
  );
}

interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "sub" | "lead";
  className?: string;
  style?: React.CSSProperties;
}

export function Text({ children, variant = "body", className = "", style }: TextProps) {
  let textClass = "";
  if (variant === "sub") {
    textClass = styles.heroSubtitle;
  } else if (variant === "body") {
    textClass = styles.aboutParagraph;
  } else if (variant === "lead") {
    textClass = styles.stepDesc;
  }

  return (
    <p className={`${textClass} ${className}`} style={style}>
      {children}
    </p>
  );
}
