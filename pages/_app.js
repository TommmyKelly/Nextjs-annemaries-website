import "../styles/globals.css";
import "../styles/bootstrap.min (2).css";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBarHeader from "../components/NavBarHeader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
