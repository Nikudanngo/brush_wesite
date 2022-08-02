import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Link as MuiLink } from "@material-ui/core";
import { NextPage } from "next";
import style from "../styles/Footer.module.css";
// import Logo from './img/logo.png';

const Footer: NextPage = () => {
  return (
    <div className={style.footer}>
      {/* <div className={classes.list}>
                <img src={Logo} alt="logo" className={classes.logo}/>
            </div> */}
      {/* インスタグラムのアイコン */}
      <MuiLink
        href="https://www.instagram.com/okinagram/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className={style.icon} />
      </MuiLink>

      {/* アマゾンのアイコン */}
      <MuiLink
        href="https://www.amazon.co.jp/s?me=A3I6MWRX1EEVQE&marketplaceID=A1VC38T7YXB528"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faAmazon} className={style.icon} />
      </MuiLink>
      <p>© 2021-2022 allthumbs .Co.,LTD</p>
    </div>
  );
};

export default Footer;
