import React from "react";

import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

type Props = {
  tags: string[];
  value: string[];
  onChange: (skills: string[]) => void;
};

const OPTIONS = ["reactJs", "javascript", "typescript"];

const TagsSelect = ({ value, onChange, tags }: Props) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    onChange(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id="skills-select-label">Tags</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="skills-select"
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  variant="outlined"
                  key={value}
                  label={value}
                  color="primary"
                />
              ))}
            </Box>
          )}
        >
          {tags.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default TagsSelect;
