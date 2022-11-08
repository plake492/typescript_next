import '../styles/index.scss'
import Head from 'next/head'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

const MyApp = ({ Component, pageProps, router }): JSX.Element => {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={router.pathname}
          classNames="transitions__page"
          timeout={200}
        >
          <Component {...pageProps} />
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </main>
  )
}

export default MyApp
