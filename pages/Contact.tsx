import * as React from "react";
import Button from "@mui/material/Button";
import { Link as MuiLink } from "@material-ui/core";
import { Box } from "@material-ui/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 二分画面設定
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Contact: NextPage = () => {
  const responsChangeAction = useMediaQuery(
    json2mq({
      minWidth: 900, // ブレイクポイント
    })
  );

  return (
    <React.Fragment>
      <Head>
        <title>竹歯ブラシ-KAGUYA</title>
        <meta
          name="description"
          content="日本人のために設計された竹歯ブラシ-KAGUYAの公式サイト。竹歯ブラシブランドThought of Oceanから高品質な歯ブラシを全国どこでもお届けします。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <h1 className="text">
          CONTACT
          <span className="span">お問い合わせ</span>
        </h1>
        <h2 className="description">
          商品へのお問い合わせや、お見積もりのご依頼は以下の方法で承ります。
        </h2>
        {/* 二分割画面 */}
        <Box sx={{ flexGrow: 1, px: 3 }}>
          <Grid
            component={(props) => <Box {...props} />} // ここ意味わからん
            container
            spacing={2}
            columns={16}
            direction={responsChangeAction ? "row" : "column"} // rowは横並び, columnは縦並び
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={8}>
              <Item style={{ boxShadow: "0px 0px 0px 0px" }}>
                <Button color="inherit" href="mailto:allthumbs.co@gmail.com">
                  <h3>Mail</h3>
                  <EmailIcon />
                </Button>
                <span>or</span>
                <Button color="inherit" href="tel:0743-72-2037">
                  <h3>Phone</h3>
                  <PhoneIcon />
                </Button>
                <p>
                  メールと電話での受付は月~金
                  10:00~17:00の間にご対応可能です。時間や担当の不在によりご対応できない場合がございます。
                </p>
                <MuiLink
                  style={{ marginBottom: "1rem" }}
                  href="mailto:allthumbs.co@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="p">メール:allthumbs.co@gmail.com</p>
                </MuiLink>
                <MuiLink
                  href="tel:0743-72-2037"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="p">電話:0743-72-2037</p>
                </MuiLink>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item style={{ boxShadow: "0px 0px 0px 0px" }}>
                <Button
                  color="inherit"
                  target="_blank"
                  href="https://forms.gle/6xMw6epBHwFLkpfs6"
                >
                  <h3>Form</h3>
                  <ListAltIcon />
                </Button>
                <p>
                  GoogleFormsの受付は24時間受け付けております。1~2営業以内にメールにて折り返しご連絡いたします。
                </p>
                <MuiLink
                  href="https://forms.gle/6xMw6epBHwFLkpfs6"
                  target="_blank"
                  rel="noopener"
                >
                  <p className="p">リンクはこちら</p>
                </MuiLink>
              </Item>
            </Grid>
          </Grid>
        </Box>

        {/* map */}
      </main>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.0970412333015!2d135.71116542559886!3d34.68559416679214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001239c90000001%3A0xc8b69fc668aa840f!2sRecherche!5e0!3m2!1sja!2sjp!4v1629123177581!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
