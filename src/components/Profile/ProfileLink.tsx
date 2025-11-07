import React from "react";

type Props = {
  icon?: React.ReactNode;
  text: React.ReactNode;
  href: string;
  target?: "_blank";
};

const ProfileLink = ({ icon, text, href, target }: Props) => (
  <a
    className="bg-slate-800 p-3 rounded-2xl flex items-center space-x-2 transition-all duration-300 ease-in-out hover:bg-slate-700 group relative overflow-hidden"
    href={href}
    rel="noopener noreferrer"
    target={target}
  >
    <span className="relative z-10 text-blue-400 transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
    <span className="relative z-10 text-slate-200 font-mono transition-all duration-300 group-hover:text-blue-300">
      {text}
    </span>
  </a>
);

export default ProfileLink;
