import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/system/Stack";
import Link from "@mui/material/Link";

type Props = {
  icon: React.ReactNode;
  text: React.ReactNode;
  href: string;
  target?: "_blank";
};

const ProfileLink = ({ icon, text, href, target }: Props) => {
  return (
    <Link href={href} target={target}>
      <Stack direction="row">
        {icon}
        <Typography marginLeft={1}>{text}</Typography>
      </Stack>
    </Link>
  );
};

export default ProfileLink;
