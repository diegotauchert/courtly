"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { isSameDay, isSameMonth } from "date-fns"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  availableDays = [],
  showOutsideDays = true,
  ...props
}: CalendarProps & { availableDays?: Date[] }) {
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());
  const hasCurrentMonthAvailableDates = availableDays.some((availableDay) => isSameMonth(currentMonth, availableDay));
  
  const isDayDisabled = (day: Date) => !availableDays.some((availableDay) => isSameDay(day, availableDay));

  const modifiers: { [key: string]: any } = {
    available: availableDays,
  };

  if (!hasCurrentMonthAvailableDates) {
    modifiers.hidden = (day: Date) => !isSameMonth(day, currentMonth);
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      modifiers={modifiers}
      month={currentMonth}
      onMonthChange={(month) => setCurrentMonth(month)}
      disabled={isDayDisabled}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "mx-4 flex justify-start pt-1 relative items-center",
        caption_label: "text-base font-medium text-gray-700 flex-grow",
        nav: "space-x-1 flex items-center justify-end",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 ml-2",
        nav_button_next: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        table: "w-full space-y-1",
        head_row: "flex",
        head_cell:
          "text-gray-400 rounded-full w-12 md:w-16 font-medium text-sm",
        row: "flex w-full mt-2",
        cell: "h-12 w-12 md:w-16 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-full [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-full focus-within:relative focus-within:z-20 !rounded-full",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-16 w-16 p-0 font-medium aria-selected:opacity-100 !rounded-full relative"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground font-bold hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "relative before:absolute before:bottom-1 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-primary before:content",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground cursor-not-allowed",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      modifiersStyles={{
        outside: { visibility: hasCurrentMonthAvailableDates ? 'hidden' : 'visible' },
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
