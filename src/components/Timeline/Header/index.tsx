import React from "react";

import Box from "@mui/material/Box";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDoc from "../../pdf";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
};

const TimelineHeader = ({ jobs, projects }: Props) => (
  <Box>
    {typeof window !== "undefined" ? (
      <PDFDownloadLink
        document={<MyDoc jobs={jobs} projects={projects} />}
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : <PictureAsPdfIcon />
        }
      </PDFDownloadLink>
    ) : null}
  </Box>
);

export default TimelineHeader;
