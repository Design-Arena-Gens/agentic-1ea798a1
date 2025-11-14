import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import StarField from '@/components/StarField';
import collections from '@/data/collections';

const heroWords = ['Chronométrie', 'Cosmique', 'Ingénierie', 'Éternelle'];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Aeternum Haute Horlogerie | Montres suisses ultra-luxe</title>
      </Head>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <StarField />
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '140px' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="gradient-border"
              style={{ padding: '60px', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px',
                background: 'radial-gradient(circle, rgba(123, 97, 255, 0.55), transparent 70%)', filter: 'blur(12px)' }}
              />
              <div style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '190px', height: '190px',
                background: 'radial-gradient(circle, rgba(107, 255, 206, 0.5), transparent 70%)', filter: 'blur(14px)' }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ letterSpacing: '0.9em', textTransform: 'uppercase', fontSize: '0.9rem', color: 'rgba(244,240,255,0.65)' }}>
                  Aeternum Haute Horlogerie
                </p>
                <h1 className="hero-title" style={{ fontSize: '3.6rem', lineHeight: 1.15, margin: '28px 0 16px' }}>
                  La quintessence de l&apos;horlogerie cosmique suisse
                </h1>
                <p style={{ fontSize: '1.35rem', maxWidth: '720px', color: 'rgba(244,240,255,0.75)', lineHeight: 1.5 }}>
                  Des pièces d&apos;exception inspirées par la danse éternelle des constellations. Chaque garde-temps est un voyage, façonné par nos maîtres horlogers à la recherche d&apos;une précision absolue.
                </p>
                <div style={{ display: 'flex', gap: '20px', marginTop: '36px', flexWrap: 'wrap' }}>
                  <Link href="/collections" className="button-primary">
                    Explorer les collections
                  </Link>
                  <Link href="/personnalisation" className="link-underline" style={{ fontSize: '1.1rem' }}>
                    Créer votre pièce
                  </Link>
                </div>
                <div style={{ marginTop: '50px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                  {heroWords.map((word, index) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * index }}
                      style={{
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                        color: 'rgba(244,240,255,0.6)',
                        fontSize: '0.95rem',
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gap: '36px', marginBottom: '50px' }}>
              <span style={{ letterSpacing: '0.6em', textTransform: 'uppercase', color: 'rgba(244,240,255,0.55)' }}>
                Manifesto
              </span>
              <h2 className="h2" style={{ fontSize: '2.6rem', lineHeight: 1.25 }}>
                Un héritage suisse projeté vers l&apos;infini cosmique
              </h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(244,240,255,0.75)', maxWidth: '780px', lineHeight: 1.6 }}>
                Aeternum écrit la destinée des grands collectionneurs. Nos ateliers de Genève façonnent des mouvements fabriqués à la main, inspirés par la mécanique céleste, pour des pièces en édition strictement limitée.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {[
                {
                  title: 'Ingénierie Orbitale',
                  text: 'Complications exclusives inspirées par les cycles stellaires et maîtrisées par nos horlogers certifiés.'
                },
                {
                  title: 'Atelier Signature',
                  text: 'Matériaux rares, météorites stabilisées, métaux précieux et finitions main pour chaque commande.'
                },
                {
                  title: 'Chronométrie Totale',
                  text: 'Certification COSC renforcée par nos propres tests gravitationnels en environnement orbital simulé.'
                },
                {
                  title: 'Ambassadeurs Privés',
                  text: 'Un concierge dédié accompagne chaque client, de la création à la livraison sécurisée à travers le monde.'
                },
              ].map((item) => (
                <div key={item.title} className="gradient-border" style={{ padding: '32px 28px', minHeight: '220px' }}>
                  <h3 className="h2" style={{ fontSize: '1.4rem', marginBottom: '16px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(244,240,255,0.7)', lineHeight: 1.55 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ position: 'relative' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
              <h2 className="h2" style={{ fontSize: '2.6rem' }}>Collections emblématiques</h2>
              <Link href="/collections" className="link-underline" style={{ fontSize: '1.1rem' }}>
                Découvrir toutes les pièces
              </Link>
            </div>
            <div style={{ display: 'grid', gap: '24px', marginTop: '40px' }}>
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.12 }}
                  className="gradient-border"
                  style={{
                    padding: '28px',
                    display: 'grid',
                    gap: '24px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'grid', gap: '12px' }}>
                    <span style={{ letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', color: 'rgba(244,240,255,0.5)' }}>
                      {collection.tagline}
                    </span>
                    <h3 className="h2" style={{ fontSize: '2rem' }}>{collection.name}</h3>
                    <p style={{ color: 'rgba(244,240,255,0.75)', lineHeight: 1.5 }}>{collection.description}</p>
                    <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                      {collection.highlight.map((item) => (
                        <span
                          key={item}
                          style={{
                            padding: '8px 18px',
                            borderRadius: '999px',
                            background: 'rgba(244, 240, 255, 0.08)',
                            border: '1px solid rgba(123, 97, 255, 0.35)',
                            fontSize: '0.95rem',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link href={`/${collection.slug}`} className="button-primary" style={{ width: 'fit-content' }}>
                      Explorer
                    </Link>
                  </div>
                  <div
                    style={{
                      height: '100%',
                      minHeight: '260px',
                      borderRadius: '24px',
                      background: `radial-gradient(circle at 30% 20%, rgba(123, 97, 255, 0.35), transparent), url(${collection.heroImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(1.05) saturate(1.2)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: '180px' }}>
          <div className="container" style={{ display: 'grid', gap: '36px', justifyItems: 'center' }}>
            <h2 className="h2" style={{ fontSize: '2.4rem', textAlign: 'center', maxWidth: '820px' }}>
              Programme d&apos;acquisition privée
            </h2>
            <p style={{ maxWidth: '680px', textAlign: 'center', fontSize: '1.15rem', color: 'rgba(244,240,255,0.75)', lineHeight: 1.6 }}>
              Rejoignez notre cercle restreint d&apos;ambassadeurs. Accédez à des lancements en orbite privée, des immersions dans nos ateliers et à une ligne directe avec nos horlogers maîtres.
            </p>
            <Link href="/contact" className="button-primary">
              Contacter un ambassadeur dédié
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
