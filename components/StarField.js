import styles from '@/styles/StarField.module.css';

export default function StarField() {
  return (
    <div className={styles.starfield}>
      <div className={`${styles.layer} ${styles.layer1}`} />
      <div className={`${styles.layer} ${styles.layer2}`} />
      <div className={`${styles.layer} ${styles.layer3}`} />
    </div>
  );
}
