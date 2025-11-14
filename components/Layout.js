import Link from 'next/link';
import styles from '@/styles/Layout.module.css';
import { useEffect, useState } from 'react';

function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
}

export default function Layout({ children }) {
  const scrolled = useScrollPosition();

  return (
    <div className={styles.wrapper}>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className="container">
          <div className={styles.headerInner}>
            <Link href="/" className={styles.brand}>
              <span>Aeternum</span>
              <span className={styles.brandSubtitle}>Haute Horlogerie</span>
            </Link>
            <nav className={styles.nav}>
              <Link href="/collections">Collections</Link>
              <Link href="/personnalisation">Personnalisation</Link>
              <Link href="/apropos">À propos</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div>
              <p className={styles.footerTitle}>Aeternum Haute Horlogerie</p>
              <p className={styles.footerCopy}>
                Ingénierie suisse, inspiration cosmique. Depuis 1898, une quête infinie de précision céleste.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/collections" className="link-underline">
                Collections
              </Link>
              <Link href="/personnalisation" className="link-underline">
                Configurateur
              </Link>
              <Link href="/contact" className="link-underline">
                Ambassadeurs
              </Link>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} Aeternum. Tous droits réservés.</span>
            <span>Fabriqué au cœur des Alpes suisses.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
