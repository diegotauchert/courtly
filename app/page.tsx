"use client"

import { Container } from "@/components/layout/Container";
import { SelectWidget } from "@/components/widgets/Select";
import { locations as locationsData, duration as durationData } from "./data"
import { CalendarWidget } from "@/components/widgets/Calendar"
import { TimeSlotsWidget } from "@/components/widgets/TimeSlots"

const Home = () => (
    <Container>
      <div className="md:w-2/6 border border-r border-solid border-gray-200 p-7">
        <h2 className="text-2xl font-bold mb-5">Book a Court</h2>
        <div className="space-y-4">
          <SelectWidget label="Location" data={locationsData} />
          <SelectWidget label="Duration" data={durationData} />
        </div>
      </div>
      <div className="md:w-4/6 p-6">
        <h3 className="text-xl font-bold text-left mb-5 ml-2">Pick a date and time</h3>
        <div className="md:flex space-y-10 md:space-y-0">
          <CalendarWidget />
          <TimeSlotsWidget />
        </div>
      </div>
    </Container>
)

export default Home