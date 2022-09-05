import React, { useState, useEffect } from 'react'
import {
  getDaysInMonth,
  getMonth,
  getYear,
  startOfMonth,
  lastDayOfMonth,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isSunday,
  isSaturday
} from 'date-fns'
import { useBemify } from '../hooks/useBemify'
import { conditionalClasses } from '../utils/helpers'
import { days, monthsShort, years } from '../utils/calendarUtils'

// **************** HELPERS **************** //
const formatCalendarDate = (
  m: string | number,
  d: string | number,
  y: string | number
): string => `${(typeof m === 'string' ? parseInt(m) : m) + 1}-${d}-${y}`
// ******************************************* //

export const CalendarComponent = () => {
  const [isStart, setIsStart] = useState(true)

  // ******** Selected Dates
  const [startDay, setStartDay] = useState(undefined)
  const [endDay, setEndDay] = useState(undefined)

  // ******** Hover State
  const [endDayHovered, setEndDayHovered] = useState(undefined)

  // ******** Handle Year State
  // Year as number
  const [yearNumber, setYearNumber] = useState(getYear(new Date()))
  // Year Index
  const [yearIndex, setYearIndex] = useState(years.indexOf(yearNumber))

  // ********* Handle Month State
  //  Month as number
  const [currentMonthNumber, setCurrentMonthNumber] = useState(
    getMonth(new Date())
  )
  // Month as name
  const [currentMonthName, setCurrentMonthName] = useState(undefined)
  // First Day of Month
  const [firstDayOfMonthIndex, setFirstDayOfMonthIndex] = useState(undefined)
  // End of Month slots
  const [endOfMonthLength, setEndOfMonthLength] = useState(undefined)

  // ********* Handle Days State
  // Number of days in month
  const [numberOfDaysInMonth, setNumberOfDaysInMonth] = useState(undefined)

  // Update Year display as year index changes
  useEffect(() => {
    setYearNumber(years[yearIndex])
  }, [yearIndex])

  // Update current month in view amd Year index as needed
  useEffect(() => {
    // Cycle months
    if (currentMonthNumber > 11) {
      setCurrentMonthNumber(0)
      setYearIndex(prevState => prevState + 1)
    }
    if (currentMonthNumber < 0) {
      setCurrentMonthNumber(11)
      setYearIndex(prevState => prevState - 1)
    }

    // Set Days In Month
    setNumberOfDaysInMonth(
      getDaysInMonth(new Date(yearNumber, currentMonthNumber))
    )

    // Set First Day of Month
    // Get Formated Day Name
    const startOfMonthName = format(
      startOfMonth(new Date(yearNumber, currentMonthNumber)),
      'EEE'
    )
    // Get Index of Day
    const startOfMonthIndex = days.indexOf(startOfMonthName)
    // Set day Index
    setFirstDayOfMonthIndex(startOfMonthIndex)

    // Set Last Day of Month
    const lastDayOfMonthName = format(
      lastDayOfMonth(new Date(yearNumber, currentMonthNumber)),
      'EEE'
    )

    const lastDayOfMonthIndex = days.indexOf(lastDayOfMonthName)
    const endOfMonthSlots = days.length - lastDayOfMonthIndex - 1
    setEndOfMonthLength(endOfMonthSlots)

    // Set Current Month Name
    setCurrentMonthName(monthsShort[currentMonthNumber])
  }, [currentMonthNumber, yearNumber])

  useEffect(() => {
    if (startDay && isStart) setIsStart(false)
    if (startDay && endDay && !isStart) setIsStart(true)

    // Prevent range being set inappropriately
    if (
      isAfter(new Date(startDay), new Date(endDay)) ||
      isBefore(new Date(endDay), new Date(startDay))
    ) {
      setStartDay(endDay)
      setEndDay(startDay)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDay, endDay])

  const bem: Function = useBemify('calendar')

  return (
    <div
      className={bem()}
      style={
        {
          '--calender-start-of-month-length': firstDayOfMonthIndex,
          '--calender-end-of-month-length': endOfMonthLength,
          '--calendar-selected-width':
            (startDay && endDay) ||
            (startDay &&
              endDayHovered &&
              isAfter(new Date(endDayHovered), new Date(startDay)))
              ? '50%'
              : '0%'
        } as React.CSSProperties
      }
    >
      <section className={bem('input-wrapper')}>
        <p
          onClick={() => setIsStart(true)}
          className={
            conditionalClasses([isStart, 'font-weight-900']) + ' c-pointer'
          }
        >
          Start Day: {startDay}
        </p>
        <p
          onClick={() => setIsStart(false)}
          className={
            conditionalClasses([!isStart, 'font-weight-900']) + ' c-pointer'
          }
        >
          End Day: {endDay}
        </p>
      </section>

      <section className={bem('calendar-wrapper')}>
        <div className={bem('calendar-container')}>
          <div className={bem('header')}>
            {/* Arrow */}
            <div
              className={bem('arrow-left') + ' ' + bem('arrow')}
              onClick={() => setCurrentMonthNumber(prevState => prevState - 1)}
            ></div>
            {/* Wrap month and year */}
            <div className={bem('month-year-wrapper')}>
              <div className={bem('month')}>
                <h5>{currentMonthName}</h5>
              </div>
              <div className={bem('year')}>
                <h5>{yearNumber}</h5>
              </div>
            </div>
            {/* Arrow */}
            <div
              className={bem('arrow-right') + ' ' + bem('arrow')}
              onClick={() => setCurrentMonthNumber(prevState => prevState + 1)}
            ></div>
          </div>
          <div className={bem('days')}>
            {days.map((day, index) => (
              <p className={bem('day-name')} key={day + index}>
                {day}
              </p>
            ))}
          </div>
          <div className={bem('days-wrapper')}>
            {numberOfDaysInMonth &&
              [...Array(numberOfDaysInMonth + firstDayOfMonthIndex)].map(
                (_, index) => {
                  // Calculate day 1 of the month
                  const day = index + 1 - firstDayOfMonthIndex

                  // FORMATTED DATE
                  const formattedDate = formatCalendarDate(
                    currentMonthNumber,
                    day,
                    yearNumber
                  )
                  // FORMATTED DATE AS DATE
                  const d = new Date(formattedDate)

                  const isDisabled = day < 1

                  const isWeekedStart = isSaturday(d)
                  const isWeekedEnd = isSunday(d)

                  const isFirstDayOfM = isFirstDayOfMonth(d)
                  const isLastDayOfM = isLastDayOfMonth(d)

                  const isStartDay = formattedDate === startDay
                  const isEndDay = formattedDate === endDay
                  const isSelected = isStartDay || isEndDay
                  const startEndAreSame =
                    formattedDate == endDay && formattedDate === startDay

                  const daysAreSelected = startDay && endDay

                  const isInSelectedRange =
                    startDay &&
                    endDay &&
                    isAfter(d, new Date(startDay)) &&
                    isBefore(d, new Date(endDay))

                  const isInHoveredRange =
                    startDay &&
                    endDayHovered &&
                    isAfter(d, new Date(startDay)) &&
                    isBefore(d, new Date(endDayHovered)) &&
                    !endDay

                  const hasSelectedBeforeFirst =
                    isFirstDayOfM &&
                    isAfter(d, new Date(startDay)) &&
                    (isBefore(d, new Date(endDay)) ||
                      isSameDay(d, new Date(endDay)))

                  const hasSelectedAfterLast =
                    isLastDayOfM &&
                    isBefore(d, new Date(endDay)) &&
                    (isAfter(d, new Date(startDay)) ||
                      isSameDay(d, new Date(startDay)))

                  const isHoveredEndDateWeekendEnd =
                    endDayHovered &&
                    formattedDate === endDayHovered &&
                    isSunday(new Date(endDayHovered))

                  const endDateIsHovered = !!endDayHovered

                  const dayClasses = [
                    [isDisabled, 'is-disabled'],
                    [isSelected, 'selected'],
                    [isStartDay, 'selected-start-day'],
                    [isEndDay, 'selected-end-day'],
                    [startEndAreSame, 'selected-days-are-same'],
                    [daysAreSelected, 'days-are-selected'],
                    [endDateIsHovered, 'end-date-is-hovered'],
                    [isInSelectedRange, 'in-selected-range'],
                    [isInHoveredRange, 'in-selected-range'], // TODO Update Hover Style
                    [isHoveredEndDateWeekendEnd, 'hovered-end-weekend-end'],
                    [isFirstDayOfM, bem('day--month-start')],
                    [hasSelectedBeforeFirst, 'selected-before'],
                    [hasSelectedAfterLast, 'selected-after'],
                    [isLastDayOfM, bem('day--month-end')],
                    [
                      isWeekedStart,
                      `${bem('day--weekend')} ${bem('day--weekend--start')}`
                    ],
                    [
                      isWeekedEnd,
                      `${bem('day--weekend')} ${bem('day--weekend--end')}`
                    ]
                  ]

                  const handleMouseOver = () =>
                    !isStart && setEndDayHovered(formattedDate)

                  const handleMouseOut = () =>
                    !isStart && setEndDayHovered(undefined)

                  const handleClick = () =>
                    isStart
                      ? setStartDay(() => formattedDate)
                      : setEndDay(() => formattedDate)

                  return (
                    <div
                      key={index}
                      className={`${bem('day-wrapper')} ${conditionalClasses([
                        isDisabled,
                        'is-disabled'
                      ])}`}
                    >
                      <p
                        className={`${bem('day')} ${conditionalClasses(
                          ...dayClasses
                        )}`}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleClick}
                      >
                        {!isDisabled ? day : ''}
                      </p>
                    </div>
                  )
                }
              )}
          </div>
        </div>
      </section>
    </div>
  )
}
