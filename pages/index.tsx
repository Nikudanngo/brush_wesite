import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Slide from "../components/Slider";
import ColumnsGrid from "../components/ColumnsGrid";
import Buying from "../components/Buy";
import ImageList from "../components/ImageList";
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
        <h1 className={styles.text}>
          BAMBOO TOOTHBRUSH
          <span className={styles.span}>竹から生まれた歯ブラシ</span>
        </h1>
        {/* ColoumnsGrid.jsに記載 */}
        <ColumnsGrid
          title={
            // リストで渡してColoumnsGrid.jsで改行させる
            ["あなたの生活に", "自然な歯ブラシを"]
          }
          image={<ImageList />} // image枠にImageListを渡す
          column="column"
          row="row" // "row":文字/画像， "row-reverse"：画像/文字
        />
        <Buying />
      </main>
    </div>
  );
};

export default Home;
