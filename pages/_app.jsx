import '../styles/index.scss'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Head from 'next/head'
import { Nav } from '../components/Nav'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
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
    </>
  )
}

export default MyApp
