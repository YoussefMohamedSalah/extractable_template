import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  slug?: string;
}
const SearchBar: React.FC<Props> = () => {
  return (
    <Paper
      component="form"
      sx={{
        // p: "0px 4px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(186, 199, 213)",
        borderRadius: "0.25rem",
        width: 450,
        boxShadow: "none",
        height: "2.3rem"
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1
        }}
        placeholder="What are you looking for?"
        inputProps={{ "aria-label": "What are you looking for?" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
