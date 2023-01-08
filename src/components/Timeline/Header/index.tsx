import React from "react";

import Box from "@mui/material/Box";

import { TimelineFilters } from "../types";

import TagsSelect from "./TagsSelect";

type Props = {
  filters: TimelineFilters;
  setFilters: (newFilters: TimelineFilters) => void;
};

const TimelineHeader = ({ filters, setFilters }: Props) => (
  <Box>
    <TagsSelect
      value={filters.tags || []}
      onChange={(newTags) => {
        setFilters({ ...filters, tags: newTags });
      }}
    />
  </Box>
);

export default TimelineHeader;
