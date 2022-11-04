import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Doggos | Home</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Find and save your favorite doggos</h1>
      </section>
    </>
  )
}
