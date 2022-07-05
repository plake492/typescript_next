import { useState, useRef } from 'react'
import Head from 'next/head'

import { useResizeObserver } from '../hooks/useResizeObserver'
import { conditionalClasses } from '../utils/helpers'

export default function Home() {
  const inputRef = useRef()
  const [input, setInput] = useState('')

  const { width, height } = useResizeObserver(inputRef, ['padding', 'margin'])

  return (
    <div className="container py-xxxl">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="d-flex flex-col flex-md-row justify-content-between flex-gap-md">
        <div className="card bg-midnight p-xl flex-1">
          <p className="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptate, minima quo maiores quasi, repellendus, voluptas odio
            nulla perferendis harum officiis! Eligendi recusandae voluptas, vero
            sit eveniet aliquid dolores nihil.
          </p>
          <div className="input input__full-width">
            <label>Name</label>
            <input type="text" />
          </div>
          <button className="mt-xl btn  d-block">Click Here</button>
        </div>
        <div className="card bg-midnight p-xl flex-1">
          <p className="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptate, minima quo maiores quasi, repellendus, voluptas odio
            nulla perferendis harum officiis! Eligendi recusandae voluptas, vero
            sit eveniet aliquid dolores nihil.
          </p>
          <div className="input input__full-width">
            <label>Name</label>
            <input
              type="text"
              value={input}
              onChange={({ target }) => setInput(target.value)}
            />
          </div>
          <button className="mt-xl btn  d-block">Click Here</button>
        </div>
      </div>
      <div
        className="card bg-midnight p-xl my-xxxl"
        ref={inputRef}
        style={
          {
            '--card-height': height + 'px',
            '--card-width': width + 'px'
          } as React.CSSProperties
        }
      >
        <div className="card__header"></div>
        <h5 className={conditionalClasses([true, 'blue', true])}>
          width: {width} | height: {height}
        </h5>

        <p className="small pt-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          voluptate, minima quo maiores quasi, repellendus, voluptas odio nulla
          perferendis harum officiis! Eligendi recusandae voluptas, vero sit
          eveniet aliquid dolores nihil.
        </p>
      </div>
    </div>
  )
}
