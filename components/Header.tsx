import type { NextPage } from "next";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const pages = ["", "Products", "Instruction", "Contact"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
    },
  })
);
const Header: NextPage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Thougt of oceans
            </Typography>
            {/* HOMEアイコン */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-dashboard"
                aria-haspopup="true"
                onClick={handleCloseNavMenu} // ページリロード
                color="default"
              ></IconButton>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Thought of Oceans
            </Typography>
            <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link href={`/${page}`} key={page}>
                  <Button
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                    }}
                    sx={{ my: 1, color: "black", display: "block" }}
                    // element={Link}
                    // to={"/"+page}
                  >
                    {/* {page} */}
                    {page === "" ? "Home" : page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link href={`/${page}`} key={page}>
                    <MenuItem
                      key={page}
                      onClick={() => {
                        handleCloseNavMenu();
                      }}
                    >
                      <Typography textAlign="center">
                        {page === "" ? "Home" : page}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            {/* アイコン/ユーザーメニュー はなし*/}
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.toolbar} />
    </React.Fragment>
  );
};

export default Header;
