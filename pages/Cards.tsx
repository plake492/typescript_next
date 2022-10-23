import React from 'react'
import { Card } from '../components/Card'
import { ImageComponent } from '../components/ImageComponent'

const Cards: React.FC = (): JSX.Element => {
  const image = 'abstract/andre-benz-JBkwaYMuhdc-unsplash.jpg'

  return (
    <div style={{ '--card-divider': 3 } as React.CSSProperties}>
      <div className="box-shadow angle-left-right ">
        <ImageComponent isStaticImage width={1000} src={image} priority />
      </div>
      <div className="container py-xxl">
        <div className="d-flex flex-wrap gap-xl justify-content-between">
          <Card
            bg="lake-80"
            header={<div className="h5">Header</div>}
            image={
              <ImageComponent
                isStaticImage
                width={1}
                src={'abstract/andre-benz-JBkwaYMuhdc-unsplash.jpg'}
              />
            }
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus modi minima recusandae, aliquid iusto cumque
                provident amet soluta reiciendis doloribus quidem illum quo sunt
                adipisci architecto molestias pariatur. Dicta, saepe!
              </p>
            }
            links={
              <div>
                <a className="link">Link</a>
              </div>
            }
            noBorder
          />
          <Card
            header={<div className="h5">Header</div>}
            image={
              <ImageComponent
                isStaticImage
                width={1}
                src={'abstract/efe-kurnaz-RnCPiXixooY-unsplash.jpg'}
              />
            }
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus modi minima recusandae, aliquid iusto cumque
                provident amet soluta reiciendis doloribus quidem illum quo sunt
                adipisci architecto molestias pariatur. Dicta, saepe!
              </p>
            }
            links={
              <div>
                <a className="link">Link</a>
              </div>
            }
          />
          <Card
            header={<div>Header</div>}
            image={
              <ImageComponent
                isStaticImage
                width={1}
                src={'landscape/ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg'}
              />
            }
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus modi minima recusandae, aliquid iusto cumque
                provident amet soluta reiciendis doloribus quidem illum quo sunt
                adipisci architecto molestias pariatur. Dicta, saepe!
              </p>
            }
            links={
              <div>
                <a className="link">Link</a>
              </div>
            }
          />
          <Card
            block
            header={<div>Header</div>}
            image={
              <ImageComponent
                isStaticImage
                width={1}
                src={'landscape/ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg'}
              />
            }
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus modi minima recusandae, aliquid iusto cumque
                provident amet soluta reiciendis doloribus quidem illum quo sunt
                adipisci architecto molestias pariatur. Dicta, saepe!
              </p>
            }
            links={
              <div>
                <a className="link">Link</a>
              </div>
            }
          />
          <Card
            block
            header={<h4>Header</h4>}
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus modi minima recusandae, aliquid iusto cumque
                provident amet soluta reiciendis doloribus quidem illum quo sunt
                adipisci architecto molestias pariatur. Dicta, saepe!
              </p>
            }
            links={
              <div>
                <a className="link">Link</a>
              </div>
            }
          />
          <div
            className="d-flex justify-content-between"
            style={{ '--card-divider': 2 } as React.CSSProperties}
          >
            <Card
              header={<div>Header</div>}
              image={
                <ImageComponent
                  isStaticImage
                  width={1}
                  src={'landscape/ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg'}
                />
              }
              content={
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus modi minima recusandae, aliquid iusto cumque
                  provident amet soluta reiciendis doloribus quidem illum quo
                  sunt adipisci architecto molestias pariatur. Dicta, saepe!
                  Illum quo sunt adipisci architecto molestias pariatur. Dicta,
                  saepe!
                </p>
              }
              links={
                <div className="d-flex justify-content-between">
                  <button className="btn btn--primary">Button</button>
                  <button className="btn btn--no-bg">Button</button>
                </div>
              }
            />
            <Card
              header={<div>Header</div>}
              image={
                <ImageComponent
                  isStaticImage
                  width={1}
                  src={'landscape/karsten-wurth-7BjhtdogU3A-unsplash.jpg'}
                />
              }
              content={
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus modi minima recusandae, aliquid iusto cumque
                  provident amet soluta reiciendis doloribus quidem illum quo
                  sunt adipisci architecto molestias pariatur. Dicta, saepe!
                </p>
              }
              links={
                <button className="btn btn--no-bg btn--block">Button</button>
              }
              footer={<p>Thanks for looking at this beautiful card</p>}
            />
          </div>
        </div>
      </div>
      <section className="py-xxl bg-white">
        <div className="container d-flex justify-content-around">
          <button className="super-button">Super Button</button>
          <button className="super-button--2">Super Btn Two</button>
        </div>
      </section>
    </div>
  )
}
export default Cards
