import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "footer";
  showArrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  style,
  ...props
}: ButtonProps) {
  let buttonClass = "btn-primary";
  let arrowSymbol = "↗";

  if (variant === "secondary") {
    buttonClass = "btn-secondary";
    arrowSymbol = "→";
  } else if (variant === "footer") {
    buttonClass = "btn-primary footer-btn";
  }

  return (
    <button className={`${buttonClass} ${className}`} style={style} {...props}>
      {children}
      {showArrow && (
        <span className="arrow-circle" style={{ marginLeft: "0.5rem" }}>
          {arrowSymbol}
        </span>
      )}
    </button>
  );
}
