import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";

// 二分画面設定
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// 二分画面関数
export default function ColumnsGrid(props: any) {
  // レスポンシブ対応関数
  const responsChangeAction = useMediaQuery(
    json2mq({
      minWidth: 900, // ブレイクポイント
    })
  );

  const rowOrReverse = props.row;
  const columnOrReverse = props.column;
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "4rem" }}>
      <Grid
        container
        spacing={2}
        columns={16}
        direction={responsChangeAction ? rowOrReverse : columnOrReverse} // rowは横並び, columnは縦並び
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Item>
            {/* 文字コンテンツ */}
            {props.title.map((text: string, index: number) => (
              <h2 key={index}>
                {text}
                <br />
              </h2>
            ))}
            <p>{props.document}</p>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            {/* 画像コンテンツ */}
            {props.image}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
