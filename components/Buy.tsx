import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";
import Image from "next/image";

const useStyle = makeStyles({
  root: {
    maxWidth: 650,
    margin: "10px auto",
  },
  price: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "calc(3px + 2vmin)",
    color: "rgba(33, 37, 41, 0.8)",
  },
});

const Buying = () => {
  const classes = useStyle();
  // レスポンシブ対応関数
  const responsChangeAction = useMediaQuery(
    json2mq({
      minWidth: 500, // ブレイクポイント
    })
  );
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <CardContent>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                // ランダムな画像
                src="https://source.unsplash.com/random"
                title="Contemplative Reptile"
              />

              <Typography gutterBottom variant="h5" component="div">
                竹歯ブラシ-KAGUYA
              </Typography>
              {/* 値段 */}
              <Typography
                variant="h6"
                color="textSecondary"
                component="div"
                className={classes.price}
              >
                ¥300/本
              </Typography>
              <Typography variant="body2" color="text.secondary">
                天然の竹を使用した、歯ブラシです。
                日本人のために設計されたノズルとグリップで、快適な磨き心地を実現しました。
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href="https://buy.stripe.com/00gcPd0Eu2FjbiofYY"
              target="_blank"
            >
              Buy now
            </Button>

            {/* 外部リンク */}
            <Button size="small" color="primary" href="" target="_blank">
              Buy on amazon
            </Button>

            {/* SPA変遷 */}
            <Button size="small" color="primary" href={"/Products"}>
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
};

export default Buying;
