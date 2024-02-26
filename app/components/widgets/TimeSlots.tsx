"use client"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function TimeSlotsWidget() {  
  return (
    <div className="flex justify-center flex-col md:mr-8">
      <Label className="mb-5 text-md">Saturday, January 27</Label>
      <div className="slots space-y-4">
        <Button variant="outline" size="lg">12:00pm</Button>
        <Button variant="outline" size="lg">12:30pm</Button>
        <Button variant="outline" size="lg">1:00pm</Button>
        <Button variant="outline" size="lg">1:30pm</Button>
        <Button variant="outline" size="lg">2:00pm</Button>
        <Button variant="outline" size="lg">2:30pm</Button>
      </div>
    </div>
  )
}