"use client"

import React, { ReactNode, useState } from 'react';
import { AppContext } from '@/contexts/AppContext';

type IAppProviderProps = {
  children: ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [showLastForm, setShowLastForm] = useState<boolean>(false);

  const resetForm = () => {
    setSelectedTime(null)
    setSelectedDate(null)
    setShowLastForm(false)
  }

  return (
    <AppContext.Provider value={{ selectedDate, setSelectedDate, selectedTime, setSelectedTime, location, setLocation, duration, setDuration, showLastForm, setShowLastForm, resetForm }}>
      {children}
    </AppContext.Provider>
  );
}