import '../styles/globals.scss'
import '../styles/locomotive-scroll.css'
import {Provider} from "react-redux";
import {store} from '../redux/index'
import Head from "next/head";
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";

function MyApp({ Component, pageProps }) {

  return (
      <>
      <Head>
          <title>ArtBee</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
      </>
  )
}

export default MyApp
