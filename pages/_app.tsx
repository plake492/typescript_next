import '../styles/index.scss'
import Head from 'next/head'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Nav } from '../components/Nav'

const MyApp = ({ Component, pageProps, router }): JSX.Element => {
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
