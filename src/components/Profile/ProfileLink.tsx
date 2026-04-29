import React from "react";

type Props = {
  icon?: React.ReactNode;
  text: React.ReactNode;
  href: string;
  target?: "_blank";
};

const ProfileLink = ({ icon, text, href, target }: Props) => (
  <a
    className="group relative flex items-center gap-3 border border-border bg-card/80 px-4 py-3 text-sm shadow-sm transition-colors duration-200 hover:border-primary/40 hover:bg-primary/10 sm:text-base"
    href={href}
    rel="noopener noreferrer"
    target={target}
  >
    <span className="text-primary transition-colors duration-200 group-hover:text-primary/80">
      {icon}
    </span>
    <span className="text-foreground transition-colors duration-200 group-hover:text-primary">
      {text}
    </span>
  </a>
);

export default ProfileLink;
