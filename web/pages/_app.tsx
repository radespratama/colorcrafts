import type { AppProps } from "next/app";
import Nprogress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";

import GlobalStyle from "@css/global.style";

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyle();
  return (
    <>
      <Nprogress
        color="#77ACF1"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}

export default MyApp;
