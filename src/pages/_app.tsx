import { MantineProvider } from '@mantine/core';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import Head from 'next/head';

import { Layout } from '@/components/layout';
import { theme } from '@/styles/theme';
import { api } from '@/utils/api';
import { emotionCache } from '@/utils/emotion-cache';

import '@/styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>DNV</title>
      </Head>
      <SessionProvider session={session}>
        <MantineProvider
          emotionCache={emotionCache}
          theme={theme}
          withGlobalStyles
          withNormalizeCSS
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
