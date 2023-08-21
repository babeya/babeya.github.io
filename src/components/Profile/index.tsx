import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { FormattedMessage } from "react-intl";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Typography from "@mui/material/Typography";

import ProfileLink from "./ProfileLink";

const Profile = () => {
  return (
    <Paper sx={{ marginBottom: 1, padding: 2 }}>
      <Grid container direction="row" alignItems="center">
        <Grid md={3} item>
          <StaticImage
            src="../../images/icon.jpeg"
            alt="Simbad"
            layout="constrained"
          />
        </Grid>
        <Grid xs={12} md={9} sx={{ padding: 2 }} item>
          <Typography variant="h4" component="h1">
            A. BABEY
          </Typography>
          <Typography variant="subtitle1">
            <FormattedMessage
              id="profile.title"
              defaultMessage="Développeur Javascript"
            />
          </Typography>

          <ProfileLink
            href="https://github.com/babeya"
            icon={<GitHubIcon />}
            text="babeya"
            target="_blank"
          />
          <ProfileLink
            icon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/a-babey"
            target="_blank"
            text="a-babey"
          />
          <ProfileLink
            icon={<AlternateEmailIcon />}
            href="mailto:contact@ababey.com"
            text="contact@ababey.com"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
