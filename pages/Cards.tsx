import React from 'react'
import { Card } from '../components/Card'
import { ImageComponent } from '../components/ImageComponent'
import { Shader } from '../components/Shader'

const Cards = (): JSX.Element => {
  const image = 'abstract/jr-korpa-moclBG0oPyQ-unsplash.jpg'

  return (
    <div style={{ '--card-divider': 3 } as React.CSSProperties}>
      <div className="box-shadow angle-left-right ">
        <ImageComponent width={1000} src={image} priority />
      </div>
      <div className="container py-xxl">
        <div className="d-flex flex-wrap flex-gap-xl justify-content-between">
          <Card
            bg="lake-80"
            header={<div className="h5">Header</div>}
            image={
              <ImageComponent
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
            image={
              <ImageComponent
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
          <div style={{ '--card-divider': 2 } as React.CSSProperties}>
            <Card
              header={<div>Header</div>}
              image={
                <ImageComponent
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
              footer={<p>Thanks for looking at this beautiful card</p>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cards
