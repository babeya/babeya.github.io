import React from "react";

import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

import { InlineTagsBlock, TagsBlock } from "../../Tag";

type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  colors?: readonly (string | null | undefined)[] | null;
  tags?: readonly (string | null | undefined)[] | null;
  selectedTags: string[];
  from?: React.ReactNode;
  to?: React.ReactNode;
  link?: string | null;
  title?: React.ReactNode;
};

const BaseEventCard = ({
  children,
  icon,
  colors,
  tags,
  selectedTags,
  from,
  to,
  link,
  title,
}: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <TagsBlock name="Job" level={0}>
        <InlineTagsBlock name="company" level={1}>
          {link ? (
            <Link href={link} target="__blank">
              {title}
            </Link>
          ) : (
            title
          )}
        </InlineTagsBlock>
        {children}
        <TagsBlock name="tags" level={1}>
          {(tags || []).map((tag) => (
            <Chip
              label={tag}
              key={tag}
              sx={{ margin: 0.5 }}
              size="small"
              variant="outlined"
              color={selectedTags.includes(tag || "") ? "primary" : undefined}
            />
          ))}
        </TagsBlock>
      </TagsBlock>
    </Box>
  );
};

export default BaseEventCard;
