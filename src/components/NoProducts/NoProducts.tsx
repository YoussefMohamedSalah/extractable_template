import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import OptimizedImg from "../OptimizedImg";

interface Props {
  slug?: string;
}
const NoProducts: React.FC<Props> = () => {
	const icon = "/magnifying-glass-svgrepo-com.svg";

  return (
    <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              pt: 5
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
                pt: 6
              }}
            >
              There are no products added yet
            </Typography>
          </Box>
  );
};
export default NoProducts;
