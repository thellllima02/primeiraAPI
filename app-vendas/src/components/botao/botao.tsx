import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  label: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({ label, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={styles.button}>
      {label}
    </button>
  );
}
