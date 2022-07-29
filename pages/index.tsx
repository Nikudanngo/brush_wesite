import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Slide from "../components/Slider";
const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Thought of oceans</title>
        <meta
          name="description"
          content="日本人のために設計された竹歯ブラシ-KAGUYAの公式サイト。竹歯ブラシブランドThought of Oceanから高品質な歯ブラシを全国どこでもお届けします。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slide />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
