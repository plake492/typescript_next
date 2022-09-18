import React from 'react'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'

const ColorsTheme: React.FC = (): JSX.Element => {
  return (
    <main className="bg-primary">
      <Hero contentIsCentered content={<h1>Colors Theming</h1>}>
        <ImageComponent
          isStaticImage
          width={1000}
          src={'abstract/david-becker-dMeEJRE18VI-unsplash.jpg'}
          priority
        />
      </Hero>
      <section className="container py-xl">
        <h4>Header</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit magni
          sunt amet vero autem id, quo saepe quos labore animi sequi, ducimus
          deserunt blanditiis obcaecati possimus temporibus veniam quis
          laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Velit magni sunt amet vero autem id, quo saepe quos labore animi
          sequi, ducimus deserunt blanditiis obcaecati possimus temporibus
          veniam quis laudantium? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Velit magni sunt amet vero autem id, quo saepe quos
          labore animi sequi, ducimus deserunt blanditiis obcaecati possimus
          temporibus veniam quis laudantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Velit magni sunt amet vero autem id, quo
          saepe quos labore animi sequi, ducimus deserunt blanditiis obcaecati
          possimus temporibus veniam quis laudantium? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Velit magni sunt amet vero autem
          id, quo saepe quos labore animi sequi, ducimus deserunt blanditiis
          obcaecati possimus temporibus veniam quis laudantium? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Velit magni sunt amet
          vero autem id, quo saepe quos labore animi sequi, ducimus deserunt
          blanditiis obcaecati possimus temporibus veniam quis laudantium? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Velit magni sunt
          amet vero autem id, quo saepe quos labore animi sequi, ducimus
          deserunt blanditiis obcaecati possimus temporibus veniam quis
          laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Velit magni sunt amet vero autem id, quo saepe quos labore animi
          sequi, ducimus deserunt blanditiis obcaecati possimus temporibus
          veniam quis laudantium? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Velit magni sunt amet vero autem id, quo saepe quos
          labore animi sequi, ducimus deserunt blanditiis obcaecati possimus
          temporibus veniam quis laudantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Velit magni sunt amet vero autem id, quo
          saepe quos labore animi sequi, ducimus deserunt blanditiis obcaecati
          possimus temporibus veniam quis laudantium?
        </p>

        <div className="my-xl d-flex gap-md">
          <div className="card w-max-50">
            <div className="card__header p-md h5">Accent</div>
            <p className="px-lg py-md card__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              facilis cumque neque quam deleniti quis nostrum pariatur, sint
              laboriosam mollitia voluptatem, excepturi eligendi ab ex, et nobis
              temporibus magnam. Ad.
            </p>
            <div className="card__footer p-sm">Card Footer</div>
          </div>
          <div className="w-max-50 bg-secondary-alt card">
            <div className="bg-alt p-md h5">Alt</div>
            <p className="px-lg py-md card__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              facilis cumque neque quam deleniti quis nostrum pariatur, sint
              laboriosam mollitia voluptatem, excepturi eligendi ab ex, et nobis
              temporibus magnam. Ad.
            </p>
            <div className="card__footer bg-secondary p-sm">Card Footer</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ColorsTheme
