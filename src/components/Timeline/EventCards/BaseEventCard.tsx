import React from "react";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  colors?: readonly (string | null | undefined)[] | null;
  tags?: readonly (string | null | undefined)[] | null;
  selectedTags: string[];
  from?: React.ReactNode;
  to?: React.ReactNode;
  link?: string | null;
  title?: React.ReactNode;
};

const BaseEventCard = ({
  children,
  icon,
  colors,
  tags,
  selectedTags,
  from,
  to,
  link,
  title,
}: Props) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>{from}</div>
          </div>
          <div>
            <div>{icon}</div>
          </div>
          <div>
            <div>{to}</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>{title}</div>
            {/*link ? (
              <IconButton href={link} target="__blank">
                <OpenInNewIcon />
              </IconButton>
            ) : null*/}
          </div>
          {children}
          <div>
            {(tags || []).map((tag) => (
              <div>{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseEventCard;
