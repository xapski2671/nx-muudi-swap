import "@/styles/globals.sass"
import type { AppProps } from "next/app"
import Layout from "./Layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
