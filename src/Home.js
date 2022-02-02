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
import Buying from './Buy';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const useStyle = makeStyles({
    root: {
        // これでGridの影(shadow)が消える
        "& .MuiPaper-root": {
            boxShadow: "0px 0px 0px 0px",
        },
    },
    imageList: {
        // 中央寄せ
        margin: "0 auto",
        // スマホ用
        "@media (max-width: 600px)": {
            width: "100%",
        },
    },

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
                <h2 className="text">
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
        <React.Fragment>
        <CssBaseline />
        <div className="home">
            <div>
                <Slider />
            </div>
            <Container>
                <div className="text">
                    <h1>
                        Bamboo toothbrush
                        <span className="span">
                            竹から生まれた歯ブラシ
                        </span>
                    </h1>
                </div>
                {/* ↓は上の関数に記載 */}
                <ColumnsGrid /> 
                <Buying />
            </Container>
        </div>
    </React.Fragment>    
    );
}
export default Home;
