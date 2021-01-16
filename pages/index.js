import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import BaseContainer from "../components/templates/default/BaseContainer";

export default function Home() {
  return (
    <BaseContainer>
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    </BaseContainer>
  );
}
