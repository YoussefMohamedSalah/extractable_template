import type { NextPage } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { NextSeo } from "next-seo";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  TextField
} from "@mui/material";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
const ContactPage: NextPage<Props> = ({ toggleTheme }) => {
  return (
    <Box sx={{ minHeight: "68vh" }}>
      <NextSeo
        title="Contact"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
      />
      <Breadcrumb pageName="Contact Page" description="description." />
      <Box sx={{ backgroundColor: "#f5f7f9", minHeight: "45vh" }}>
        <Container sx={{ padding: "30px 20px" }}>
          <Box
            sx={{
              padding: "30px",
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid rgb(223, 228, 232)",
              borderRadius: "4px",
              boxShadow: "rgb(223, 227, 232) 0px -1px 0px 0px inset"
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.29,
                width: "100%",
                marginBottom: "30px",
                maxWidth: "400px"
              }}
            >
              You can send your questions by filling out the form below and we
              will get back to you as soon as possible.
            </Typography>
          </Box>

          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="fullWidth" id="fullWidth" />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="fullWidth" id="fullWidth" />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="fullWidth" id="fullWidth" />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="fullWidth" id="fullWidth" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {" "}
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          ></Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
