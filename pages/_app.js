import "../styles/globals.css";
import "@/styles/bootstrap.min (2).css";
import MainState from "context/main/MainState";
import NavBarHeader from "components/NavBarHeader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainState>
        <NavBarHeader />
        <Component {...pageProps} />
      </MainState>
    </>
  );
}

export default MyApp;
