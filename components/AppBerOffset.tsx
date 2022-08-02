import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
    },
  })
);

const AppBarOffset = () => {
  const classes = useStyles();
  return (
    // appbarのmargin分を追加
    <div className={classes.toolbar} />
  );
};

export default AppBarOffset;
