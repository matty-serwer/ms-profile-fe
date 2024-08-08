'use client';

import { useState } from 'react';
import Link from 'next/link';
// styles
import styles from './Header.module.css';
import { inter } from '@/app/ui/fonts';


const Header = () => {
  const [burgerClass, setBurgerClass] = useState(styles.burgerBarUnclicked);
  const [menuClass, setMenuClass] = useState(styles.hidden);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

// toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(styles.burgerBarClicked);
      setMenuClass(styles.menuVisible);
    } else {
      setBurgerClass(styles.burgerBarUnclicked);
      setMenuClass(styles.hidden);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className={`${styles.header} ${inter.className}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <h3>LTDe</h3>
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/resume" className={styles.navLink}>
              Resume
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/skills" className={styles.navLink}>
              Skills
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.burgerMenu} onClick={updateMenu}>
          <div className={`${styles.burgerBar} ${burgerClass}`}></div>
          <div className={`${styles.burgerBar} ${burgerClass}`}></div>
          <div className={`${styles.burgerBar} ${burgerClass}`}></div>
        </div>
      </nav>
      <div className={menuClass} id="drop-menu">
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link
              href="/projects"
              className={styles.menuLink}
              onClick={updateMenu}
            >
              <div className={styles.checkbox}/>
              Projects
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              href="/resume"
              className={styles.menuLink}
              onClick={updateMenu}
            >
              <div className={styles.checkbox}/>
              Resume
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              href="/skills"
              className={styles.menuLink}
              onClick={updateMenu}
            >
              <div className={styles.checkbox}/>
              Skills
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              href="/contact"
              className={styles.menuLink}
              onClick={updateMenu}
            >
              <div className={styles.checkbox}/>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
