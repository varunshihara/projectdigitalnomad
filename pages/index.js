import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Digital Nomad | Varun Shihara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Project Digital Nomad!</h1>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </main>
    </div>
  );
}
