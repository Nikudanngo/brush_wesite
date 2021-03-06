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
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

const pages = ["Home", "Products", "Instruction", "Contact"];
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    // <Router>
    <React.Fragment>
      {/* positionをstatic -> スクロールで固定される. fixed -> スクロールon */}
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
                <Button
                  key={page}
                  component={Link} // <Link>を使うためのコンポーネント
                  to={"/" + page} //
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  sx={{ my: 1, color: "black", display: "block" }}
                  // element={Link}
                  // to={"/"+page}
                >
                  {page}
                </Button>
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
                  <MenuItem
                    key={page}
                    component={Link} // <Link>を使うためのコンポーネント
                    to={"/" + page}
                    onClick={() => {
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* アイコン/ユーザーメニュー はなし*/}
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
