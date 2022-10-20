import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navItems = [{ title: "High Scores", link: "/highscores" }];

const Header = () => {
  let navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="Header">
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Trivia
            </Typography>
            {navItems.map((item) => (
              <Button
                key={item.title}
                sx={{ color: "#fff" }}
                onClick={() => navigate(item.link)}
              >
                {item.title}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
