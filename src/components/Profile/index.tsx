import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { FormattedMessage } from "react-intl";

import ProfileLink from "./ProfileLink";

const Profile = () => {
  return (
    <div>
      <div>
        <div>
          <StaticImage
            src="../../images/icon.jpeg"
            alt="Simbad"
            layout="constrained"
          />
        </div>
        <div>
          <div>A. BABEY</div>
          <div>
            <FormattedMessage
              id="profile.title"
              defaultMessage="Développeur Javascript"
            />
          </div>

          <ProfileLink
            href="https://github.com/babeya"
            // icon={<GitHubIcon />}
            text="babeya"
            target="_blank"
          />
          <ProfileLink
            // icon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/a-babey"
            target="_blank"
            text="a-babey"
          />
          <ProfileLink
            // icon={<AlternateEmailIcon />}
            href="mailto:contact@ababey.com"
            text="contact@ababey.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
