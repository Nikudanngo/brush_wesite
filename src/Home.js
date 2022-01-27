import * as React from 'react';
import Slider from './Slider';
import { makeStyles } from "@material-ui/core/styles";
import ImageList from './ImageList';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const useStyle = makeStyles({
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
        maxWidth: "1200px",
        "@media (min-width: 0px)": {    
            maxWidth: "1200px",
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
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
                xs=8
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
                {/* 画像リスト */}
                <ImageList /> 
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }

// main
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
            <div className={classes.imageList}>
             <ColumnsGrid />
            </div>
        </div>
    );
}
export default Home;
