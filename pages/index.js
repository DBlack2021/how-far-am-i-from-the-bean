import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TemplateComponent from '../components/TemplateComponent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bean.</title>
        <link rel="icon" href="/bean.png" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVqQ9aFyVkLoxJmq4z8EBDJ3ahmb1C3yc&libraries=geometry,places"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          How Far Are You From The <img src="/bean.png" style={{verticalAlign: 'middle', height:'2em', width:'2em' }} />?
        </h1>
        <TemplateComponent />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/fiveable.png" alt="Fiveable Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
