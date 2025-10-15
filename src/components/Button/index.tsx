"use client";

import { ReactNode } from "react";

import styles from "./button.module.css";

interface IProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, onClick = () => {}, className }: IProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
