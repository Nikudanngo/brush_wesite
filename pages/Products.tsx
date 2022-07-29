import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@mui/material";
import ColumnsGrid from "../components/ColumnsGrid";
import inCup from "/img/imageList/inCup.jpg";
import onTowel from "/img/imageList/LyingOnTowel.jpg";
import onPowder from "/img/imageList/onPowder.jpg";
import CycleImg from "/img/cycle.png";
import Buying from "../components/Buy";
import Image from "next/image";
import Header from "../components/Header";

const useStyle = makeStyles({
  root: {
    // これでGridの影(shadow)が消える
    "& .MuiPaper-root": {
      boxShadow: "0px 0px 0px 0px",
    },
  },

  span: {
    display: "block",
    fontSize: "calc(3px + 2vmin)",
    color: "rgba(33, 37, 41, 0.8)",
  },
  image: {
    // 中央寄せ
    margin: "0 auto",
    width: "100%",
    // スマホ用
    "@media (max-width: 900px)": {
      width: "80%",
    },
  },
});

const Products: NextPage = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
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
        <div className={styles.main}>
          <Container>
            <h1 className={styles.title}>
              KAGUYA
              <span className={classes.span}>
                日本人のために開発した竹歯ブラシ
              </span>
            </h1>
            <ColumnsGrid
              title={["高品質な", "竹歯ブラシ"]}
              document={
                "十分な強度としなやかさをもった竹歯ブラシを作るには、ひとつの歯ブラシに3年以上の乾燥と徹底した研磨が必要です。私たちは、お客様が安心してご使用できるように、全ての歯ブラシを研磨・検品を行っています。"
              }
              image={
                <Image src={inCup} className={classes.image} alt="写真1" />
              }
              column="column-reverse"
              row="row"
            />
            <ColumnsGrid
              title={["優しい", "タッチ"]}
              document={
                "日本人のためにデザインされた、ちょうどいい大きさで心地よい磨き心地。徹底的な品質管理、特殊な加工によりなめらかな肌触りを実現。"
              }
              image={
                <Image src={onPowder} className={classes.image} alt="写真2" />
              }
              column="column-reverse"
              row="row-reverse"
            />
            <ColumnsGrid
              title={["サスティナブル", "デザイン"]}
              document={
                "プラスチックの使用を95%以上削減。これにより、焼却時に発生する有害物質を大幅に削減可能。"
              }
              image={
                <Image src={onTowel} className={classes.image} alt="写真3" />
              }
              column="column-reverse"
              row="row"
            />
            <ColumnsGrid
              title={["サイクルシステムの", "ご紹介"]}
              document={
                "弊社ではホテル様から竹ゴミを買い取り、それらは竹炭商品として生まれ変わります。"
              }
              image={
                <Image src={CycleImg} className={classes.image} alt="写真4" />
              }
              column="column-reverse"
              row="row-reverse"
            />
            <Buying />
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Products;
