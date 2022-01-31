import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "../components/Header";

import { theme } from "../../styles/theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <Header path={router.asPath} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
