import { useState, useRef } from 'react'
import Head from 'next/head'
import { useResizeObserver } from '../hooks/useResizeObserver'
import { Card } from '../components/Card'
import { ImageComponent } from '../components/ImageComponent'

import { sanityClient, urlFor } from '../lib/sanity'
import { getImgSize } from '../utils/helpers'

const photosQuery: string = `*[_type == "photography"] | order(order asc) {
  _id,
  picture,
  accessablityDescription,
  tags[]->{
      name
  }
}`

export default function Home({ photos }) {
  const inputRef = useRef()
  const [input, setInput] = useState('')
  const { width, height } = useResizeObserver(inputRef, ['padding'])

  const [imgWidth, imgHeight] = getImgSize(photos[0].picture)

  return (
    <main>
      <div className="border-radius overflow-hidden angle-left-right">
        <ImageComponent
          src={urlFor(photos[0].picture).url()}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container py-xxxl">
        <div className="d-flex flex-col flex-md-row justify-content-between flex-gap-md">
          <div className="bg-midnight p-xl flex-1">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              voluptate, minima quo maiores quasi, repellendus, voluptas odio
              nulla perferendis harum officiis! Eligendi recusandae voluptas,
              vero sit eveniet aliquid dolores nihil.
            </p>
            <div className="input input__full-width">
              <label>Name</label>
              <input type="text" />
            </div>
            <button className="mt-xl btn  d-block">Click Here</button>
          </div>
          <div className="bg-midnight p-xl flex-1">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              voluptate, minima quo maiores quasi, repellendus, voluptas odio
              nulla perferendis harum officiis! Eligendi recusandae voluptas,
              vero sit eveniet aliquid dolores nihil.
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
          ref={inputRef}
          style={
            {
              '--card-height': height + 'px',
              '--card-width': width + 'px'
            } as React.CSSProperties
          }
          className="my-xl"
        >
          <Card
            block
            noBorder
            header={<h5>Observe element size change</h5>}
            content={
              <>
                <p className="py-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  voluptate, minima quo maiores quasi, repellendus, voluptas
                  odio nulla perferendis harum officiis! Eligendi recusandae
                  voluptas, vero sit eveniet aliquid dolores nihil.
                </p>
              </>
            }
            footer={
              <p>
                width: {width} | height: {height}
              </p>
            }
          />
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const photos = await sanityClient.fetch(photosQuery)
  return { props: { photos } }
}
