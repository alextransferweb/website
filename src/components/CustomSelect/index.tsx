"use client";

import { useState, useRef, useEffect } from "react";

import { ChevronIcon } from "../icons";

import styles from "./customSelect.module.css";

export interface ICustomSelectOption {
  value: string;
  label: React.ReactNode;
}

interface IProps {
  options: ICustomSelectOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const CustomSelect = ({ options, defaultValue, onChange }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ICustomSelectOption | null>(
    options.find((el) => el.value === defaultValue) || null,
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSelected(
      (prev) => options.find((el) => el.value === prev?.value) || null,
    );
  }, [options]);

  const handleSelect = (option: ICustomSelectOption) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div ref={ref} className={styles.selectContainer}>
      <button
        type="button"
        className={`${styles.selectButton} ${
          isOpen ? styles.selectButtonOpen : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selected?.label || ""}</span>
        <div
          className={`${styles.selectArrow} ${
            isOpen ? styles.selectArrowOpen : ""
          }`}
        >
          <ChevronIcon />
        </div>
      </button>

      <ul
        className={`${styles.selectDropdown} ${
          isOpen ? styles.selectDropdownOpen : ""
        }`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={`${styles.selectOption} ${
              option.value === selected?.value
                ? styles.selectOptionSelected
                : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
