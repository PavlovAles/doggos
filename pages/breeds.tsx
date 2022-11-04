import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss';

export default function Breads() {
  return (
    <>
      <Head>
        <title>Doggos | Breeds</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Find your favorite doggo by breed</h1>
      </section>
    </>
  )
}
