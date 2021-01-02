import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Digital Nomad | Varun Shihara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi! I am Varun Shihara.</h1>
        <Link href="">
          <a>Home</a>
        </Link>
      </main>
    </div>
  );
}
