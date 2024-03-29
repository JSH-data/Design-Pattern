import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/layout/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
