import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid} from '@mui/material';
import onPowder from './img/imageList/onPowder.jpg';
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';

const useStyle = makeStyles({
    root: {
        maxWidth: 650,
        margin: "10px auto",
    },
});

export default function Buying() {
    const classes = useStyle();
        // レスポンシブ対応関数
        const responsChangeAction = useMediaQuery(
            json2mq({
              minWidth: 500, // ブレイクポイント
            }),
        );
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
        <Grid item xs={12}>
            <Card>
            <CardActionArea component={Link} to={"/Products"}>
                <CardMedia
                component="img"
                height={responsChangeAction ? "250" : "150"}
                image={onPowder}
                alt="Thooth Brush"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        竹歯ブラシ-KAGUYA
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
                <Button 
                  size="small"
                  color="primary" 
                  href="https://www.amazon.co.jp/s?me=A3I6MWRX1EEVQE&marketplaceID=A1VC38T7YXB528"
                  target="_blank"
                >
                Buy on amazon
                </Button>

                {/* SPA変遷 */}
                <Button 
                  size="small"
                  color="primary"
                  component={Link}
                  to={"/Products"}
                >
                Learn more
                </Button>
            </CardActions>
            </Card>
        </Grid>
    </Box>
  );
}