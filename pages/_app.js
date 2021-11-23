import '../styles/globals.css'

// in this file, we can customize App component. Component argument is current page
// that is rendering; also pageProps is input data that we enter the page.

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}

export default MyApp;
