import { Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import OptimizedImg from "../OptimizedImg";
import BasicData from "@/data/BasicData.json";
import RoutesData from "@/data/RoutesData.json";

const Footer = () => {
  const [info, setInfo] = useState([
    { title: "+971564010108", icon: "/images/icons/whatsappIcon.svg" },
    { title: "Info@noot.ae", icon: "/images/icons/smsIcon.svg" },
    {
      title: "Al Ain, Abu Dhabi, United Arab Emirates",
      icon: "/images/icons/locationIcon.svg"
    }
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "/images/icons/socialIcons/facebook.png",
    "/images/icons/socialIcons/instaIcon.png",
    "/images/icons/socialIcons/linked-in.png",
    "/images/icons/socialIcons/twitter.png"
  ]);
  return (
    <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
      <Divider />
      <Box
        sx={{
          width: "100%",
          height: "25vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom: "3rem",
          position: "relative"
        }}
      >
        <Box>
          <Link
            href={`/`}
            style={{
              textDecoration: "none",
              color: "#fe9931",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: 1.6
            }}
          >
            {BasicData.storeName}
          </Link>
        </Box>
        <Box
          sx={{
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3
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
                  fontWeight: "bold",
                  padding: " 0px 20px"
                }}
              >
                {route.name}
              </Link>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "4vh",
            position: "absolute",
            bottom: "0"
          }}
        >
          <Divider sx={{ width: "100%" }} />
          <Container>
            <Typography
              sx={{
                alignSelf: "start",
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: "1.5",
                color: "rgb(150, 150, 150)",
                paddingTop: "0.7rem"
              }}
            >
              © 2023 All rights reserved — Powered by Noot
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
