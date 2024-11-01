import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";
import { Badge } from "@/components/ui/badge";
import {
  //BriefcaseIcon,
  CodeIcon,
  // MortarboardIcon,
} from "@radix-ui/react-icons";

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
}: Props) => (
  <div className="relative mb-4 flex items-center">
    <div className="absolute left-5 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full border-4 border-green-500 flex items-center justify-center z-10">
      <CodeIcon className="h-6 w-6 text-green-400" />
    </div>
    <Card className="w-full rounded-none bg-gray-900 border-green-400 hover:border-purple-400 transition-all duration-300 ease-in-out hover:scale-105 mb-6 ml-14 relative">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div>
          <CardTitle className="text-green-400 font-mono text-lg">
            {title}
          </CardTitle>
          {/*<p className="text-gray-400 font-mono text-sm">{organization}</p>*/}
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-gray-500 font-mono text-xs mb-2">
          {from} - {to}
        </p>
        <div className="text-green-300 font-mono text-sm mb-4">{children}</div>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <Badge
              key={index}
              className="bg-purple-700 hover:bg-purple-600 text-white font-mono text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default BaseEventCard;
