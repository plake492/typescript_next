import React, { useState, useEffect } from 'react'
import {
  getDaysInMonth,
  getMonth,
  getYear,
  startOfMonth,
  format,
  isAfter,
  isBefore
} from 'date-fns'
import { useBemify } from '../hooks/useBemify'
import { conditionalClasses } from '../utils/helpers'
import { days, monthsShort, years } from '../utils/calendarUtils'

const formatCalendarDate = (
  m: number,
  d: string | number,
  y: string | number
): string => `${m + 1}-${d}-${y}`

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
  const [currentMonthInView, setCurrentMonthInView] = useState(
    getMonth(new Date())
  )
  // Month as name
  const [currentMonthName, setCurrentMonthName] = useState(undefined)
  // First Day of Month
  const [firstDayOfMonthIndex, setFirstDayOfMonthIndex] = useState(undefined)

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
    if (currentMonthInView > 11) {
      setCurrentMonthInView(0)
      setYearIndex(prevState => prevState + 1)
    }
    if (currentMonthInView < 0) {
      setCurrentMonthInView(11)
      setYearIndex(prevState => prevState - 1)
    }

    // Set Days In Month
    setNumberOfDaysInMonth(
      getDaysInMonth(new Date(yearNumber, currentMonthInView))
    )

    // Set First Day of Month
    // Get Formated Day Name
    const startOfMonthName = format(
      startOfMonth(new Date(yearNumber, currentMonthInView)),
      'EEE'
    )
    // Get Index of Day
    const startOfMonthIndex = days.indexOf(startOfMonthName)
    // Set day Index
    setFirstDayOfMonthIndex(startOfMonthIndex)

    // Set Current Month Name
    setCurrentMonthName(monthsShort[currentMonthInView])
  }, [currentMonthInView, yearNumber])

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
          '--calendar-selected-width':
            (startDay && endDay) ||
            (startDay && endDayHovered && endDayHovered > startDay)
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
        <div className={bem('header')}>
          {/* Arrow */}
          <div
            className={bem('arrow-left') + ' ' + bem('arrow')}
            onClick={() => setCurrentMonthInView(prevState => prevState - 1)}
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
            onClick={() => setCurrentMonthInView(prevState => prevState + 1)}
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
              (_, index, arr) => {
                // Calculate day 1 of the month
                const day = index + 1 - firstDayOfMonthIndex
                const isDisabled = day < 1

                const isWeekedStart = index === 0 || index % 7 === 0
                const isWeekedEnd = (index + 1) % 7 === 0
                const isFirstDay = day === 1
                const isLastDay = day === arr.length - firstDayOfMonthIndex

                const formatDate = formatCalendarDate(
                  currentMonthInView,
                  day,
                  yearNumber
                )

                const isStartDay = formatDate === startDay
                const isEndDay = formatDate === endDay
                const isSelected = isStartDay || isEndDay

                const isInSelectedRange =
                  startDay &&
                  endDay &&
                  isAfter(new Date(formatDate), new Date(startDay)) &&
                  isBefore(new Date(formatDate), new Date(endDay))

                const isInHoveredRange =
                  startDay &&
                  endDayHovered &&
                  isAfter(new Date(formatDate), new Date(startDay)) &&
                  isBefore(new Date(formatDate), new Date(endDayHovered))

                const dayClasses = [
                  [isDisabled, 'is-disabled'],
                  [isSelected, 'selected'],
                  [isStartDay, 'selected-start-day'],
                  [isEndDay, 'selected-end-day'],
                  [isInSelectedRange, 'in-selected-range'],
                  [isInHoveredRange, 'in-selected-range'], // TODO Update Hover Style
                  [isFirstDay, bem('day--month-start')],
                  [isLastDay, bem('day--month-end')],
                  [
                    // TODO Update Bemify for allowing array of strings
                    isWeekedStart,
                    bem('day--weekend') + ' ' + bem('day--weekend-start')
                  ],
                  [
                    isWeekedEnd,
                    bem('day--weekend') + ' ' + bem('day--weekend-end')
                  ]
                ]

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
                      onMouseOver={() =>
                        !isStart && setEndDayHovered(formatDate)
                      }
                      onMouseOut={() => !isStart && setEndDayHovered(undefined)}
                      onClick={() =>
                        isStart
                          ? setStartDay(() => formatDate)
                          : setEndDay(() => formatDate)
                      }
                    >
                      {day > 0 ? day : ''}
                    </p>
                  </div>
                )
              }
            )}
        </div>
      </section>
    </div>
  )
}
