import React from 'react'
import ActiveLink from '../ActiveLink/ActiveLink'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <style jsx>{`
          .active:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 1.5px;
            background-color: black;
          }
        `}</style>
        <li>
          <ActiveLink href='/' activeClassName='active'>
            <a className={styles.link}>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/breeds' activeClassName='active'>
            <a className={styles.link}>Breeds</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href='/favorites' activeClassName='active'>
            <a className={styles.link}>Favorites</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav