"use client";

import { useState, KeyboardEvent } from "react";

import styles from "./animatedBurger.module.css";

interface IProps {
  size?: number;
  color?: string;
  initialOpen?: boolean;
  onToggle?: (open: boolean) => void;
  ariaLabel?: string;
}

const AnimatedBurger = ({
  size = 24,
  color = "#000",
  initialOpen = false,
  onToggle,
  ariaLabel = "Toggle menu",
}: IProps) => {
  const [open, setOpen] = useState<boolean>(initialOpen);

  function toggle() {
    setOpen((v) => {
      const next = !v;
      onToggle?.(next);
      return next;
    });
  }

  function onKey(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  const strokeWidth = Math.max(1, Math.round(size * 0.08));

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggle}
      onKeyDown={onKey}
      aria-expanded={open}
      aria-label={ariaLabel}
      style={{ width: size, height: size }}
    >
      <svg
        className={`${styles.icon} ${open ? styles.open : ""}`}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <path
          className={styles.lineTop}
          d="M3 6h18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className={styles.lineMiddle}
          d="M3 12h18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className={styles.lineBottom}
          d="M3 18h18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </button>
  );
};

export default AnimatedBurger;
