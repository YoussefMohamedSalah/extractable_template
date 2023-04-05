import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import RoutesData from "@/data/RoutesData.json";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NoProducts from "../NoProducts";
import OptimizedImg from "../OptimizedImg";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const icon = "/magnifying-glass-svgrepo-com.svg";

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <ShoppingCartOutlinedIcon
          sx={{
            width: "24px",
            height: "24px",
            fontSize: "16px",
            fontWeight: "700"
          }}
        />
      </IconButton>
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader
          sx={{
            padding: "0",
            margin: "0"
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#f5f7f9"
            }}
          >
            <PersonOutlineIcon sx={{ margin: "0rem 0.5rem" }} />
            <Typography
              sx={{
                color: "rgb(37, 42, 49)",
                fontWeight: "600",
                fontSize: "16px"
              }}
            >
              Shopping Cart
            </Typography>
          </Box>
        </DrawerHeader>
        <Divider />

        {/* {RoutesData.Routes.map((route: any) => (
          <Box key={route.name} onClick={() => handleDrawerClose()}>
            <Box sx={{ padding: "22px 8px" }}>
              <Link
                href={`/${route.path}`}
                style={{
                  textDecoration: "none",
                  color: "rgb(37, 42, 49)",
                  fontSize: "1rem",
                  fontWeight: "600",
                  padding: " 0px 15px"
                }}
              >
                {route.name}
              </Link>
            </Box>
            <Divider />
          </Box>
        ))} */}
        {/* no products */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "0.5rem",
            pt: 8
          }}
        >
          <Box>
            <OptimizedImg
              src={icon}
              width={40}
              height={40}
              alt="shop cart"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "1.25rem",
              lineHeight: 1.3,
              pt: 1,
              mb: 1
            }}
          >
            Your cart is empty
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "0.875rem",
              lineHeight: "1.4",
              textAlign: "center"
            }}
          >
            Looks like you haven’t added anything to your cart yet
          </Typography>
        </Box>
        {/* 0----------0 */}
      </Drawer>
    </Box>
  );
}
