"use client"

import { memo, useContext, useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AppContext } from "@/contexts/AppContext";
import { format } from 'date-fns';
import { timeSlot } from "app/data";

const TimeSlotsWidget = memo(() => {
  const { selectedDate, setSelectedTime, selectedTime } = useContext(AppContext);
  const formattedDate = selectedDate ? format(new Date(selectedDate), 'EEEE, MMMM d') : '';
  const times = timeSlot(selectedDate);

  const handleButtonClick = (slot: string) => {
    setSelectedTime(slot === selectedTime ? null : slot);
  };

  return (
    <div className="flex items-start justify-center flex-col md:mr-8">
      <Label className="mb-5 text-md mt-1.5 whitespace-nowrap">{formattedDate}</Label>
      <div className="slots space-y-4">
        {
          times && times?.length > 0 ? 
            times.map((slot) => <Button key={slot} variant="outline" size="lg" active={slot === selectedTime} onClick={() => handleButtonClick(slot)}>{slot}</Button>) : 
            <span>Busy day, we have no free time today</span>
          }
      </div>
    </div>
  )
})

TimeSlotsWidget.displayName = 'TimeSlotsWidget';

export { TimeSlotsWidget };