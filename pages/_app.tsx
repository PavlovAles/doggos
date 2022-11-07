import '../styles/globals.scss'
import { UserProvider } from '../context/CurrentUserContext';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
