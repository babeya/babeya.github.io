import React from "react";

import Box from "@mui/material/Box";

import { TimelineFilters } from "../types";

import TagsSelect from "./TagsSelect";

type Props = {
  filters: TimelineFilters;
  setFilters: (newFilters: TimelineFilters) => void;
  availableTags: string[];
};

const TimelineHeader = ({ filters, setFilters, availableTags }: Props) => (
  <Box>
    <TagsSelect
      tags={availableTags}
      value={filters.tags || []}
      onChange={(newTags) => {
        setFilters({ ...filters, tags: newTags });
      }}
    />
  </Box>
);

export default TimelineHeader;
