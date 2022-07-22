import React from 'react'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'

import { CalendarComponent } from '../components/CalendarComponent'

const Calendar: React.FC = (): JSX.Element => {
  const image: string = 'abstract/pawel-czerwinski-BP2RioglKXk-unsplash.jpg'

  return (
    <main>
      <Hero contentIsCentered content={<CalendarComponent />}>
        <ImageComponent isStaticImage width={1000} src={image} priority />
      </Hero>
      <section className="container py-xxxl">
        <CalendarComponent />
      </section>
    </main>
  )
}

export default Calendar
