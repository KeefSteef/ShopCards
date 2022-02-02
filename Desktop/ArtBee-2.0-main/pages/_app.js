import '../styles/globals.scss'
import '../styles/locomotive-scroll.css'
import {Provider} from "react-redux";
import {store} from '../redux/index'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      </>
  )
}

export default MyApp
