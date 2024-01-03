import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { SessionProvider, useSession } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';
import { useRouter } from 'next/router';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Loading from '../components/Shared/Loading';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient();
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={12}
        showOnShallow={true}
      />
      <SessionProvider session={session}>
        <StoreProvider>
          <PayPalScriptProvider deferLoading={true}>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                {Component.auth ? (
                  <Auth adminOnly={Component.auth.adminOnly}>
                    <Component {...pageProps} />
                  </Auth>
                ) : (
                  <Component {...pageProps} />
                )}
              </Hydrate>
            </QueryClientProvider>
          </PayPalScriptProvider>
        </StoreProvider>
      </SessionProvider>
    </>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}

export default MyApp;
