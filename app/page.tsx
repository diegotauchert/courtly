"use client"

import { useContext } from "react";
import { ChevronLeft } from "lucide-react"
import { Container } from "@/components/layout/Container";
import { SelectWidget } from "@/components/widgets/Select";
import { locations as locationsData, duration as durationData } from "./data"
import { AppContext } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { FormUser } from "@/components/modules/FormUser";
import { FullCalendar } from "@/components/modules/FullCalendar";

const Home = () => {
  const { 
    selectedDate, 
    setSelectedDate, 
    setLocation, 
    setDuration, 
    showLastForm, 
    setShowLastForm, 
    location, 
    duration 
  } = useContext(AppContext);
  const hasDateSelected = Boolean(selectedDate);

  const handleReset = () => {
    setSelectedDate(null)
    setShowLastForm(false)
  }

  return (
    <Container fitWidth={!Boolean(selectedDate)}>
      <div className="md:w-2/6 border-0 border-solid border-r border-gray-200 p-7">
        <h2 className="flex items-center text-2xl font-bold mb-8 leading-5">
          {hasDateSelected && 
            <Button 
              variant="ghost" 
              size="xs"
              title="Reset Form"
              onClick={handleReset} 
            >
              <ChevronLeft />
            </Button>
          }
          Book a Court
        </h2>
        <div className="space-y-4">
          <SelectWidget label="Location" data={locationsData} setValue={setLocation} selectValue={location} />
          <SelectWidget label="Duration" data={durationData} setValue={setDuration} selectValue={duration} />
        </div>
      </div>
      <div className="md:w-4/6 p-6">
        {showLastForm ? <FormUser /> : <FullCalendar />}
      </div>
    </Container>
  )
}

export default Home