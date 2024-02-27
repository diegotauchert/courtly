import { Dispatch, SetStateAction } from 'react';

export interface AppContextInterface {
  selectedDate: Date | null, 
  setSelectedDate: Dispatch<SetStateAction<Date | null>>,
  selectedTime: string | null, 
  setSelectedTime: Dispatch<SetStateAction<string | null>>,
  location: string | null, 
  setLocation: Dispatch<SetStateAction<string | null>>,
  duration: string | null, 
  setDuration: Dispatch<SetStateAction<string | null>>
}