import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const query = graphql`
  query allJobs {
    allJobsJson(sort: { from: DESC }) {
      edges {
        node {
          link
          id
          from
          to
          title
          tags
          type
          company
        }
      }
    }
  }
`;

type Props = {};

const Timeline = ({}: Props) => {
  const data = useStaticQuery(query);

  const edges = data?.allJobsJson?.edges;

  return (
    <Paper sx={{ padding: 3 }}>
      <Box sx={{ borderLeft: "2px solid grey", paddingX: 2 }}>
        {edges.map(({ node: { company, type, from } }: any) => (
          <Box>
            <Typography>{from}</Typography>
            <Card sx={{ padding: 1 }} elevation={1}>
              <Typography>{company}</Typography>
              <Typography>{type}</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Card>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Timeline;
