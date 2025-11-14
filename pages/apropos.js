import Head from 'next/head';
import Layout from '@/components/Layout';
import StarField from '@/components/StarField';
import styles from '@/styles/About.module.css';

const milestones = [
  { year: '1898', text: "Fondation d'Aeternum par l'horloger Auguste Valmont dans la vallée de Joux." },
  { year: '1926', text: 'Premier calibre à équation du temps inspiré par les mouvements planétaires.' },
  { year: '1969', text: "Création du laboratoire orbital, pionnier dans les tests en apesanteur d'instruments horlogers." },
  { year: '2008', text: 'Naissance de la collection Celestial Resonance, une icône cosmique limitée à 88 pièces.' },
  { year: '2024', text: 'Inauguration de l’Atelier Singularité, dédié aux créations sur-mesure interstellaires.' },
];

const artisans = [
  {
    name: 'Maître Horloger Lucien Favre',
    role: 'Directeur Atelier Complications',
    bio: 'Spécialiste des tourbillons multi-axes, Lucien orchestre les mouvements à résonance orbitale d’Aeternum.',
  },
  {
    name: 'Dr. Inès Moretti',
    role: 'Astrophysicienne Résidente',
    bio: 'Elle transforme les données cosmiques en inspirations tangibles pour les cadrans et complications célestes.',
  },
  {
    name: 'Kaori Tsukishima',
    role: 'Artisane du cadran',
    bio: 'Maître émailleur, elle sublime les cadrans avec des gradients galactiques à la poudre d’or cosmique.',
  },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>À propos | Aeternum Haute Horlogerie</title>
      </Head>
      <div className={styles.page}>
        <StarField />
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="container">
            <div className={`${styles.intro} gradient-border`}>
              <div>
                <span className={styles.tag}>Maison Aeternum</span>
                <h1 className="h2" style={{ fontSize: '3rem', marginBottom: '18px' }}>
                  Héritage horloger et visions cosmiques
                </h1>
                <p className={styles.lead}>
                  Depuis plus d’un siècle, Aeternum fusionne l’art horloger suisse et la poétique du cosmos. Notre maison se consacre à créer des pièces sacrées, dialogues permanents entre le temps terrestre et la danse des constellations.
                </p>
              </div>
              <div className={styles.metrics}>
                <div>
                  <strong>168</strong>
                  <span>Artisans dédiés</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Laboratoires orbitaux partenaires</span>
                </div>
                <div>
                  <strong>88</strong>
                  <span>Pièces par collection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className={`${styles.timeline} gradient-border`}>
              <h2 className="h2" style={{ fontSize: '2rem', marginBottom: '24px' }}>Chronologie de la maison</h2>
              <div className={styles.timelineGrid}>
                {milestones.map((item) => (
                  <div key={item.year} className={styles.timelineItem}>
                    <span>{item.year}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0', paddingBottom: '160px' }}>
          <div className="container">
            <div className={styles.teamGrid}>
              {artisans.map((artisan) => (
                <div key={artisan.name} className={`${styles.teamCard} gradient-border`}>
                  <div className={styles.portrait} />
                  <h3 className="h2" style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{artisan.name}</h3>
                  <span className={styles.role}>{artisan.role}</span>
                  <p>{artisan.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
