import { List, Paper } from "@mui/material";
import React from "react";
export default function Instruction() {

  const instructions = [
    "変色、変形、割れなどの恐れがありますので、塩素系殺菌剤、漂白剤、熱湯は使用しないでください。",
    "力が掛かるとまれにブラシの毛が抜ける場合がございます。",
    "乾燥などにより、竹部分が割れる可能性がございます。",
    "使用後は毛の根元まで十分に洗い落とし、水をよく切ってから風通しの良い所に保管してください。",
  ];

  return (
    <React.Fragment>
      <div className="main">
        <div className="text">
          <h1>
            INSTRUCTION
            <span className="span">
              取り扱い
            </span>
          </h1>
          <p>
            本製品の使用上の注意
          </p>
          <Paper>
            <ol>
              {instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>              
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
}