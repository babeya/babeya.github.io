import React from "react";

type Props = {
  icon?: React.ReactNode;
  text: React.ReactNode;
  href: string;
  target?: "_blank";
};

const ProfileLink = ({ icon, text, href, target }: Props) => (
  <a
    className="bg-gray-800 p-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ease-in-out hover:bg-gray-700 group relative overflow-hidden"
    href={href}
    rel="noopener noreferrer"
    target={target}
  >
    <span className="relative z-10 text-purple-400 transition-transform duration-300 group-hover:scale-150">
      {icon}
    </span>
    <span className="relative z-10 text-neon-green font-mono transition-all duration-300 group-hover:text-white">
      {text}
    </span>
    <span
      className="absolute inset-0 bg-neon-green/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
    ></span>
  </a>
);

export default ProfileLink;
