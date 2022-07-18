import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { ImageComponent } from '../components/ImageComponent'
import { conditionalClasses, getImgSize } from '../utils/helpers'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { sanityClient, urlFor } from '../lib/sanity'
import { tagsQuery, imagesQuery } from '../lib/queries'
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const Images: React.FC = ({
  images,
  tags
}: {
  images: any
  tags: any
}): JSX.Element => {
  const [galleries] = useState(tags || [])
  const [currentGallery, setCurrentGallery] = useState(tags[0].name || '')
  const [numberOfCols, setNumberOfCols] = useState('3')

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox

    const fetchImages = async (): Promise<void> => {
      // Initialized LightBox
      let lightbox: PhotoSwipeLightbox = new PhotoSwipeLightbox({
        bgOpacity: 0.9,
        gallery: '#' + currentGallery,
        children: 'a',
        pswpModule: () => import('photoswipe')
      })

      lightbox.init()
    }
    // Only run when gallery is selected
    currentGallery && fetchImages()

    return () => {
      if (lightbox) {
        lightbox.destroy()
        lightbox = null
      }
    }
  }, [currentGallery])

  return (
    <>
      <div>
        <ImageComponent
          width={1000}
          src={'abstract/jr-korpa-9XngoIpxcEo-unsplash.jpg'}
          isStaticImage
          priority
        />
        <div className="bg-slate-grey pt-md pb-xl">
          <div className="container d-flex flex-gap-xl">
            {galleries?.map(
              ({ name }: { name: string }, index: number): JSX.Element => (
                <a
                  key={name + index}
                  className={`link nav-link ${conditionalClasses([
                    name === currentGallery,
                    'link__active'
                  ])}`}
                  onClick={() => setCurrentGallery(name)}
                >
                  {name.toUpperCase()}
                </a>
              )
            )}
          </div>
        </div>
        <section>
          <div className="container py-lg">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quae
              sapiente, reprehenderit quaerat quod officia sit placeat animi
              pariatur eos porro autem omnis, vero libero minus eum numquam
              facere blanditiis!
            </p>
            <div className="input">
              <label>Set Column Number</label>
              <input
                type="number"
                value={numberOfCols}
                onChange={e => setNumberOfCols(e.target.value)}
              />
            </div>
          </div>
          <div
            id={currentGallery}
            className="mason-grid container py-xl pswp-gallery"
            style={{ '--number-of-cols': numberOfCols } as React.CSSProperties}
          >
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={currentGallery}
                classNames="transitions__page"
                timeout={500}
              >
                <>
                  {images &&
                    images.map(
                      ({ picture, tags }, index: number): JSX.Element => {
                        const [width, height] = getImgSize(picture)

                        return (
                          tags[0].name === currentGallery && (
                            <div
                              key={currentGallery + '-' + index}
                              className="border-rounded overflow-hidden"
                            >
                              <a
                                href={urlFor(picture).url()}
                                data-pswp-width={width}
                                data-pswp-height={height}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ImageComponent
                                  width={width}
                                  height={height}
                                  src={urlFor(picture)
                                    .width(width)
                                    .height(height)
                                    .focalPoint(0.5, 0.5)
                                    .crop('focalpoint')
                                    .url()}
                                  blur={urlFor(picture).blur(1000).url()}
                                />
                              </a>
                            </div>
                          )
                        )
                      }
                    )}
                </>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = await sanityClient.fetch<Promise<any>>(tagsQuery)
  const images = await sanityClient.fetch<Promise<any>>(imagesQuery)

  return {
    props: { images, tags },
    revalidate: 10
  }
}

export default Images
