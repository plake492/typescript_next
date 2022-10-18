import { Hero } from '../components/Hero'
import { CodeSnip } from '../components/CodeSnip'
import { ImageComponent } from '../components/ImageComponent'
import { conditionalClasses } from '../utils/helpers'
import { SectionContainer } from '../components/SectionContainer'

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
      <SectionContainer>
        {/* {margin.map((item, index) => (
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
        ))} */}
        <div className="d-flex flex-wrap gap-md">
          <div className="w-50 text-sm">
            <h4>Margin</h4>
            <ul>
              <li>.m-xxxl</li>
              <li>.m-xxl</li>
              <li>.m-xl</li>
              <li>.m-lg</li>
              <li>.m-md</li>
              <li>.m-sm</li>
              <li>.m-xs</li>
              <li>.m-auto</li>
              <li>.m-none</li>
            </ul>
          </div>
          <div className="w-50 text-sm">
            <h4>Padding</h4>
            <ul>
              <li>.p-xxxl</li>
              <li>.p-xxl</li>
              <li>.p-xl</li>
              <li>.p-lg</li>
              <li>.p-md</li>
              <li>.p-sm</li>
              <li>.p-xs</li>
              <li>.p-auto</li>
              <li>.p-none</li>
            </ul>
          </div>
          <div className="w-50 text-sm">
            <h4>Negative Margin</h4>
            <ul>
              <li>.mn-xxxl</li>
              <li>.mn-xxl</li>
              <li>.mn-xl</li>
              <li>.mn-lg</li>
              <li>.mn-md</li>
              <li>.mn-sm</li>
              <li>.mn-xs</li>
              <li>.mn-auto</li>
              <li>.mn-none</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer title="Absolute Positions" bgColor="bg-secondary">
        {/* {padding.map((item, index) => (
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
                  className={`${item} bg-lake-80 border-rounded border d-flex flex-col align-items-center justify-content-center`}
                >
                  <p className="mb-none text-xs">{index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        ))} */}
        <p className="text-sm mb-sm weight-900">
          <b>top-0:</b> 0
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-25:</b> 25%
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-50:</b> 50%
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-75:</b> 75%
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-100:</b> 100%
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-n25:</b> -25%
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-n50:</b> -50%
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-n75:</b> -75%
        </p>
        <p className="text-sm mb-sm weight-900">
          <b>top-n100:</b> -100%
        </p>
        <div
          style={{ height: '400px' }}
          className="position-relative border-rounded bg-primary-40 border"
        >
          <div className="position-absolute box-shadow border-rounded right-0 top-100 p-xl bg-lake-80">
            right-0 | top-100
          </div>
          <div className="position-absolute box-shadow border-rounded left-50 top-50 p-xl bg-lake-80 absolute-center">
            left-50 | top-50 | Absolute center
          </div>
          <div className="position-absolute box-shadow border-rounded bottom-0 p-xl bg-lake-80">
            bottom-0
          </div>
        </div>
      </SectionContainer>
      <SectionContainer title="Negative Margin">
        {/* {nMargin.map((item, index) => (
          <div key={item + index} className="py-md my-md border-bottom">
            <div className="py-md d-flex align-items-center gap-xl">
              <h5 className="mb-none">{item.split('-').join(' ')}</h5>
              <div className="flex-1">
                <CodeSnip codeString={item} />
              </div>
            </div>
            <div className={`d-flex border-rounded bg-primary-40 border`}>
              {[...Array(3)].map((_, index, arr) => (
                <div
                  key={index}
                  style={{ width: '20%' }}
                  className={`${conditionalClasses(
                    [!index, item],
                    [!index, 'bg-lake-50', 'bg-lake-80']
                  )} p-sm  border-rounded border d-flex flex-col align-items-center justify-content-center`}
                >
                  <p className="mb-none text-xs">
                    {!index ? 'Negative' : index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </SectionContainer>
    </main>
  )
}

export default Spacing
