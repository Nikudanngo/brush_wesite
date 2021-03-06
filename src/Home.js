import * as React from "react";
import Slider from "./component/Slider";
import ImageList from "./component/ImageList";
import Buying from "./component/Buy";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ColumnsGrid from "./component/ColumnsGrid";

// メイン
function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="main">
        <Slider />
        <Container>
          <div className="text">
            <h1>
              BAMBOO TOOTHBRUSH
              <span className="span">竹から生まれた歯ブラシ</span>
            </h1>
          </div>
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
        </Container>
      </div>
    </React.Fragment>
  );
}
export default Home;
