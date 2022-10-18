import { CodeSnip } from '../components/CodeSnip'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'
import { conditionalClasses } from '../utils/helpers'
import { SectionContainer } from '../components/SectionContainer'

export default function Flex(): JSX.Element {
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

  const pageLinks = [
    { text: 'Flex Direction', href: '#flexDirection' },
    { text: 'Justify Content Row', href: '#justifyContentRow' },
    { text: 'Justify Content Col', href: '#justifyContentCol' },
    { text: 'Align Items Row', href: '#alignItemsRow' },
    { text: 'Align Items Col', href: '#alignItemsCol' },
    { text: 'Flex Grow', href: '#flexGrow' },
    { text: 'Flex Gaps', href: '#flexGaps' }
  ]

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
            {pageLinks.map(({ text, href }: { text: string; href: string }) => (
              <li key={href}>
                <a className="link" href={`#${href}`}>
                  <span className="text-light text-xs">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="position-relative">
        <SectionContainer title="Flex Classes">
          <div className="d-flex align-items-center gap-xl mb-xl">
            <p className="mb-none ">
              All parent Classes must be wrapped with:{' '}
            </p>
            <div className="flex-1">
              <CodeSnip codeString="d-flex" />
            </div>
          </div>
        </SectionContainer>

        {/* Flex Direction */}
        <SectionContainer
          title="Flex Directions"
          bgColor="bg-slate-grey-40"
          id="flexDirection"
        >
          {flexDirection.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div
                className={`d-flex ${item} border-rounded bg-primary-20 border`}
              >
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className={`bg-lake-80 p-sm border-rounded mb-none border text-xs flex-center ${conditionalClasses(
                      [item.includes('col'), 'w-100', 'w-25']
                    )}`}
                  >
                    <p className="mb-none">{index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </SectionContainer>

        {/* Justify Content ROW */}
        <SectionContainer
          title="Justify Content Classes (flex-row)"
          id="justifyContentRow"
        >
          {justifyContent.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div
                className={`d-flex ${item} bg-primary-40 border-rounded border`}
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
        </SectionContainer>

        {/* Justify Content COL */}
        <SectionContainer
          title="Justify Content Classes (flex-col)"
          bgColor=" bg-slate-grey-40"
          id="justifyContentCol"
        >
          <div className="d-flex flex-wrap gap-col-xl gap-row-md">
            {justifyContent.map((item, index) => (
              <div key={item + index} className="py-md w-50">
                <div className="py-md">
                  <h5>{item.split('-').join(' ')}</h5>
                  <div className="flex-1">
                    <CodeSnip codeString={item} />
                  </div>
                </div>
                <div
                  className={`d-flex flex-col border border-rounded bg-primary-20 ${item}`}
                  style={{ height: '300px' }}
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
        </SectionContainer>

        {/* Align Items ROW */}
        <SectionContainer title="Align Items (flex-row)" id="alignItemsRow">
          {alignItems.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div
                className={`d-flex bg-primary-40 border border-rounded ${item}`}
              >
                {[...Array(3)].map((_, index) => (
                  <p
                    key={index}
                    style={{ width: '20%' }}
                    className={`bg-lake-80  border-rounded mb-none border text-xs ${conditionalClasses(
                      [(index + 1) % 3 !== 0, 'pt-lg pb-md pl-md pr-md', 'p-md']
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
        </SectionContainer>

        {/* Align Items COL */}
        <SectionContainer
          title="Align Items (flex-col)"
          bgColor="bg-slate-grey-40"
          id="alignItemsCol"
        >
          <div className="d-flex flex-wrap gap-col-xl">
            {alignItems.map((item, index) => (
              <div key={item + index} className="py-md w-50">
                <div className="py-md">
                  <h5>{item.split('-').join(' ')}</h5>
                  <div className="flex-1">
                    <CodeSnip codeString={item} />
                  </div>
                </div>
                <div
                  className={`d-flex flex-col border border-rounded bg-primary-20 ${item}`}
                  style={{ height: '250px' }}
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
        </SectionContainer>

        {/* Flex Grow */}
        <SectionContainer title="Flex Grow" id="flexGrow">
          {flex.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div className={`d-flex border-rounded border bg-primary-40`}>
                <p
                  key={index}
                  className={`bg-lake-80 p-sm border-rounded mb-none border text-xs ${item}`}
                >
                  {item}
                </p>
                <p
                  key={index}
                  className={`bg-lake-50 p-sm border-rounded mb-none border text-xs flex-1`}
                >
                  flex-1
                </p>
              </div>
            </div>
          ))}
        </SectionContainer>

        {/* Flex Gaps */}
        <SectionContainer
          title="Flex Gaps"
          bgColor="bg-slate-grey-40"
          id="flexGaps"
        >
          {flexGap.map((item, index) => (
            <div key={item + index} className="py-md my-md border-bottom">
              <div className="py-md d-flex align-items-center gap-xl">
                <h5 className="mb-none">{item.split('-').join(' ')}</h5>
                <div className="flex-1">
                  <CodeSnip codeString={item} />
                </div>
              </div>
              <div
                className={`d-flex bg-primary-20 border border-rounded ${item}`}
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
        </SectionContainer>

        <SectionContainer title="Center Item" id="justifyContentCol">
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
                  className={`border border-rounded bg-primary-20 ${item}`}
                  style={{ height: '200px' }}
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
        </SectionContainer>
      </div>
    </main>
  )
}
