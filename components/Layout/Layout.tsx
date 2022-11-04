import React, { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Layout.module.scss'
import Nav from '../Nav/Nav'

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Doggos breeds and photos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src='/images/logo.svg'
          className={styles.logo}
          height={32}
          width={32}
          alt='logo'
        />
        <Nav />
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>
          {`"Doggos" by Ales Pavlov with `}
          <a href='https://thedogapi.com/' target='_blank' rel='noreferrer noopener'>The Dog API</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout