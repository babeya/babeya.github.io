import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Typography from "@mui/material/Typography";

const Profile = () => {
  return (
    <Paper sx={{ marginBottom: 1, padding: 2 }}>
      <Grid container direction="row">
        <Grid xs={3}>
          <StaticImage
            src="../../images/icon.jpeg"
            alt="Simbad"
            layout="constrained"
          />
        </Grid>
        <Grid xs={9} sx={{ padding: 2 }}>
          <Typography>A. BABEY</Typography>
          <Typography>Développeur Javascript</Typography>
          <Typography>
            <GitHubIcon />
            <Link href="https://github.com/babeya" target="_blank">
              babeya
            </Link>
          </Typography>
          <Typography>
            <LinkedInIcon />
            <Link href="www.linkedin.com/in/a-babey" target="_blank">
              a-babey
            </Link>
          </Typography>
          <Typography>
            <AlternateEmailIcon />
            <Link href="mailto:contact@ababey.com">contact@ababey.com</Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
