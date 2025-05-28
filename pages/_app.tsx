import type { AppProps } from 'next/app';
import { useEffect, useMemo, useState, createContext } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/styles.css';
import ThemeHook from '../src/Hooks/ThemeHook';

export const ColorModeContext = createContext({
  mode: 'dark',
  toggleColorMode: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const getDesignTokens = ThemeHook(mode, setMode);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-S1GYT9Q22G', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      {/* ✅ Canonical Tag */}
      <Head>
        <link
          rel="canonical"
          href={`https://vibhanshujain.vercel.app${router.asPath === '/' ? '' : router.asPath}`}
        />
      </Head>

      {/* ✅ Google Analytics Setup */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-S1GYT9Q22G"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S1GYT9Q22G', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* ✅ Theme Setup */}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default MyApp;
