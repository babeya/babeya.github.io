import React from "react";

type Props = {
  icon?: React.ReactNode;
  text: React.ReactNode;
  href: string;
  target?: "_blank";
};

const ProfileLink = ({ icon, text, href, target }: Props) => (
  <a
    className="bg-card p-4 rounded-2xl flex items-center space-x-3 transition-all duration-300 ease-in-out hover:bg-primary/10 group relative overflow-hidden border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl hover:scale-105"
    href={href}
    rel="noopener noreferrer"
    target={target}
  >
    <span className="relative z-10 text-primary transition-all duration-300 group-hover:scale-125">
      {icon}
    </span>
    <span className="relative z-10 text-foreground font-mono font-semibold transition-all duration-300 group-hover:text-primary">
      {text}
    </span>
  </a>
);

export default ProfileLink;
