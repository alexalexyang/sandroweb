import "../styles/tailwind-preflight.css";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// export default process.env.NODE_ENV === "development"
//   ? dynamic(() => Promise.resolve(App), {
//       ssr: false,
//     })
//   : App;

export default App;
