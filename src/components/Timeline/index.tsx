import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { TranslatedMarkdown } from "../Translation";

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
          desc {
            en {
              id
              childMarkdownRemark {
                html
              }
            }
            fr {
              id
              childMarkdownRemark {
                html
              }
            }
          }
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
        {edges.map(({ node: { company, type, from, desc } }: any) => (
          <Box>
            <Typography>{from}</Typography>
            <Card sx={{ padding: 1 }} elevation={1}>
              <Typography variant="h5">{company}</Typography>
              <Typography>{type}</Typography>

              <Typography>
                <TranslatedMarkdown lang="fr" content={desc} />
              </Typography>
            </Card>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Timeline;
