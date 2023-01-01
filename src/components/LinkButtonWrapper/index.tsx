import React from "react";

import { Link } from "gatsby";

type Props = any & {
  href: string;
};

const LinkButtonWrapper = ({ href, ...rest }: Props) => (
  <Link {...rest} to={href} />
);

export default LinkButtonWrapper;
