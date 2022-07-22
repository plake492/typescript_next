import { CodeSnip } from '../components/CodeSnip'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'

const Typography: React.FC = (): JSX.Element => (
  <main className="bg-slate-grey">
    <Hero
      hasAngle
      content={
        <div className="container py-xxl">
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
        </div>
      }
    >
      <ImageComponent
        src={'landscape/traf-sL7w1eUfHJQ-unsplash.jpg'}
        isStaticImage
        width={1}
      />
    </Hero>

    <section className="container py-xxl">
      <h5 className="mb-md">Large font</h5>
      <CodeSnip codeString="text-lg" />
      <p className="text-lg mt-md mb-xl border-top pt-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur
        dolore distinctio porro earum, fuga quia neque in maiores blanditiis
        obcaecati iure molestiae facere exercitationem voluptates aliquid
        libero. Fuga, vel.
      </p>
      <h5 className="mb-md">Regular font</h5>
      <CodeSnip codeString="text <p>" />
      <p className="text mt-md mb-xl border-top pt-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur
        dolore distinctio porro earum, fuga quia neque in maiores blanditiis
        obcaecati iure molestiae facere exercitationem voluptates aliquid
        libero. Fuga, vel.
      </p>
      <h5 className="mb-md">Small font</h5>
      <CodeSnip codeString="text-sm" />
      <p className="text-sm mt-md mb-xl border-top pt-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur
        dolore distinctio porro earum, fuga quia neque in maiores blanditiis
        obcaecati iure molestiae facere exercitationem voluptates aliquid
        libero. Fuga, vel.
      </p>
      <h5 className="mb-md">Extra Small font</h5>
      <CodeSnip codeString="text-xm" />
      <p className="text-xs mt-md mb-xl border-top pt-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequatur
        dolore distinctio porro earum, fuga quia neque in maiores blanditiis
        obcaecati iure molestiae facere exercitationem voluptates aliquid
        libero. Fuga, vel.
      </p>
    </section>
  </main>
)

export default Typography
