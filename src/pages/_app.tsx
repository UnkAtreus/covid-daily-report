import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
require('styles/global.less');

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Component {...pageProps} />
  </>
);

export default App;
