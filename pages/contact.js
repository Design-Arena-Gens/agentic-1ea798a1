import Head from 'next/head';
import Layout from '@/components/Layout';
import StarField from '@/components/StarField';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Aeternum Haute Horlogerie</title>
      </Head>
      <div className={styles.page}>
        <StarField />
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
          <div className="container">
            <div className={`${styles.hero} gradient-border`}>
              <div>
                <span className={styles.tag}>Ambassadeurs privés</span>
                <h1 className="h2" style={{ fontSize: '3rem', marginBottom: '16px' }}>
                  Contactez la maison Aeternum
                </h1>
                <p className={styles.description}>
                  Notre équipe concierge répond sous 24h à toute demande de création, de visite d&apos;atelier ou de rendez-vous privé dans nos salons à Genève, Paris, Dubai et Tokyo.
                </p>
              </div>
              <div className={styles.coordinates}>
                <div>
                  <h3>Siège de Genève</h3>
                  <p>Rue des Maîtres 21, 1204 Genève</p>
                  <p>+41 22 555 19 00</p>
                </div>
                <div>
                  <h3>Concierge international</h3>
                  <p>ambassadeurs@aeternum.watch</p>
                  <p>Disponible 7j/7, 8h - 22h CET</p>
                </div>
                <div>
                  <h3>Salons privés</h3>
                  <p>Paris · Dubai · Tokyo · Singapour</p>
                  <p>Sur rendez-vous uniquement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0', paddingBottom: '160px' }}>
          <div className="container">
            <div className={styles.grid}>
              <form className={`${styles.form} gradient-border`}>
                <h2 className="h2" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Programmer un entretien privé</h2>
                <label>
                  Nom complet
                  <input type="text" name="name" placeholder="Votre nom" required />
                </label>
                <label>
                  E-mail sécurisé
                  <input type="email" name="email" placeholder="Votre adresse" required />
                </label>
                <label>
                  Pays de résidence
                  <input type="text" name="country" placeholder="Lieu" required />
                </label>
                <label>
                  Sujet de votre requête
                  <select name="intent" required>
                    <option value="">Sélectionner</option>
                    <option value="commission">Création sur-mesure</option>
                    <option value="appointment">Rendez-vous en salon</option>
                    <option value="atelier">Visite d&apos;atelier</option>
                    <option value="press">Demande presse</option>
                  </select>
                </label>
                <label>
                  Message confidentiel
                  <textarea name="message" rows="5" placeholder="Exprimez vos attentes..." />
                </label>
                <button type="submit" className="button-primary">
                  Envoyer vers le concierge
                </button>
                <small className={styles.notice}>
                  Toutes les communications sont chiffrées. Votre ambassadeur personnel vous contactera via canal sécurisé.
                </small>
              </form>
              <div className={`${styles.aside} gradient-border`}>
                <h3 className="h2" style={{ fontSize: '1.6rem', marginBottom: '16px' }}>Expérience Concierge</h3>
                <ul>
                  <li>
                    <strong>Consultation astrale</strong>
                    <p>Analyse personnalisée de la carte du ciel pour inspirer la création de votre garde-temps.</p>
                  </li>
                  <li>
                    <strong>Rendez-vous immersif</strong>
                    <p>Session privée avec nos horlogers et designers pour composer votre pièce unique.</p>
                  </li>
                  <li>
                    <strong>Logistique internationale</strong>
                    <p>Livraison sécurisée via escorte dédiée et assurance totale.</p>
                  </li>
                  <li>
                    <strong>Programme héritage</strong>
                    <p>Archivage de la pièce dans notre bibliothèque cosmique et services de conservation sur 100 ans.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
