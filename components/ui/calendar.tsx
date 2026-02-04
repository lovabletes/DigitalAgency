"use client"

import * as React from "react"

interface CalendarProps {
  className?: string
  showOutsideDays?: boolean
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  month?: Date
  onMonthChange?: (date: Date) => void
  disabled?: (date: Date) => boolean
  buttonVariant?: "default" | "ghost" | "outline"
}

interface DayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  day: Date
  isSelected: boolean
  isToday: boolean
  isDisabled: boolean
  isOutside: boolean
}

function Calendar({
  className,
  showOutsideDays = true,
  selected,
  onSelect,
  month = new Date(),
  onMonthChange,
  disabled,
  buttonVariant = "ghost",
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    new Date(month.getFullYear(), month.getMonth(), 1)
  )

  const handlePreviousMonth = () => {
    const prevMonth = new Date(currentMonth)
    prevMonth.setMonth(prevMonth.getMonth() - 1)
    setCurrentMonth(prevMonth)
    onMonthChange?.(prevMonth)
  }

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    setCurrentMonth(nextMonth)
    onMonthChange?.(nextMonth)
  }

  const handleDayClick = (date: Date) => {
    onSelect?.(date)
  }

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay()

  const today = new Date()
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Generate calendar days
  const days: Date[] = []
  
  // Add days from previous month (count computed implicitly via firstDayOfMonth)

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const date = new Date(currentMonth)
    date.setDate(-i)
    days.push(date)
  }

  // Add days from current month
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentMonth)
    date.setDate(i)
    days.push(date)
  }

  // Add days from next month to complete the grid
  const totalDays = Math.ceil(days.length / 7) * 7
  for (let i = days.length; i < totalDays; i++) {
    const date = new Date(currentMonth)
    date.setMonth(date.getMonth() + 1)
    date.setDate(i - daysInMonth - firstDayOfMonth + 1)
    days.push(date)
  }

  return (
    <div 
      className={`bg-white p-3 rounded-md border ${className || ""}`}
      data-slot="calendar"
    >
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className={`p-2 rounded-md hover:bg-gray-100 ${
            buttonVariant === "ghost" ? "bg-transparent" : "border"
          }`}
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="font-medium">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        
        <button
          onClick={handleNextMonth}
          className={`p-2 rounded-md hover:bg-gray-100 ${
            buttonVariant === "ghost" ? "bg-transparent" : "border"
          }`}
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isToday = day.toDateString() === today.toDateString()
          const isSelected = selected && day.toDateString() === selected.toDateString()
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth()
          const isDisabled = disabled ? disabled(day) : false
          
          return (
            <CalendarDayButton
              key={index}
              day={day}
              isSelected={!!isSelected}
              isToday={isToday}
              isDisabled={isDisabled}
              isOutside={!isCurrentMonth && !showOutsideDays}
              onClick={() => handleDayClick(day)}
              className={!isCurrentMonth ? "text-gray-400" : ""}
            />
          )
        })}
      </div>
    </div>
  )
}

function CalendarDayButton({
  day,
  isSelected,
  isToday,
  isDisabled,
  isOutside,
  className,
  ...props
}: DayButtonProps) {
  if (isOutside) {
    return null
  }

  return (
    <button
      className={`
        aspect-square w-full flex items-center justify-center rounded-full text-sm
        ${isToday ? "ring-1 ring-primary" : ""}
        ${isSelected ? "bg-success text-success-foreground" : "hover:bg-success-50"}
        ${isDisabled ? "text-gray-300 cursor-not-allowed" : ""}
        ${className || ""}
      `}
      disabled={isDisabled}
      {...props}
    >
      {day.getDate()}
    </button>
  )
}

export { Calendar, CalendarDayButton }