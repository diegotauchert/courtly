"use client"
import { useContext } from "react";
import { Calendar } from "@/components/ui/calendar";
import { availableDates } from "app/data";
import { AppContext } from "@/contexts/AppContext";

export function CalendarWidget() {
  const { selectedDate, setSelectedDate } = useContext(AppContext);
  const _Mock_availableDays = availableDates();
  
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={(date) => setSelectedDate(date as Date)}
      availableDays={_Mock_availableDays.map(day => day.date)}
      showOutsideDays={true}
      className="p-0 mr-12"
    />
  );
}
