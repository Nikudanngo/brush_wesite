import * as React from 'react';
import Slider from './Slider';
import { makeStyles,  } from "@material-ui/core/styles";
import ImageList from './ImageList';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyle = makeStyles({
    root: {
        // これでGridの影(shadow)が消える
        "& .MuiPaper-root": {
            boxShadow: "0px 0px 0px 0px",
        },
    },
    home: {
        textAlign: "center",
        fontFamily: "noto sans jp",
    },
    text: {
        fontSize: "calc(7px + 2vmin)",
        marginTop: "50px",
        color: "#212529",
        fontWeight: "500",  
        letterSpacing: "0.5px",
    },
    span: {
        display: "block",
        fontSize: "calc(3px + 2vmin)",
        color : "rgba(33, 37, 41, 0.8)",
    },
    imageList: {
        // 中央寄せ
        margin: "0 auto",
        // スマホ用
        "@media (max-width: 600px)": {
            width: "100%",
        },
    }
});

// 二分画面設定
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

// 二分画面関数
function ColumnsGrid() {
    const classes = useStyle();

    // レスポンシブ対応関数
    const responsChangeAction = useMediaQuery(
        json2mq({
          minWidth: 900, // ブレイクポイント
        }),
      );

    return (
      <Box sx={{ flexGrow: 1}} className={classes.root}>
        <Grid
            container
            spacing={2}
            columns={16}
            direction={responsChangeAction ? "row" : "column"} // rowは横並び, columnは縦並び
            justifyContent="space-evenly"
            alignItems="center"
        >
          <Grid item xs={8} >
            <Item >
                <h2 className={classes.text}>
                    あなたの生活に<br />
                    自然な歯ブラシを
                </h2>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item >
                {/* 画像リスト ImageList.jsに記載 */}
                <ImageList /> 
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }

// メイン
function Home () {
    const classes = useStyle();
    return (
        <div className={classes.home}>
            <Slider />
            <div className={classes.text}>
                <h1>
                    Bamboo toothbrush
                    <span className={classes.span}>
                        竹から生まれた歯ブラシ
                    </span>
                </h1>
            </div>
            <div>
            {/* ↓は上の関数に記載 */}
             <ColumnsGrid /> 
            </div>
        </div>
    );
}
export default Home;
