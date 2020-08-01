import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2 className="home-sub-heading">
          Styled by global styles in global.css
        </h2>
        <div className={styles.pageLinks}>
          <div className={styles.pageLink}>
            <Link href="/example">
              <a>Click here to go to example page</a>
            </Link>
          </div>
          <div className={styles.pageLink}>
            <Link href="/clientFetch">
              <a>
                Click here page using window fetch (not Server Rendered, not
                recommended)
              </a>
            </Link>
          </div>
          <div className={styles.pageLink}>
            <Link href="/staticData">
              <a>
                Click here to go to a page with static data (getStaticProps)
              </a>
            </Link>
          </div>
          <div className={styles.pageLink}>
            <Link href="/ssrPage">
              <a>
                Click here to go to a page with data feched at request time
                (getServerSideProps)
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <img
          src="/images/vercel.svg"
          alt="Vercel Logo"
          className={styles.logo}
        />
      </footer>
    </div>
  );
}
