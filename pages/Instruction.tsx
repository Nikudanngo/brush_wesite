import { Paper } from "@mui/material";
import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Instruction: NextPage = () => {
  const instructions = [
    "変色、変形、割れなどの恐れがありますので、塩素系殺菌剤、漂白剤、熱湯は使用しないでください。",
    "力が掛かるとまれにブラシの毛が抜ける場合がございます。",
    "乾燥などにより、竹部分が割れる可能性がございます。",
    "使用後は毛の根元まで十分に洗い落とし、水をよく切ってから風通しの良い所に保管してください。",
  ];

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
        <main className={styles.main}>
          <div>
            <h1 className={styles.text}>
              INSTRUCTION
              <span className={styles.span}>取り扱い</span>
            </h1>
            <h2 className={styles.text}>本製品の使用上の注意</h2>
            <ol className={styles.ol}>
              {instructions.map((instruction) => (
                <li className={styles.li} key={instruction}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Instruction;
