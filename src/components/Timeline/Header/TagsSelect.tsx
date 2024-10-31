import React from "react";

type Props = {
  tags: string[];
  value: string[];
  onChange: (skills: string[]) => void;
};

const OPTIONS = ["reactJs", "javascript", "typescript"];

const TagsSelect = ({ value, onChange, tags }: Props) => {
  /*const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    onChange(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };*/

  return (
    <div>
      <div>
        <div id="skills-select-label">Tags</div>
        {/*<Select
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
        </Select>*/}
      </div>
    </div>
  );
};

export default TagsSelect;
