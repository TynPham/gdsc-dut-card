import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loading_wrapper}>
      <div className={styles.bounce}>
        <div className={`${styles.loader_bounce} ${styles.bounce_blue}`}></div>
        <div className={`${styles.loader_bounce} ${styles.bounce_red}`}></div>
        <div className={`${styles.loader_bounce} ${styles.bounce_yellow}`}></div>
        <div className={`${styles.loader_bounce} ${styles.bounce_green}`}></div>
      </div>
    </div>
  )
}
