import './App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Buying from './Buy';
import { makeStyles,  } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
      // これでGridの影(shadow)が消える
      "& .MuiPaper-root": {
          boxShadow: "0px 0px 0px 0px",
      },
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
  },

});


export default function Products() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
        {/* <Link to="/">Invoices</Link>
        <Link to="/Home">home</Link> */}
        <div className="home">
          <div className="text">
            <h1>
                KAGUYA
                <span className={classes.span}>
                    日本人が開発した竹歯ブラシ
                </span>
            </h1>
          </div>
        <Buying />
        </div>
    </div>
  );
}