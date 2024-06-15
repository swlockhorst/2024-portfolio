import { CSSReset } from '@/components/cssReset';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CSSReset />
      <Component {...pageProps} />
    </>
  );
}
