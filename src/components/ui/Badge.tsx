import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "gray";
  style?: React.CSSProperties;
  className?: string;
}

export function Badge({ children, variant = "accent", style, className = "" }: BadgeProps) {
  const badgeClass = variant === "accent" ? "badge" : "badge-gray";
  return (
    <span className={`${badgeClass} ${className}`} style={style}>
      {children}
    </span>
  );
}
