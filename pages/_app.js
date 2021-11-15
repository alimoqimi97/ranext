import '../styles/globals.css'

// in this file, we can customize App component. Component argument is current page
// that is rendering; also pageProps is input data that we enter the page.

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} >

          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/> */}
          </Component>);
}

export default MyApp
