import { Card } from '../components/Card'
import { CodeSnip } from '../components/CodeSnip'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'

const Flex: React.FC = (): JSX.Element => {
  const image = 'abstract/pawel-czerwinski-fPN1w7bIuNU-unsplash.jpg'
  const justifyContent = [
    'justify-content-between',
    'justify-content-around',
    'justify-content-even',
    'justify-content-start',
    'justify-content-center',
    'justify-content-end'
  ]

  return (
    <main className="bg-slate-grey">
      <Hero
        content={
          <div className="bg-slate-grey-10 px-xl pt-md pb-xl border-rounded">
            <h1>Flex Box</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              praesentium nam,
            </p>
          </div>
        }
      >
        <ImageComponent isStaticImage width={1000} src={image} priority />
      </Hero>
      <section
        className="py-xxl container"
        style={{ '--card-divider': 7 } as React.CSSProperties}
      >
        {justifyContent.map((item, index) => (
          <div key={item + index} className="py-md my-md border-bottom">
            <div className="py-md d-flex align-items-center flex-gap-xl">
              <h5>{item.split('-').join(' ').toUpperCase()}</h5>
              <div className="flex-1">
                <CodeSnip codeString={item} />
              </div>
            </div>
            <div className={`d-flex ${item}`}>
              {[...Array(3)].map((_, index) => (
                <Card
                  key={index}
                  content={
                    <p>
                      cupiditate alias corporis incidunt eveniet saepe natus,
                    </p>
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Flex
