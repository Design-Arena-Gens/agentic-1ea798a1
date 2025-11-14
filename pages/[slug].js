import Head from 'next/head';
import { useMemo } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import StarField from '@/components/StarField';
import collections from '@/data/collections';
import styles from '@/styles/CollectionDetail.module.css';

const extraDetails = {
  heritage: {
    narrative:
      "Au-delà de l'héritage, Heritage Astrale retrace les premières montres d'observation céleste développées par nos maîtres en 1898. Chaque pièce est gravée selon la charte cosmique originale, un savoir-faire transmis en secret.",
    features: [
      'Gravure main sur ponts polis miroir',
      'Calendrier perpetuel à équation du temps',
      'Anglage parfait & côtes de Genève stellaires',
    ],
    testimonials: [
      {
        quote:
          'La montre Heritage Astrale me fait ressentir la même émotion que lorsque j’observe Saturne à travers mon télescope. Une pièce à l’âme authentique.',
        author: 'Dr. Éloïse Varenn, Astrophysicienne',
      },
      {
        quote: 'La précision est inégalée. Elle dépasse les certifications habituelles grâce au réglage orbital.',
        author: 'L. Bianchi, Chronomètre Collector',
      },
    ],
  },
  sport: {
    narrative:
      "Conçue pour résister à la pression hypersynchrone des missions suborbitales, la Chrono Nova Sport associe un boîtier en titane météoritique et un mouvement à amortissement gravitationnel.",
    features: [
      'Chronographe orbital à roue à colonne',
      'Étanchéité 120 mètres & valves hélium',
      'Bracelet composite carbone/graphène',
    ],
    testimonials: [
      {
        quote: 'Je porte la Chrono Nova lors de chaque mission en station orbitale. Ergonomie, lisibilité, précision.',
        author: 'Commandant Irena Soler, Pilote ESA',
      },
      {
        quote: 'Une montre technique qui reste outrageusement raffinée, la signature Aeternum.',
        author: 'Ambassadeur Maison Aeternum',
      },
    ],
  },
  celestial: {
    narrative:
      "Celestial Resonance est un opéra horloger où chaque note correspond à un cycle lunaire. Les phases sont sculptées en relief, éclairées par des micro-éclats d'or rose stellaire.",
    features: [
      'Phase de lune double hémisphère',
      'Résonance orbitale avec double balancier',
      'Masse oscillante en météorite stabilisée',
    ],
    testimonials: [
      {
        quote: 'Un spectacle cosmique permanent au poignet, qui captive chaque collectionneur.',
        author: 'Marin Delavaux, Conservateur Musée Horloger',
      },
      {
        quote: 'La poésie de la mécanique céleste devient tangible.',
        author: 'A. Sato, Collectionneur Tokyo',
      },
    ],
  },
  atelier: {
    narrative:
      "Atelier Singularité est le laboratoire secret d'Aeternum. Chaque commande est un projet inédit, où matériaux et complications sont façonnés selon votre vision et l'inspiration cosmique du moment.",
    features: [
      'Programme de création sur-mesure complet',
      'Accès aux archives historiques de la maison',
      'Séances de design immersives en atelier',
    ],
    testimonials: [
      {
        quote: 'L’équipe a créé une pièce à partir des coordonnées de ma naissance sous une pluie de météores.',
        author: 'I. Moreau, Philanthrope Visionnaire',
      },
      {
        quote: 'Une collaboration à la fois artistique et scientifique.',
        author: 'Prof. Liam Hawke, Physicien Quantique',
      },
    ],
  },
};

export default function CollectionDetail({ collection, detail }) {
  const theme = collection?.tone || 'violet';

  const gradients = useMemo(
    () => ({
      violet: 'radial-gradient(circle at 50% 0%, rgba(123, 97, 255, 0.32), transparent 65%)',
      cyan: 'radial-gradient(circle at 50% 0%, rgba(107, 255, 206, 0.32), transparent 65%)',
      rose: 'radial-gradient(circle at 50% 0%, rgba(255, 107, 107, 0.28), transparent 65%)',
    }),
    []
  );

  return (
    <Layout>
      <Head>
        <title>{collection.name} | Aeternum Haute Horlogerie</title>
      </Head>
      <div className={styles.page}>
        <StarField />
        <section className="section" style={{ paddingTop: '160px' }}>
          <div className="container">
            <div className={`${styles.hero} gradient-border`}>
              <div className={styles.heroVisual} style={{ background: gradients[theme] }}>
                <div className={styles.heroAura} />
                <div className={styles.heroCore}>
                  <div className={styles.heroRing} />
                  <div className={styles.heroGlow} data-tone={theme} />
                </div>
              </div>
              <div className={styles.heroContent}>
                <span className={styles.tagline}>{collection.tagline}</span>
                <h1 className="h2" style={{ fontSize: '3rem', marginBottom: '16px' }}>{collection.name}</h1>
                <p className={styles.description}>{collection.description}</p>
                <div className={styles.pills}>
                  {collection.highlight.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link href="/personnalisation" className="button-primary">
                  Réserver une création
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={`${styles.narrative} gradient-border`}>
              <h2 className="h2" style={{ fontSize: '2rem', marginBottom: '18px' }}>Esprit de la collection</h2>
              <p>{detail.narrative}</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className={styles.featuresGrid}>
              {detail.features.map((feature) => (
                <div key={feature} className={`${styles.featureCard} gradient-border`}>
                  <span>✧</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0', paddingBottom: '160px' }}>
          <div className="container">
            <div className={styles.testimonials}>
              {detail.testimonials.map((testimonial) => (
                <div key={testimonial.author} className={`${styles.testimonialCard} gradient-border`}>
                  <p className={styles.quote}>“{testimonial.quote}”</p>
                  <span className={styles.author}>{testimonial.author}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: collections.map((collection) => ({ params: { slug: collection.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const collection = collections.find((item) => item.slug === params.slug);

  return {
    props: {
      collection,
      detail: extraDetails[params.slug],
    },
  };
}
