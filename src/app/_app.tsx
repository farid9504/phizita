import { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

// Define the type for the page props
type PageProps = Record<string, unknown>;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, props: PageProps) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: PageProps;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />, pageProps);
}

export default MyApp;
