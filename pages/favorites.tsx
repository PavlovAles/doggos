import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss';

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Doggos | Favorites</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Your favorite doggos</h1>
      </section>
    </>
  )
}
