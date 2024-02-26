import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      showOutsideDays={false}
      className="p-0 mr-12"
    />
  );
}
