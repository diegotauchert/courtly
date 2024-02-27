import { useContext } from "react";
import { AppContext } from "@/contexts/AppContext";
import { CalendarWidget } from "@/components/widgets/Calendar";
import { TimeSlotsWidget } from "@/components/widgets/TimeSlots";

export const FullCalendar = () => {
  const { location, duration, selectedDate } = useContext(AppContext);
  const hasUserFilledBasicInformation = Boolean(location && duration)

  return (
    <>
      <h3 className="text-xl font-bold text-left mb-5 ml-2 flex items-center">Pick a date and time</h3>
      <div className="md:flex space-y-10 md:space-y-0 relative">
        {!hasUserFilledBasicInformation && <div className="backdrop-blur-sm absolute inset-0 z-10" />}
        <CalendarWidget />
        {selectedDate && <TimeSlotsWidget />}
      </div>
    </>
  );
};
