"use client";
import { IFieldDate } from "@/interface/fieldForm";
import styles from "../date.module.scss";
import { CSSProperties, useEffect, useState } from "react";

export function useDate({
  onChange,
  value,
}: {
  onChange?: (key: Date) => void;
  value?: IFieldDate;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    () => value ?? undefined
  );
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const fullWidth: CSSProperties = {
    width: "100%",
    maxWidth: "none",
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const stylesInLine = {
    months: fullWidth,
    root: fullWidth,
    month: fullWidth,
    table: fullWidth,
    month_grid: fullWidth,
  };

  const formatters = {
    formatWeekdayName: (day: Date) =>
      day.toLocaleDateString("fa-IR", { weekday: "long" }),
  };

  const handleMonthChange = (month: Date) => {
    setCurrentMonth(month);
  };

  useEffect(() => {
    const allBtns = document.querySelectorAll(".rdp-day_button");

    const todayButton = document.querySelector(".rdp-selected .rdp-day_button");

    if (todayButton) {
      todayButton.classList.add(styles.todayButton);
    }

    return () => {
      allBtns.forEach((btn) => btn.classList.remove(styles.todayButton));
    };
  }, [selectedDate, currentMonth]);

  useEffect(() => {
    if (selectedDate && onChange) {
      onChange?.(selectedDate);
    }
  }, [selectedDate]);

  return {
    selectedDate,
    setSelectedDate,
    handleMonthChange,
    stylesInLine,
    today,
    formatters,
  };
}
