/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react'
import { CodeSnip } from '../components/CodeSnip'
import { Hero } from '../components/Hero'
import { ImageComponent } from '../components/ImageComponent'

const Typography: React.FC = (): JSX.Element => {
  const test = useRef()

  return (
    <main className="bg-slate-grey">
      <Hero hasAngle content={<h1>Typography</h1>}>
        <ImageComponent
          src={'landscape/traf-sL7w1eUfHJQ-unsplash.jpg'}
          isStaticImage
          width={1}
        />
      </Hero>

      <section className="container py-xl">
        <div className="py-xxl">
          <h1>Header 1</h1>
          <CodeSnip codeString="<h1> h1" />
          <h2>Header 2</h2>
          <CodeSnip codeString="<h2> h2" />
          <h3>Header 3</h3>
          <CodeSnip codeString="<h3> h3" />
          <h4>Header 4</h4>
          <CodeSnip codeString="<h4> h4" />
          <h5>Header 5</h5>
          <CodeSnip codeString="<h5> h5" />
          <h6>Header 6</h6>
          <CodeSnip codeString="<h6> h6" />
        </div>
        <div className="mb-xl">
          <h5 className="mb-md">Large font</h5>
          <CodeSnip codeString="text-lg" />
          <p className="text-lg mt-md border-top pt-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            venenatis urna cursus eget nunc scelerisque. Massa placerat duis
            ultricies lacus sed. Euismod nisi porta lorem mollis aliquam ut.
            Arcu odio ut sem nulla pharetra diam. Eu turpis egestas pretium
            aenean pharetra magna ac. Sodales neque sodales ut etiam. Tempus
            egestas sed sed risus. Eget lorem dolor sed viverra ipsum nunc
            aliquet bibendum enim. Augue ut lectus arcu bibendum. Non enim
            praesent elementum facilisis leo vel. Arcu non odio euismod lacinia
            at. Augue interdum velit euismod in pellentesque massa. Nec
            ullamcorper sit amet risus nullam. Dictum non consectetur a erat nam
            at lectus. Purus semper eget duis at tellus. Sed viverra tellus in
            hac habitasse platea dictumst. Nunc sed augue lacus viverra vitae.
            Volutpat est velit egestas dui id ornare arcu. Nullam ac tortor
            vitae purus faucibus ornare. At in tellus integer feugiat
            scelerisque. Est sit amet facilisis magna etiam tempor orci eu
            lobortis. Eu feugiat pretium nibh ipsum. Malesuada nunc vel risus
            commodo viverra maecenas accumsan lacus.
          </p>
        </div>
        <h5 className="mb-md">Regular font</h5>
        <CodeSnip codeString="text <p>" />
        <p className="text mt-md mb-xl border-top pt-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          venenatis urna cursus eget nunc scelerisque. Massa placerat duis
          ultricies lacus sed. Euismod nisi porta lorem mollis aliquam ut. Arcu
          odio ut sem nulla pharetra diam. Eu turpis egestas pretium aenean
          pharetra magna ac. Sodales neque sodales ut etiam. Tempus egestas sed
          sed risus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum
          enim. Augue ut lectus arcu bibendum. Non enim praesent elementum
          facilisis leo vel. Arcu non odio euismod lacinia at. Augue interdum
          velit euismod in pellentesque massa. Nec ullamcorper sit amet risus
          nullam. Dictum non consectetur a erat nam at lectus. Purus semper eget
          duis at tellus. Sed viverra tellus in hac habitasse platea dictumst.
          Nunc sed augue lacus viverra vitae. Volutpat est velit egestas dui id
          ornare arcu. Nullam ac tortor vitae purus faucibus ornare. At in
          tellus integer feugiat scelerisque. Est sit amet facilisis magna etiam
          tempor orci eu lobortis. Eu feugiat pretium nibh ipsum. Malesuada nunc
          vel risus commodo viverra maecenas accumsan lacus.
        </p>
        <h5 className="mb-md">Small font</h5>
        <CodeSnip codeString="text-sm" />
        <p className="text-sm mt-md mb-xl border-top pt-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          venenatis urna cursus eget nunc scelerisque. Massa placerat duis
          ultricies lacus sed. Euismod nisi porta lorem mollis aliquam ut. Arcu
          odio ut sem nulla pharetra diam. Eu turpis egestas pretium aenean
          pharetra magna ac. Sodales neque sodales ut etiam. Tempus egestas sed
          sed risus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum
          enim. Augue ut lectus arcu bibendum. Non enim praesent elementum
          facilisis leo vel. Arcu non odio euismod lacinia at. Augue interdum
          velit euismod in pellentesque massa. Nec ullamcorper sit amet risus
          nullam. Dictum non consectetur a erat nam at lectus. Purus semper eget
          duis at tellus. Sed viverra tellus in hac habitasse platea dictumst.
          Nunc sed augue lacus viverra vitae. Volutpat est velit egestas dui id
          ornare arcu. Nullam ac tortor vitae purus faucibus ornare. At in
          tellus integer feugiat scelerisque. Est sit amet facilisis magna etiam
          tempor orci eu lobortis. Eu feugiat pretium nibh ipsum. Malesuada nunc
          vel risus commodo viverra maecenas accumsan lacus.
        </p>
        <h5 className="mb-md">Extra Small font</h5>
        <CodeSnip codeString="text-xs" />
        <p className="text-xs mt-md mb-xl border-top pt-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          venenatis urna cursus eget nunc scelerisque. Massa placerat duis
          ultricies lacus sed. Euismod nisi porta lorem mollis aliquam ut. Arcu
          odio ut sem nulla pharetra diam. Eu turpis egestas pretium aenean
          pharetra magna ac. Sodales neque sodales ut etiam. Tempus egestas sed
          sed risus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum
          enim. Augue ut lectus arcu bibendum. Non enim praesent elementum
          facilisis leo vel. Arcu non odio euismod lacinia at. Augue interdum
          velit euismod in pellentesque massa. Nec ullamcorper sit amet risus
          nullam. Dictum non consectetur a erat nam at lectus. Purus semper eget
          duis at tellus. Sed viverra tellus in hac habitasse platea dictumst.
          Nunc sed augue lacus viverra vitae. Volutpat est velit egestas dui id
          ornare arcu. Nullam ac tortor vitae purus faucibus ornare. At in
          tellus integer feugiat scelerisque. Est sit amet facilisis magna etiam
          tempor orci eu lobortis. Eu feugiat pretium nibh ipsum. Malesuada nunc
          vel risus commodo viverra maecenas accumsan lacus.
        </p>
      </section>
      <section className="bg-white py-xl">
        <div className="container">
          <h5 className="mb-md border-bottom pb-md">Text Align</h5>
          <CodeSnip codeString="text-start" />
          <p className="text-start mt-md mb-xl pt-md">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="text-start" />
          <p className="text-center mt-md mb-xl pt-md">
            Hydrogen atoms laws of physics emerged into consciousness
          </p>
          <CodeSnip codeString="text-end" />
          <p className="text-end mt-md mb-xl pt-md">
            there's little good evidence brain is the seed of intelligence{' '}
          </p>
        </div>
      </section>
      <section className="py-xl bg-slate-grey-80">
        <div className="container">
          <h3>This is a section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            mollitia odio cum iusto, quam nihil eius sed fuga sequi odit.
            Perspiciatis, sint perferendis hic maxime quasi dolores distinctio
            iure voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolore nobis voluptatibus, adipisci eius excepturi aspernatur
            quis repudiandae, ex aut exercitationem illum consequatur alias
            similique pariatur necessitatibus accusantium rem vel! Et. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia
            odio cum iusto, quam nihil eius sed fuga sequi odit. Perspiciatis,
            sint perferendis hic maxime quasi dolores distinctio iure
            voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolore nobis voluptatibus, adipisci eius excepturi aspernatur
            quis repudiandae, ex aut exercitationem illum consequatur alias
            similique pariatur necessitatibus accusantium rem vel! Et.
          </p>

          <blockquote>
            <i>This is a block quote</i> I'm baffled all the time. We don't know
            what's driving 96% of the universe. Everybody you know and love and
            heard of and think about and see in the night sky through a
            telescope: four percent of the universe. Some asteroids have us in
            their sights. Be nice to sort of go near them and find out what
            they're made of, possibly tag their ears so they're always
            broadcasting to us their location. In case one of their trajectories
            head straight for us, we'll know well in advance to do something
            about it. I always try to get people a different outlook. When you
            do that, people take ownership of the information. They don't ever
            have to reference me because, I'd like to believe as an educator,
            I'm empowering them to have those thoughts themselves. So the
            history of discovery, particularly cosmic discovery, but discovery
            in general, scientific discovery, is one where at any given moment,
            there's a frontier. And there tends to be an urge for people,
            especially religious people, to assert that across that boundary,
            into the unknown, lies the handiwork of God. This shows up a lot.
            <br />
            <br />
            <CodeSnip codeString="<blockquote>" />
          </blockquote>
          <p>
            Every day, I wake up and I say, 'Why... how... did I end up with 1.7
            million Twitter followers?' It's freaky to me, every day, but that
            tells me that there's an appetite out there that had previously been
            underserved. There's an inner geek in us all, an inner bit of
            curiosity that people are discovering, and they like it. My parents
            didn't know much science; in fact, they didn't know science at all.
            But they could recognize a science book when they saw it, and they
            spent a lot of time at bookstores, combing the remainder tables for
            science books to buy for me. I had one of the biggest libraries of
            any kid in school, built on books that cost 50 cents or a dollar. I
            can't tell you how many people say they were turned off from science
            because of a science teacher that completely sucked out all the
            inspiration and enthusiasm they had for the course. Philosophically,
            the universe has really never made things in ones. The Earth is
            special and everything else is different? No, we've got seven other
            planets. The sun? No, the sun is one of those dots in the night sky.
            The Milky Way? No, it's one of a hundred billion galaxies. And the
            universe - maybe it's countless other universes. Our galaxy, the
            Milky Way, is one of 50 or 100 billion other galaxies in the
            universe. And with every step, every window that modern astrophysics
            has opened to our mind, the person who wants to feel like they're
            the center of everything ends up shrinking. Humans aren't as good as
            we should be in our capacity to empathize with feelings and thoughts
            of others, be they humans or other animals on Earth. So maybe part
            of our formal education should be training in empathy. Imagine how
            different the world would be if, in fact, that were 'reading,
            writing, arithmetic, empathy.' As a citizen, as a public scientist,
            I can tell you that Einstein essentially overturned a so strongly
            established paradigm of science, whereas Darwin didn't really
            overturn a science paradigm. There's a lot to do in space. I want to
            learn more about the greenhouse effect on Venus, about whether there
            was life on Mars, about the environment in which Earth and the Sun
            is immersed, the behavior of the Sun.
          </p>
          <CodeSnip codeString="indent" />
          <h3>This is a header using an h3</h3>
          <p className="indent text-lg">
            It's actually the minority of religious people who rejects science
            or feel threatened by it or want to sort of undo or restrict the...
            where science can go. The rest, you know, are just fine with
            science. And it has been that way ever since the beginning. People
            credit me for making the universe interesting when in fact the
            universe is inherently interesting, and I'm merely revealing that
            fact. I don't think I'm anything special for this to happen. I have
            a personal philosophy in life: If somebody else can do something
            that I'm doing, they should do it. And what I want to do is find
            things that would represent a unique contribution to the world - the
            contribution that only I, and my portfolio of talents, can make
            happen. Those are my priorities in life. My parents didn't know much
            science; in fact, they didn't know science at all. But they could
            recognize a science book when they saw it, and they spent a lot of
          </p>
          <h4>This is a header using an h4</h4>
          <p className="indent">
            It's actually the minority of religious people who rejects science
            or feel threatened by it or want to sort of undo or restrict the...
            where science can go. The rest, you know, are just fine with
            science. And it has been that way ever since the beginning. People
            credit me for making the universe interesting when in fact the
            universe is inherently interesting, and I'm merely revealing that
            fact. I don't think I'm anything special for this to happen. I have
            a personal philosophy in life: If somebody else can do something
            that I'm doing, they should do it. And what I want to do is find
            things that would represent a unique contribution to the world - the
            contribution that only I, and my portfolio of talents, can make
            happen. Those are my priorities in life. My parents didn't know much
            science; in fact, they didn't know science at all. But they could
            recognize a science book when they saw it, and they spent a lot of
          </p>
          <h5 className="mt-lg">This is a header using an h5</h5>
          <p className="indent text-sm">
            I don't think I'm anything special for this to happen. I have a
            personal philosophy in life: If somebody else can do something that
            I'm doing, they should do it. And what I want to do is find things
            that would represent a unique contribution to the world - the
            contribution that only I, and my portfolio of talents, can make
            happen. Those are my priorities in life. My parents didn't know much
            science; in fact, they didn't know science at all. But they could
            recognize a science book when they saw it, and they spent a lot of
          </p>
          <h6 className="mt-lg">This is a header using an h6</h6>
          <p className="indent text-xs">
            I don't think I'm anything special for this to happen. I have a
            personal philosophy in life: If somebody else can do something that
            I'm doing, they should do it. And what I want to do is find things
            that would represent a unique contribution to the world - the
            contribution that only I, and my portfolio of talents, can make
            happen. Those are my priorities in life. My parents didn't know much
            science; in fact, they didn't know science at all. But they could
            recognize a science book when they saw it, and they spent a lot of
          </p>
        </div>
      </section>

      <section className="bg-red-rocks-10">
        <div className="container py-xl">
          <h4 className="mb-md">Font Weights</h4>
          <CodeSnip codeString="font-weight-100" />
          <p className="text-start font-weight-100 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-200" />
          <p className="text-start font-weight-200 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-300" />
          <p className="text-start font-weight-300 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-400" />
          <p className="text-start font-weight-400 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-500" />
          <p className="text-start font-weight-500 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-600" />
          <p className="text-start font-weight-600 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-700" />
          <p className="text-start font-weight-700 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-800" />
          <p className="text-start font-weight-800 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
          <CodeSnip codeString="font-weight-900" />
          <p className="text-start font-weight-900 text-lg">
            I'm empowering them to have those thoughts themselves
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="container py-xl">
          <h4 className="mb-md">Lists</h4>
          <div className="d-flex">
            <div className="w-50">
              <ul>
                <li>
                  <p>lorem</p>
                </li>
                <li>
                  <p>ipsum</p>
                </li>
                <li>
                  <a className="link">link</a>
                </li>
                <li>
                  <ul>
                    <li>
                      <p>Nested List</p>
                    </li>
                    <li>
                      <p>Nested List</p>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <p className="mb-none">Double Nested List</p>
                          <ul>
                            <li>
                              <p className="mb-none">Tripple Nested List</p>
                            </li>
                            <li>
                              <a className="mb-none link">
                                Tripple Nested Link
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>ipsum</p>
                </li>
              </ul>
            </div>
            <div className="w-50">
              <ol>
                <li>
                  <p>lorem</p>
                </li>
                <li>
                  <a>Link</a>
                </li>
                <li>
                  <ul>
                    <li>
                      <a className="link">Link</a>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Typography
