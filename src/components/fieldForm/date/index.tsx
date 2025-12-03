import React from "react";
import { DayPicker } from "react-day-picker/persian";
import "react-day-picker/style.css";
import styles from "./date.module.scss";
import { IFieldDate } from "@/interface/fieldForm";
import { useDate } from "./hooks/useDate";

export default function DateField({
  onChange,
  value,
}: {
  onChange?: (key: Date) => void;
  value?: IFieldDate;
}) {
  const {
    selectedDate,
    setSelectedDate,
    handleMonthChange,
    stylesInLine,
    today,
    formatters,
  } = useDate({
    onChange,
    value,
  });
  return (
    <div className={styles.date}>
      <DayPicker
        mode="single"
        selected={selectedDate}
        today={new Date()}
        required
        onSelect={(date: Date) => date && setSelectedDate(date)}
        onMonthChange={handleMonthChange}
        styles={stylesInLine}
        classNames={{
          nav: styles.nav,
          button_next: styles.nextPrevious,
          button_previous: styles.nextPrevious,
          chevron: "fill-[currentColor]",
          month_caption: styles.monthCaption,
          today: "text-[var(--accents-11)]",
          day: "font-normal",
        }}
        disabled={(date) => date < today}
        formatters={formatters}
        fromMonth={today}
      />
    </div>
  );
}
