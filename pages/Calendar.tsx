import React, { useState, useEffect } from 'react'
import { getYear, getDaysInMonth, format } from 'date-fns'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'
import { useBemify } from '../hooks/useBemify'
import { conditionalClasses } from '../utils/helpers'
import { days } from '../utils/calendarUtils'

const Calendar: React.FC = (): JSX.Element => {
  const [isStart, setIsStart] = useState(true)
  const [startDay, setStartDay] = useState(undefined)
  const [endDay, setEndDay] = useState(undefined)
  const [endDayHovered, setEndDayHovered] = useState(undefined)

  useEffect(() => {
    if (startDay && isStart) setIsStart(false)
    if (startDay && endDay && !isStart) setIsStart(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDay, endDay])

  const bem: Function = useBemify('calendar')
  const image: string = 'abstract/pawel-czerwinski-BP2RioglKXk-unsplash.jpg'
  const date: Date = new Date()

  return (
    <main>
      <Hero>
        <ImageComponent isStaticImage width={1000} src={image} priority />
      </Hero>
      <section className="container py-xxxl">
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
            <div className={bem('calendar-header')}>
              <div className={bem('calendar-month')}>
                <h5>{format(date, 'LLLL')}</h5>
              </div>
              <div className={bem('calendar-year')}>
                <h5>{getYear(date)}</h5>
              </div>
            </div>
            <div className={bem('calendar-days')}>
              {days.map((day, index) => (
                <p className={bem('calendar-day-name')} key={day + index}>
                  {day}
                </p>
              ))}
            </div>
            <div className={bem('calendar-days-wrapper')}>
              {[...Array(getDaysInMonth(date) + 5)].map((_, index) => {
                const day = index - 5 + 1 // TODO Calculate this day based on first day of month
                const isDisabled = day < 1
                const isWeekedStart = index === 0 || index % 7 === 0
                const isWeekedEnd = (index + 1) % 7 === 0
                const isInSelectedRange =
                  startDay && endDay && day > startDay && day < endDay
                const isInHoveredRange =
                  startDay &&
                  endDayHovered &&
                  day > startDay &&
                  day < endDayHovered

                return (
                  <div key={index} className={bem('calendar-day-wrapper')}>
                    <p
                      className={
                        bem('calendar-day') +
                        ' ' +
                        conditionalClasses(
                          [isDisabled, 'is-disabled'],
                          [startDay === day || endDay === day, 'selected'],
                          [startDay === day, 'selected-start-day'],
                          [endDay === day, 'selected-end-day'],
                          [
                            isInSelectedRange || isInHoveredRange,
                            'in-selected-range'
                          ],
                          [
                            isWeekedStart,
                            bem('calendar-day--weekend') +
                              ' ' +
                              bem('calendar-day--weekend-start')
                          ],
                          [
                            isWeekedEnd,
                            bem('calendar-day--weekend') +
                              ' ' +
                              bem('calendar-day--weekend-end')
                          ]
                        )
                      }
                      onMouseOver={() => !isStart && setEndDayHovered(day)}
                      onMouseOut={() => !isStart && setEndDayHovered(undefined)}
                      onClick={() =>
                        isStart ? setStartDay(() => day) : setEndDay(() => day)
                      }
                    >
                      {day > 0 ? day : ''}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Calendar
