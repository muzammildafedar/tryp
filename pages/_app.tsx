import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import store from "@redux/store";
import "@styles/global.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
