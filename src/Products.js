import "./App.css";
import * as React from "react";
import Buying from "./component/Buy";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@mui/material";
import ColumnsGrid from "./component/ColumnsGrid";
import inCup from "./img/imageList/inCup.jpg";
import onTowel from "./img/imageList/LyingOnTowel.jpg";
import onPowder from "./img/imageList/onPowder.jpg";

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

// main関数
export default function Products() {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className="main">
        <Container>
          <div className="text">
            <h1>
              KAGUYA
              <span className={classes.span}>
                日本人のために開発した竹歯ブラシ
              </span>
            </h1>
          </div>
          <ColumnsGrid
            title={["高品質な", "竹歯ブラシ"]}
            document={
              "十分な強度としなやかさをもった竹歯ブラシを作るには、ひとつの歯ブラシに3年以上の乾燥と徹底した研磨が必要です。私たちは、お客様が安心してご使用できるように、全ての歯ブラシを研磨・検品を行っています。"
            }
            image={<img src={inCup} className={classes.image} alt="写真1" />}
            column="column-reverse"
            row="row"
          />
          <ColumnsGrid
            title={["優しい", "タッチ"]}
            document={
              "日本人のためにデザインされた、ちょうどいい大きさで心地よい磨き心地。徹底的な品質管理、特殊な加工によりなめらかな肌触りを実現。"
            }
            image={<img src={onPowder} className={classes.image} alt="写真2" />}
            column="column-reverse"
            row="row-reverse"
          />
          <ColumnsGrid
            title={["サスティナブル", "デザイン"]}
            document={
              "プラスチックの使用を95%以上削減。これにより、焼却時に発生する有害物質を大幅に削減可能。"
            }
            image={<img src={onTowel} className={classes.image} alt="写真3" />}
            column="column-reverse"
            row="row"
          />
          <Buying />
        </Container>
      </div>
    </React.Fragment>
  );
}
