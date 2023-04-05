import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = [
  "Default Sorting",
  "Name",
  "Price: Low to Height",
  "price:Hight to Low"
];

export default function FilterInput() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{
          width: 200,
          height: "2rem!important",
          padding: "0!important",
          margin: "0!important"
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              height: "2rem!important",
              padding: "0!important",
              margin: "0!important"
            }}
          />
        )}
      />
    </div>
  );
}
