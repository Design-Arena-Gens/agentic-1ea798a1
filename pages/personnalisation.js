import Head from 'next/head';
import { useMemo, useState } from 'react';
import Layout from '@/components/Layout';
import StarField from '@/components/StarField';
import { configurations, engravings } from '@/data/configurator';
import styles from '@/styles/Configurator.module.css';

const formatPrice = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(value);

export default function Personnalisation() {
  const [boitier, setBoitier] = useState(configurations.boitiers[0]);
  const [cadran, setCadran] = useState(configurations.cadrans[0]);
  const [bracelet, setBracelet] = useState(configurations.bracelets[0]);
  const [engraving, setEngraving] = useState([]);
  const [diameter, setDiameter] = useState(41);

  const total = useMemo(() => {
    const base = boitier.price + cadran.price + bracelet.price;
    const engravingPrice = engraving.reduce((acc, item) => acc + item.price, 0);
    const surcharge = diameter > 43 ? 3500 : diameter < 39 ? 2800 : 0;
    return base + engravingPrice + surcharge;
  }, [boitier, cadran, bracelet, engraving, diameter]);

  return (
    <Layout>
      <Head>
        <title>Personnalisation | Aeternum Haute Horlogerie</title>
      </Head>
      <div className={styles.page}>
        <StarField />
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <div className="container">
            <div className={styles.header}>
              <div>
                <span className={styles.tag}>Atelier singularité</span>
                <h1 className="h2" style={{ fontSize: '3rem', marginBottom: '18px' }}>
                  Configurateur Haute Horlogerie
                </h1>
                <p style={{ maxWidth: '780px', color: 'rgba(244,240,255,0.75)', fontSize: '1.2rem', lineHeight: 1.6 }}>
                  Composez votre garde-temps cosmique. Chaque sélection est traitée par nos horlogers maîtres, et une consultation privée est planifiée pour finaliser les détails.
                </p>
              </div>
              <div className={styles.totalCard}>
                <span>Total estimatif</span>
                <strong>{formatPrice(total)}</strong>
                <p>Production sur 12 à 16 mois, livraison sécurisée mondiale.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className={styles.grid}>
              <div className={`${styles.preview} gradient-border`}>
                <div className={styles.previewStage}>
                  <div className={styles.previewHalo} />
                  <div className={styles.previewWatch}>
                    <div className={styles.previewCase} style={{ background: boitier.texture }}>
                      <div className={styles.previewDial} style={{ background: cadran.texture }}>
                        <div className={styles.previewIndex} />
                        <div className={styles.previewIndex} style={{ transform: 'rotate(90deg)' }} />
                      </div>
                    </div>
                    <div className={styles.previewStrap} style={{ background: bracelet.texture }} />
                  </div>
                  <div className={styles.previewMeta}>
                    <p>{boitier.name}</p>
                    <p>{cadran.name}</p>
                    <p>{bracelet.name}</p>
                    <p>Ø {diameter} mm</p>
                  </div>
                </div>
              </div>

              <div className={styles.controls}>
                <ConfiguratorSection
                  title="Boîtier"
                  options={configurations.boitiers}
                  selectedId={boitier.id}
                  onSelect={setBoitier}
                />
                <ConfiguratorSection
                  title="Cadran"
                  options={configurations.cadrans}
                  selectedId={cadran.id}
                  onSelect={setCadran}
                />
                <ConfiguratorSection
                  title="Bracelet"
                  options={configurations.bracelets}
                  selectedId={bracelet.id}
                  onSelect={setBracelet}
                />
                <div className="gradient-border" style={{ padding: '24px' }}>
                  <h3 className="h2" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
                    Gravures & Personnalisations
                  </h3>
                  <div className={styles.checkboxGrid}>
                    {engravings.map((item) => {
                      const isSelected = engraving.some((engrave) => engrave.id === item.id);
                      return (
                        <label key={item.id} className={`${styles.checkboxCard} ${isSelected ? styles.checkboxCardSelected : ''}`}>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {
                              setEngraving((current) => {
                                if (isSelected) {
                                  return current.filter((engrave) => engrave.id !== item.id);
                                }
                                return [...current, item];
                              });
                            }}
                          />
                          <span>
                            <strong>{item.name}</strong>
                            <small>{item.description}</small>
                          </span>
                          <b>{formatPrice(item.price)}</b>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="gradient-border" style={{ padding: '24px', display: 'grid', gap: '18px' }}>
                  <h3 className="h2" style={{ fontSize: '1.4rem' }}>Diamètre du boîtier</h3>
                  <input
                    type="range"
                    min="37"
                    max="45"
                    value={diameter}
                    onChange={(event) => setDiameter(Number(event.target.value))}
                    className={styles.slider}
                  />
                  <div className={styles.sliderMeta}>
                    <span>37 mm</span>
                    <span>45 mm</span>
                  </div>
                  <div className={styles.sliderValue}>{diameter} mm</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function ConfiguratorSection({ title, options, selectedId, onSelect }) {
  return (
    <div className="gradient-border" style={{ padding: '24px', display: 'grid', gap: '18px' }}>
      <h3 className="h2" style={{ fontSize: '1.4rem' }}>{title}</h3>
      <div className={styles.optionGrid}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option)}
            className={`${styles.optionCard} ${selectedId === option.id ? styles.optionCardSelected : ''}`}
          >
            <span className={styles.optionSwatch} style={{ background: option.texture }} />
            <div className={styles.optionMeta}>
              <strong>{option.name}</strong>
              <small>{option.description}</small>
            </div>
            <span className={styles.optionPrice}>{formatPrice(option.price)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
