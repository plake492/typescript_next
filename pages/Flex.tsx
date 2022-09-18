import { CodeSnip } from '../components/CodeSnip'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'
import { conditionalClasses } from '../utils/helpers'

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
  const flexDirection = [
    'flex-row',
    'flex-col',
    'flex-row-reverse',
    'flex-col-reverse'
  ]
  const flexGap = [
    'gap-sm',
    'gap-md',
    'gap-lg',
    'gap-xl',
    'gap-xxl',
    'gap-xxxl'
  ]
  const alignItems = [
    'align-items-center',
    'align-items-flex-start',
    'align-items-flex-end',
    'align-items-stretch',
    'align-items-baseline'
  ]
  const flex = [
    'flex-1',
    'flex-2',
    'flex-3',
    'flex-4',
    'flex-5',
    'flex-6',
    'flex-7',
    'flex-8',
    'flex-9',
    'flex-10'
  ]
  const center = ['flex-center']

  return (
    <main
      className="bg-slate-grey-20 position-relative"
      style={{ height: '100%' }}
    >
      <Hero hasAngle content={<h1>Flex Box</h1>}>
        <ImageComponent isStaticImage width={1000} src={image} priority />
      </Hero>
      <div className="position-sticky top-0 z-900 bg-slate-grey-20 pb-md box-shadow">
        <section className="top-0 left-0 pt-md ml-md">
          <ul className="d-flex justify-content-center gap-md">
            <li>
              <a className="link" href="#flexDirection">
                <span className="text-light text-xs">Flex Direction</span>
              </a>
            </li>
            <li>
              <a className="link" href="#justifyContentRow">
                <span className="text-light text-xs">Justify Content Row</span>
              </a>
            </li>
            <li>
              <a className="link" href="#justifyContentCol">
                <span className="text-light text-xs">Justify Content Col</span>
              </a>
            </li>
            <li>
              <a className="link" href="#alignItemsRow">
                <span className="text-light text-xs">Align Items Row</span>
              </a>
            </li>
            <li>
              <a className="link" href="#alignItemsCol">
                <span className="text-light text-xs">Align Items Col</span>
              </a>
            </li>
            <li>
              <a className="link" href="#flexGrow">
                <span className="text-light text-xs">Flex Grow</span>
              </a>
            </li>
            <li>
              <a className="link" href="#flexGaps">
                <span className="text-light text-xs">Flex Gaps</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="position-relative">
        <section
          className="py-xxl container"
          style={{ '--card-divider': 7 } as React.CSSProperties}
        >
          <div className="py-md border-bottom mb-md">
            <h4>Flex Classes</h4>
            <div className="d-flex align-items-center gap-xl mb-xl">
              <p className="mb-none ">
                All parent Classes must be wrapped with:{' '}
              </p>
              <div className="flex-1">
                <CodeSnip codeString="d-flex" />
              </div>
            </div>
          </div>
        </section>

        {/* Flex Direction */}
        <section className="py-xxl bg-slate-grey-40" id="flexDirection">
          <div className="container">
            <h4>Flex Directions</h4>

            {flexDirection.map((item, index) => (
              <div key={item + index} className="py-md my-md border-bottom">
                <div className="py-md d-flex align-items-center gap-xl">
                  <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                  <div className="flex-1">
                    <CodeSnip codeString={item} />
                  </div>
                </div>
                <div
                  className={`d-flex ${item} border-rounded bg-red-rocks-20 border`}
                >
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      style={{ width: '20%' }}
                      className="bg-lake-80 p-sm border-rounded mb-none border text-xs d-flex flex-col align-items-center justify-content-center"
                    >
                      <p className="mb-none">{index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Justify Content ROW */}
        <section className="py-xxl" id="justifyContentRow">
          <div className="container">
            <h4>Justify Content Classes (flex-row)</h4>
            {justifyContent.map((item, index) => (
              <div key={item + index} className="py-md my-md border-bottom">
                <div className="py-md d-flex align-items-center gap-xl">
                  <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                  <div className="flex-1">
                    <CodeSnip codeString={item} />
                  </div>
                </div>
                <div
                  className={`d-flex ${item} bg-red-rocks border-rounded border`}
                >
                  {[...Array(3)].map((_, index) => (
                    <p
                      key={index}
                      style={{ width: '20%' }}
                      className="bg-lake-80 p-sm border-rounded mb-none border text-xs"
                    >
                      {index + 1}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Justify Content COL */}
        <section className="py-xxl bg-slate-grey-40" id="justifyContentCol">
          <div className="container">
            <h4>Justify Content Classes (flex-col)</h4>
            <div className="d-flex flex-wrap gap-xl">
              {justifyContent.map((item, index) => (
                <div
                  key={item + index}
                  className={`py-md my-md w-50 ${conditionalClasses([
                    index % 2 === 0,
                    'border-right pr-xl'
                  ])}`}
                >
                  <div className="py-md">
                    <h5>{item.split('-').join(' ')}</h5>
                    <div className="flex-1">
                      <CodeSnip codeString={item} />
                    </div>
                  </div>
                  <div
                    className={`d-flex flex-col border border-rounded bg-red-rocks-20 ${item}`}
                    style={{ height: '375px' }}
                  >
                    {[...Array(3)].map((_, index) => (
                      <p
                        key={index}
                        className="bg-lake-80 p-md border-rounded mb-none border text-xs"
                      >
                        {index + 1}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Align Items ROW */}
        <section className="py-xxl" id="alignItemsRow">
          <div className="container py-xxl">
            <h4>Align Items (flex-row)</h4>
            {alignItems.map((item, index) => (
              <div key={item + index} className="py-md my-md border-bottom">
                <div className="py-md d-flex align-items-center gap-xl">
                  <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                  <div className="flex-1">
                    <CodeSnip codeString={item} />
                  </div>
                </div>
                <div
                  className={`d-flex bg-red-rocks border border-rounded ${item}`}
                >
                  {[...Array(3)].map((_, index) => (
                    <p
                      key={index}
                      style={{ width: '20%' }}
                      className={`bg-lake-80  border-rounded mb-none border text-xs ${conditionalClasses(
                        [
                          (index + 1) % 3 !== 0,
                          'pt-lg pb-md pl-md pr-md',
                          'p-md'
                        ]
                      )}`}
                    >
                      {(index + 1) % 3 === 0
                        ? 'Align this'
                        : 'If you get asteroids about a kilometer in size, those are large enough and carry enough energy into'}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Align Items COL */}
        <section className="bg-slate-grey-40" id="alignItemsCol">
          <div className="container py-xxl">
            <h4>Align Items (flex-col)</h4>
            <div className="d-flex flex-wrap gap-xl">
              {alignItems.map((item, index) => (
                <div
                  key={item + index}
                  className={`py-md my-md w-50 ${conditionalClasses([
                    index % 2 === 0 && index !== alignItems.length - 1,
                    'border-right pr-xl'
                  ])}`}
                >
                  <div className="py-md">
                    <h5>{item.split('-').join(' ')}</h5>
                    <div className="flex-1">
                      <CodeSnip codeString={item} />
                    </div>
                  </div>
                  <div
                    className={`d-flex flex-col border border-rounded bg-red-rocks-20 ${item}`}
                    style={{ height: '375px' }}
                  >
                    {[...Array(3)].map((_, index) => (
                      <p
                        key={index}
                        className={`bg-lake-80 p-md border-rounded mb-none border text-xs`}
                      >
                        {(index + 1) % 3 === 0
                          ? 'Align this'
                          : 'If you get asteroids about a kilometer in size'}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flex Grow */}
        <section>
          <div className="container py-xxl" id="flexGrow">
            <h4>Flex</h4>
            {flex.map((item, index) => (
              <div key={item + index} className="py-md my-md border-bottom">
                <div className="py-md d-flex align-items-center gap-xl">
                  <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                  <div className="flex-1">
                    <CodeSnip codeString={item} />
                  </div>
                </div>
                <div className={`d-flex border-rounded border bg-red-rocks`}>
                  <p
                    key={index}
                    style={{ width: '20%' }}
                    className={`bg-lake-80 p-sm border-rounded mb-none border text-xs ${item}`}
                  >
                    {item}
                  </p>
                  <p
                    key={index}
                    style={{ width: '20%' }}
                    className={`bg-lake-50 p-sm border-rounded mb-none border text-xs flex-1`}
                  >
                    flex-1
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flex Gaps */}
        <section className="bg-slate-grey-40" id="flexGaps">
          <div className="container py-xxl">
            <h4>Flex Gaps</h4>
            {flexGap.map((item, index) => (
              <div key={item + index} className="py-md my-md border-bottom">
                <div className="py-md d-flex align-items-center gap-xl">
                  <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                  <div className="flex-1">
                    <CodeSnip codeString={item} />
                  </div>
                </div>
                <div
                  className={`d-flex bg-red-rocks-20 border border-rounded ${item}`}
                >
                  {[...Array(3)].map((_, index) => (
                    <p
                      key={index}
                      style={{ width: '20%' }}
                      className="bg-lake-80 p-sm border-rounded mb-none border text-xs"
                    >
                      {index + 1}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-xxl" id="justifyContentCol">
          <div className="container">
            <h4>Center Item</h4>
            <div className="d-flex flex-wrap">
              {center.map((item, index) => (
                <div key={item + index} className="py-md my-md w-100">
                  <div className="py-md">
                    <h5>{item.split('-').join(' ')}</h5>
                    <div className="flex-1">
                      <CodeSnip codeString={item} />
                    </div>
                  </div>
                  <div
                    className={`border border-rounded bg-red-rocks-20 ${item}`}
                    style={{ height: '350px' }}
                  >
                    {[...Array(1)].map((_, index) => (
                      <div
                        key={index}
                        style={{ height: '100px', width: '100px' }}
                        className="bg-lake-80 p-md flex-center border-rounded mb-none border text-xs"
                      >
                        <p className="text-xs">{index + 1}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Flex
