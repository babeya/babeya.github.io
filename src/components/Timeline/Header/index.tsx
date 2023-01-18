import React from "react";

import Box from "@mui/material/Box";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDoc from "../../pdf";

type Props = {
  data: (Queries.JobsJsonEdge | Queries.ProjectsJsonEdge)[];
};

const TimelineHeader = ({ data }: Props) => (
  <Box>
    <PDFDownloadLink document={<MyDoc data={data} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : <PictureAsPdfIcon />
      }
    </PDFDownloadLink>
  </Box>
);

export default TimelineHeader;
