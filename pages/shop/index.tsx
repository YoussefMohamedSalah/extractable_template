import type { NextPage } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { NextSeo } from "next-seo";
import { Box, Button, Container, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Image from "next/image";
import OptimizedImg from "@/components/OptimizedImg";
import NoProducts from "@/components/NoProducts";
import FilterInput from "@/components/FilterInput";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
const ShopPage: NextPage<Props> = ({ toggleTheme }) => {
  return (
    <>
      <NextSeo
        title="Shop"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
      />

      <Breadcrumb pageName="Shop Page" description="description." />
      <Box sx={{ backgroundColor: "#f5f7f9", minHeight: "45vh" }}>
        <Container sx={{ padding: "30px 0px 0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Button
              sx={{ backgroundColor: "#fe9931", color: "white" }}
              startIcon={<TuneIcon sx={{ width: "24px", height: "24px" }} />}
            >
              Filter
            </Button>
            {/* filters */}
            <FilterInput />
          </Box>
          <NoProducts />
        </Container>
      </Box>
    </>
  );
};

export default ShopPage;
