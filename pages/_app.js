import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import Layout from '../components/Layout'
import styles from "../styles/global.module.scss"
import { Provider } from "react-redux";
import store from "../redux/store";
import customTheme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Provider store={store}>
        <Layout>
          <ColorModeProvider
            options={{
              initialColorMode: "light",
              useSystemColorMode: true
            }}
          >
            <Component {...pageProps} />
          </ColorModeProvider>
        </Layout>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
