import { ChakraProvider } from "@chakra-ui/react"

import { Header } from "../components/Header"

import { theme } from '../../styles/theme'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <ChakraProvider theme={theme}>
      <Header path={router.asPath} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
