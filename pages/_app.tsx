import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
    },
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  return (
    // appbarのmargin分を追加
    <div className={classes.toolbar}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
