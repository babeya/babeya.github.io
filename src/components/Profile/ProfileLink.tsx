import React from "react";

type Props = {
  icon?: React.ReactNode;
  text: React.ReactNode;
  href: string;
  target?: "_blank";
};

const ProfileLink = ({ icon, text, href, target }: Props) => {
  return (
    <div>
      <div>
        {icon}
        <div>{text}</div>
      </div>
    </div>
  );
};

export default ProfileLink;
