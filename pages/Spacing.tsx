import { Hero } from '../components/Hero'
import { CodeSnip } from '../components/CodeSnip'
import { ImageComponent } from '../components/ImageComponent'
import { conditionalClasses } from '../utils/helpers'

const Spacing: React.FC = (): JSX.Element => {
  const image = 'abstract/josh-rose-trYl7JYATH0-unsplash.jpg'

  const margin = [
    'm-xs',
    'my-sm',
    'mx-md',
    'mt-lg',
    'mr-xl',
    'mb-xxl',
    'ml-xxxl'
  ]
  const nMargin = [
    'mnr-xs',
    'mnr-sm',
    'mnr-md',
    'mnr-lg',
    'mnr-xl',
    'mnr-xxl',
    'mnr-xxxl'
  ]
  const padding = [
    'p-xs',
    'py-sm',
    'px-md',
    'pt-lg',
    'pr-xl',
    'pb-xxl',
    'pl-xxxl'
  ]

  return (
    <main
      className="bg-slate-grey-20 position-relative"
      style={{ height: '100%' }}
    >
      <Hero hasAngle content={<h1>Margin & Padding</h1>}>
        <ImageComponent isStaticImage width={1000} src={image} priority />
      </Hero>
      <section className="py-xxl" id="flexDirection">
        <div className="container">
          <h4>Margin</h4>

          {margin.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div className={`d-flex border-rounded bg-red-rocks-20 border`}>
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    style={{ width: '20%' }}
                    className={`${item} bg-lake-80 p-sm border-rounded mb-none border text-xs d-flex flex-col align-items-center justify-content-center`}
                  >
                    <p className="mb-none">{index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-xxl bg-slate-grey-40" id="flexDirection">
        <div className="container">
          <h4>Padding</h4>

          {padding.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div className={`d-flex border-rounded bg-red-rocks-20 border`}>
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    // style={{ width: '20%' }}
                    className={`${item} bg-lake-80 border-rounded border d-flex flex-col align-items-center justify-content-center`}
                  >
                    <p className="mb-none text-xs">{index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-xxl" id="flexDirection">
        <div className="container">
          <h4>Padding</h4>

          {nMargin.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div className={`d-flex border-rounded bg-red-rocks-20 border`}>
                {[...Array(3)].map((_, index, arr) => (
                  <div
                    key={index}
                    style={{ width: '20%' }}
                    className={`${conditionalClasses(
                      [!index, item],
                      [!index, 'bg-red-rocks-80', 'bg-lake-80']
                    )} p-sm  border-rounded border d-flex flex-col align-items-center justify-content-center`}
                  >
                    <p className="mb-none text-xs">
                      {!index ? 'Negative' : index + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Spacing
