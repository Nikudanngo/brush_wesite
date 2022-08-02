import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Link as MuiLink } from "@material-ui/core";
import { NextPage } from "next";
// import Logo from './img/logo.png';

const useStyle = makeStyles({
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    textAlign: "center",
    fontSize: "15px",
    color: "#333",
    // position: "", // "sticky"にするとbottomナビゲーションバーになる
    left: 0,
    bottom: 0,
    height: "100px",
    zIndex: 1,
  },
  icon: {
    fontSize: "30px",
    color: "#333",
    margin: "0 30px",
    "&:hover": {
      color: "#087e8b",
    },
  },
  logo: {
    width: "100px",
    height: "100px",
    margin: "0 10px",
  },
  list: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    display: "flex",
  },
});

const Footer: NextPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      {/* <div className={classes.list}>
                <img src={Logo} alt="logo" className={classes.logo}/>
            </div> */}
      {/* インスタグラムのアイコン */}
      <MuiLink
        href="https://www.instagram.com/okinagram/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.icon}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </MuiLink>

      {/* アマゾンのアイコン */}
      <MuiLink
        href="https://www.amazon.co.jp/s?me=A3I6MWRX1EEVQE&marketplaceID=A1VC38T7YXB528"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.icon}
      >
        <FontAwesomeIcon icon={faAmazon} />
      </MuiLink>
      <p>© 2021-2022 allthumbs .Co.,LTD</p>
    </div>
  );
};

export default Footer;
