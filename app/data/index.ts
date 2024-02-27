import { IData } from "app/interfaces/IData"
import { addMonths } from "date-fns";

type AvailableDay = {
  date: Date;
  time: string[];
};

export const locations: IData[] = [
  { key: 1, value: 'Singapore' },
  { key: 2, value: 'Lisbon' },
  { key: 3, value: 'São Paulo' },
];

export const duration: IData[] = [
  { key: 30, value: '30 min' },
  { key: 45, value: '45 min' },
  { key: 60, value: '60 min' },
];

const TIME_RANGE_1 = ["12:00pm","12:30pm","13:00pm","13:30pm","14:00pm","14:30pm"];
const TIME_RANGE_2 = ["11:00am","11:30am","12:00pm","12:30pm","13:00pm","13:30pm"];
const TIME_RANGE_3 = ["10:00am","10:30am","11:00am","11:30am","12:00pm","12:30pm"];
const TIME_RANGE_4 = ["09:00am","09:30am","10:00am","10:30am"];

export const availableDates = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  const availableDays: AvailableDay[] = [
    {date: new Date(currentYear, currentMonth, 23), time: TIME_RANGE_1},
    {date: new Date(currentYear, currentMonth, 25), time: TIME_RANGE_2},
    {date: new Date(currentYear, currentMonth, 26), time: TIME_RANGE_3},
    {date: new Date(currentYear, currentMonth, 27), time: TIME_RANGE_4},
  ];

  const previousMonth = addMonths(currentDate, -1);
  availableDays.push(
    {date: new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 2), time: TIME_RANGE_2},
    {date: new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 6), time: TIME_RANGE_1},
    {date: new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 19), time: TIME_RANGE_4},
    {date: new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 20), time: TIME_RANGE_3}
  );

  const nextMonth = addMonths(currentDate, 1);
  availableDays.push(
    {date: new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1), time: []},
    {date: new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 3), time: TIME_RANGE_4},
    {date: new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 5), time: TIME_RANGE_1},
    {date: new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 15), time: TIME_RANGE_2}
  );

  return availableDays
}

export const timeSlot = (selectedDate: Date | null) => availableDates().find(day => {
  const dayDate = new Date(day.date);
  const selectedDateTime = selectedDate ? new Date(selectedDate) : null;

  return selectedDateTime && dayDate.getTime() === selectedDateTime.getTime();
})?.time;