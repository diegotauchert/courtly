import { IData } from "app/interfaces/IData"
import { addMonths } from "date-fns";

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

export const availableDates = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const availableDays = [
    new Date(currentYear, currentMonth, 23),
    new Date(currentYear, currentMonth, 25),
    new Date(currentYear, currentMonth, 26),
    new Date(currentYear, currentMonth, 27)
  ]

  const previousMonth = addMonths(currentDate, -1);
  availableDays.push(
    new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 2),
    new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 6),
    new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 19),
    new Date(previousMonth.getFullYear(), previousMonth.getMonth(), 20)
  );

  const nextMonth = addMonths(currentDate, 1);
  availableDays.push(
    new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1),
    new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 3),
    new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 5),
    new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 15)
  );

  return availableDays
}