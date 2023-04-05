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

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        <MenuIcon sx={{ width: "24px", height: "24px", marginLeft: "16px" }} />
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
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            padding: "0",
            margin: "0"
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            sx={{
              width: "100%",
              height: "100%",
              color: "rgb(37, 42, 49)",
              fontWeight: "600",
              fontSize: "16px"
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => handleDrawerClose()}
            >
              <Link href="/store" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "rgb(37, 42, 49)",
                    fontWeight: "600",
                    fontSize: "16px",
                    alignSelf: "center"
                  }}
                >
                  Store
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5f7f9"
              }}
              onClick={() => handleDrawerClose()}
            >
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Button
                  startIcon={<PersonOutlineIcon />}
                  sx={{
                    color: "rgb(37, 42, 49)",
                    fontWeight: "600",
                    fontSize: "16px"
                  }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          </Stack>
        </DrawerHeader>
        <Divider />

        {RoutesData.Routes.map((route: any) => (
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
        ))}
      </Drawer>
    </Box>
  );
}
