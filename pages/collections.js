import Head from 'next/head';
import Link from 'next/link';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import StarField from '@/components/StarField';
import collections from '@/data/collections';
import styles from '@/styles/Collections.module.css';

const capsuleHighlights = [
  {
    title: 'Éditions Limitées',
    text: 'Chaque collection est limitée à 88 pièces numérotées, accompagnées d’un certificat cosmique.'
  },
  {
    title: 'Excellence Matières',
    text: 'Sélection de métaux précieux rares, météorites, or noir et pierres cosmiques.'
  },
  {
    title: 'Complications Exclusives',
    text: 'Phases de lune sphériques, tourbillons gravitationnels, chrono orbitaire.'
  }
];

export default function Collections() {
  const scrollContainer = useRef(null);

  return (
    <Layout>
      <Head>
        <title>Collections | Aeternum Haute Horlogerie</title>
      </Head>
      <div className={styles.page}>
        <StarField />
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="container">
            <div className={styles.header}>
              <div>
                <span className={styles.tag}>Galerie cosmique</span>
                <h1 className="h2" style={{ fontSize: '3rem', marginBottom: '16px' }}>
                  Les collections d&apos;exception Aeternum
                </h1>
                <p style={{ maxWidth: '720px', color: 'rgba(244,240,255,0.75)', fontSize: '1.2rem', lineHeight: 1.6 }}>
                  Explorez nos univers singuliers. Faites défiler horizontalement pour traverser chaque capsule curatoriale conçue par nos horlogers cosmologues.
                </p>
              </div>
              <div className={styles.scrollHint}>Glisser latéralement</div>
            </div>
          </div>
          <div className={styles.horizontalWrapper}>
            <button
              className={styles.navButton}
              onClick={() => {
                if (scrollContainer.current) {
                  scrollContainer.current.scrollBy({ left: -420, behavior: 'smooth' });
                }
              }}
              aria-label="Défiler vers la gauche"
            >
              ◄
            </button>
            <div className={styles.horizontalScroll} ref={scrollContainer}>
              {collections.map((collection) => (
                <motion.article
                  key={collection.slug}
                  className={`${styles.card} gradient-border`}
                  whileHover={{ translateY: -12 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                >
                  <div className={styles.cardBody}>
                    <span className={styles.cardTag}>{collection.tagline}</span>
                    <h2 className="h2" style={{ fontSize: '2rem', marginBottom: '10px' }}>{collection.name}</h2>
                    <p className={styles.cardDescription}>{collection.description}</p>
                    <ul className={styles.cardHighlights}>
                      {collection.highlight.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link href={`/${collection.slug}`} className="button-primary">
                      Découvrir la collection
                    </Link>
                  </div>
                  <div className={styles.cardMedia}>
                    <div className={styles.cardGradient} data-tone={collection.tone} />
                    <div className={styles.cardAurora} />
                  </div>
                </motion.article>
              ))}
            </div>
            <button
              className={styles.navButton}
              onClick={() => {
                if (scrollContainer.current) {
                  scrollContainer.current.scrollBy({ left: 420, behavior: 'smooth' });
                }
              }}
              aria-label="Défiler vers la droite"
            >
              ►
            </button>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className={styles.capsules}>
              {capsuleHighlights.map((capsule) => (
                <div key={capsule.title} className={`${styles.capsule} gradient-border`}>
                  <h3 className="h2" style={{ fontSize: '1.6rem', marginBottom: '14px' }}>{capsule.title}</h3>
                  <p>{capsule.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
