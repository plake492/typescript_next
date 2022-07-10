import React, { useEffect, useState } from 'react'
import { ImageComponent } from '../components/ImageComponent'
import { conditionalClasses } from '../utils/helpers'
import { ImageWithData } from '../utils/types'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

import { API } from '../utils/api'

const Images: React.FC = (): JSX.Element => {
  const [images, setImages] = useState(undefined)
  const [galleries, setGalleries] = useState(undefined)
  const [currentGallery, setCurrentGallery] = useState(undefined)
  const [showImg, setShowImg] = useState(false)
  const [numberOfCols, setNumberOfCols] = useState('4')

  useEffect(() => {
    const fetchDirectories = async (): Promise<void> => {
      const dirs: string[] = await API({
        api: 'getImageDirs',
        method: 'GET'
      })
      setGalleries(dirs)
      setCurrentGallery(dirs[0])
    }
    fetchDirectories()
  }, [])

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox

    const fetchImages = async (): Promise<void> => {
      const images: ImageWithData[] = await API({
        api: 'getImages',
        method: 'POST',
        body: currentGallery
      })
      setImages(images)
      setShowImg(true) // Turn images back on

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
          priority
        />
        <div className="bg-slate-grey px-xxxl py-xl d-flex flex-gap-xl">
          {galleries?.map(
            (gallery: string, index: number): JSX.Element => (
              <a
                key={gallery + index}
                //! Remove Before Push
                style={
                  gallery === 'xxx' ? { opacity: 0, marginLeft: '20rem' } : {}
                }
                className={`link nav-link ${conditionalClasses([
                  currentGallery === gallery,
                  'link__active'
                ])}`}
                onClick={() => {
                  // Remove Images to prevent src updating with wrong dir name
                  setShowImg(false)
                  setCurrentGallery(gallery)
                }}
              >
                {gallery.toUpperCase()}
              </a>
            )
          )}
        </div>
        <section>
          <div className="px-xxxl py-lg">
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
            className="mason-grid p-xxl pswp-gallery"
            style={{ '--number-of-cols': numberOfCols } as React.CSSProperties}
          >
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={currentGallery}
                classNames="transitions__page"
                timeout={500}
              >
                <>
                  {showImg &&
                    images &&
                    images.map(
                      (
                        { src, width, height }: ImageWithData,
                        index: number
                      ): JSX.Element => (
                        <div
                          key={currentGallery + '-' + index}
                          className="border-rounded overflow-hidden"
                        >
                          <a
                            href={`/images/${currentGallery}/${src}`}
                            data-pswp-width={width}
                            data-pswp-height={height}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ImageComponent
                              width={width}
                              height={height}
                              src={currentGallery + '/' + src}
                            />
                          </a>
                        </div>
                      )
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

export default Images
