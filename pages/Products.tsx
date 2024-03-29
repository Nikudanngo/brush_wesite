import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Products.module.css";
import { Container } from "@mui/material";
import ColumnsGrid from "../components/ColumnsGrid";
import Buying from "../components/Buy";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inCup =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FinCup.jpg?alt=media&token=c2697181-726e-467c-8148-da2a8bf2e43d";
const onTowel =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FLyingOnTowel.jpg?alt=media&token=5664f63e-5f1b-4e4a-bc73-2b034f45877d";
const onPowder =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FonPowder.jpg?alt=media&token=886ed2e7-9d40-4b2a-af63-9e34a848e874";
const CycleImg =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FCycle-image.png?alt=media&token=26cf2517-e204-48e6-9fa2-8e1cc44e2181";
const AmenitiesImg =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2Famenity.jpg?alt=media&token=1a5e5b6c-20f9-403b-9a47-34dd8250d575";

const Products: NextPage = () => {
  return (
    <React.Fragment>
      <div>
        <Head>
          <title>竹歯ブラシ-KAGUYA</title>
          <meta
            name="description"
            content="日本人のために設計された竹歯ブラシ-KAGUYAの公式サイト。竹歯ブラシブランドThought of Oceanから高品質な歯ブラシを全国どこでもお届けします。"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="main">
          <Container>
            <h1 className="text">
              KAGUYA
              <span className="span">日本人のために開発した竹歯ブラシ</span>
            </h1>
            <ColumnsGrid
              title={["高品質な", "竹歯ブラシ"]}
              document={
                "十分な強度としなやかさをもった竹歯ブラシを作るには、ひとつの歯ブラシに3年以上の乾燥と徹底した研磨が必要です。私たちは、お客様が安心してご使用できるように、全ての歯ブラシを研磨・検品を行っています。"
              }
              image={<img className={styles.image} src={inCup} alt="写真1" />}
              column="column-reverse"
              row="row"
            />
            <ColumnsGrid
              title={["優しい", "タッチ"]}
              document={
                "日本人のためにデザインされた、ちょうどいい大きさで心地よい磨き心地。徹底的な品質管理、特殊な加工によりなめらかな肌触りを実現。"
              }
              image={
                <img src={onPowder} className={styles.image} alt="写真2" />
              }
              column="column-reverse"
              row="row-reverse"
            />
            <ColumnsGrid
              title={["サスティナブル", "デザイン"]}
              document={
                "プラスチックの使用を95%以上削減。これにより、焼却時に発生する有害物質を大幅に削減可能。"
              }
              image={<img src={onTowel} className={styles.image} alt="写真3" />}
              column="column-reverse"
              row="row"
            />
            <ColumnsGrid
              title={["サイクルシステムの", "ご紹介"]}
              document={
                "弊社ではホテル様から使用済みの竹商品を買い取り、それらは竹炭商品として生まれ変わります。"
              }
              image={
                <img src={CycleImg} className={styles.image} alt="写真4" />
              }
              column="column-reverse"
              row="row-reverse"
            />
            <ColumnsGrid
              title={["ホテル向けの", "アメニティ"]}
              document={
                "弊社ではホテル様向けに多数のアメニティをご用意しています。ご注文にはCONTACTページからご相談ください。"
              }
              image={
                <img src={AmenitiesImg} className={styles.image} alt="写真3" />
              }
              column="column-reverse"
              row="row"
            />
            <Buying />
          </Container>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Products;
