import * as React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import { Pages, Routes } from "@/constants/enums";
import BasicData from "@/data/BasicData.json";
import SearchBar from "../SearchBar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Drawer from "../Drawer";
import RoutesData from "@/data/RoutesData.json";
import RightDrawer from "../RightDrawer";

const variants = {
  hidden: {
    opacity: 0,
    height: "0vh",
    transition: {
      staggerChildren: 1.3,
      duration: 0.4
    }
    // transitionEnd: { display: "none" }
  },
  show: {
    opacity: 1,
    height: "100vh",
    transition: {
      staggerChildren: 1.3,
      duration: 0.6
    }
  }
};
const list = {
  show: {
    opacity: 1,
    transition: { when: "afterChildren" }
  },
  hide: {
    opacity: 0,
    transition: { when: "afterChildren" }
  }
};
const item = {
  show: {
    opacity: 1,
    transition: { when: "afterChildren" }
  },
  hide: {
    opacity: 0,
    transition: { duration: 0.6 }
  }
};

const pages = [
  { name: "PRODUCTS", familiarName: "/products" },
  { name: "TEMPLATES", familiarName: "/templates" },
  { name: "RESOURCES", familiarName: "/resources" },
  { name: "PRICING", familiarName: "/pricing" }
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
  openBurgerNav: () => void;
  closeBurgerNav: () => void;
  burger: boolean;
}

const Header: React.FC<Props> = ({
  toggleTheme,
  openBurgerNav,
  closeBurgerNav,
  burger
}) => {
  const theme = useTheme();
  const router = useRouter();
  const { push } = router;
  const { pathname } = router;

  return (
    <>
      <Box sx={{ backgroundColor: "#ffffff" }}>
        <Container sx={{ height: "100%", padding: "1rem 0rem" }}>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            sx={{ height: "100%" }}
          >
            {/* drawer */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Drawer />
            </Box>

            {/* left */}
            <Stack
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              sx={{ height: "100%" }}
            >
              <Box
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  justifySelf: { xs: "center", md: "start" },
                  textDecoration: "none",
                  color: "#fe9931",
                  fontSize: "1.5rem",
                  fontWeight: "bold"
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "22px",
                    lineHeight: 1.6
                  }}
                >
                  {BasicData.storeName}
                </Typography>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <SearchBar />
              </Box>
            </Stack>
            {/* right */}
            <Stack
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              sx={{ height: "100%", gap: 2 }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="text"
                  startIcon={
                    <PersonOutlineIcon sx={{ width: "24px", height: "24px" }} />
                  }
                  sx={{
                    color: "black",
                    fontWeight: "400",
                    fontSize: "0.875rem",
                    lineHeight: "1.4",
                    textTransform: "none"
                  }}
                >
                  Login
                </Button>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <Button
                              variant="text"
                              startIcon={
                                <ShoppingCartOutlinedIcon
                                  sx={{
                                    width: "24px",
                                    height: "24px",
                                    fontSize: "16px",
                                    fontWeight: "700"
                                  }}
                                />
                              }
                              sx={{ color: "#4f4335" }}
                            >
                              <Typography
                                sx={{
                                  display: { xs: "none", md: "flex" },
                                  color: "#fe9931",
                                  fontSize: "16px",
                                  fontWeight: "700"
                                }}
                              >
                                {BasicData.storeCurrency} {BasicData.storeBalance}
                              </Typography>
                            </Button>
                </Box>
                          <Box  sx={{ display: { xs: "block", md: "none" } }}>
                            <RightDrawer />
                          </Box>
            </Stack>
          </Stack>
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container>
          {/* menu */}
          <Box
            sx={{
              padding: "1rem 0rem",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
              display: { xs: "none", md: "flex" },
              fontSize: "16px"
            }}
          >
            {RoutesData.Routes.map((route: any) => (
              <Box>
                <Link
                  href={`/${route.path}`}
                  key={route.name}
                  style={{
                    textDecoration: "none",
                    color: "rgb(37, 42, 49)",

                    padding: " 0px 15px"
                  }}
                >
                  {route.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Divider />
    </>
  );
};

export default Header;
