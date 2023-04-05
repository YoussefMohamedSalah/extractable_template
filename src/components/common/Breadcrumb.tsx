import Link from "next/link";
import { Box, Container, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
  pageName: string;
  description: string;
}
const Breadcrumb: React.FC<Props> = ({ pageName, description }) => {
  return (
    <Box
      sx={{
        padding: "1rem 0rem"
      }}
    >
      <Container>
        <Stack flexDirection="column">
          <Box>
            <Typography
              sx={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: 700,
                marginBottom: "1.25rem"
              }}
            >
              {pageName}
            </Typography>
          </Box>
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ flexWrap: "wrap" }}
        >
          <Box
            sx={{
              width: {
                lg: "65%",
                md: "65%",
                xs: "100%"
              }
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "1.625",
                fontWeight: 500,
                marginBottom: "1.25rem",
                color: "#959CB1",
                opacity: 1
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
              eros eget sapien consectetur ultrices. Ut quis dapibus libero.
            </Typography>
          </Box>

          <Box
            sx={{
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                xs: "flex-start"
              },
              width: {
                lg: "35%",
                md: "35%",
                xs: "100%"
              }
            }}
          >
            <Link
              href="/"
              style={{
                color: "#959CB1",
                textDecoration: "none"
              }}
            >
              <Typography
                sx={{
                  "&:hover": {
                    color: "#fe9931"
                  }
                }}
              >
                Home
              </Typography>
            </Link>
            <KeyboardArrowRightIcon sx={{ color: "#959CB1" }} />
            <Typography sx={{ color: "#fe9931" }}>{pageName}</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Breadcrumb;
