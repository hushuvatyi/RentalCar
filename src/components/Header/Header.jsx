import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.css';
import sprite from '../../assets/sprite.svg';

console.log('from header');

export const Header = () => {
  return (
    <>
      <header className={styles.header}>


        <svg className={styles.logo}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>

        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>

      </header>
    </>
  );
};
