"use client"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { availableDates } from "app/data";

export function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const availableDays = availableDates();
  
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      availableDays={availableDays}
      showOutsideDays={true}
      className="p-0 mr-12"
    />
  );
}
