"use client"

import { useContext } from "react";
import { Container } from "@/components/layout/Container";
import { SelectWidget } from "@/components/widgets/Select";
import { locations as locationsData, duration as durationData } from "./data"
import { CalendarWidget } from "@/components/widgets/Calendar"
import { TimeSlotsWidget } from "@/components/widgets/TimeSlots"
import { AppContext } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react"

const Home = () => {
  const { selectedDate, setSelectedDate, setLocation, setDuration } = useContext(AppContext);
  const hasDateSelected = Boolean(selectedDate);

  return (
    <Container fitWidth={!Boolean(selectedDate)}>
      <div className="md:w-2/6 border-0 border-solid border-r border-gray-200 p-7">
        <h2 className="flex items-center text-2xl font-bold mb-8 leading-5">
          {hasDateSelected && 
            <Button 
              variant="ghost" 
              size="xs"
              onClick={() => setSelectedDate(null)} 
            >
              <ChevronLeft />
            </Button>
          }
          Book a Court
        </h2>
        <div className="space-y-4">
          <SelectWidget label="Location" data={locationsData} setValue={setLocation} />
          <SelectWidget label="Duration" data={durationData} setValue={setDuration} />
        </div>
      </div>
      <div className="md:w-4/6 p-6">
        <h3 className="text-xl font-bold text-left mb-5 ml-2 flex items-center">Pick a date and time</h3>
        <div className="md:flex space-y-10 md:space-y-0">
          <CalendarWidget />
          {hasDateSelected && <TimeSlotsWidget />}
        </div>
      </div>
    </Container>
  )
}

export default Home