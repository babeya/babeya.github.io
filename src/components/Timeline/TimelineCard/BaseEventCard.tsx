import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

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
  subtitle?: React.ReactNode;
  onTagClick?: (tag: string) => void;
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
  subtitle,
  onTagClick,
}: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="relative mb-4 flex items-center">
      <div className="absolute left-5 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full border-4 border-green-500 flex items-center justify-center z-10">
        {icon}
      </div>
      <motion.div
        className="w-full"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="rounded-none bg-gray-900 border-green-400 hover:border-purple-400 transition-all duration-300 ease-in-out hover:scale-105 mb-6 ml-14 relative">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div>
              <CardTitle className="text-green-400 font-mono text-lg mr-8">
                {title}
              </CardTitle>
              {subtitle ? (
                <p className="text-gray-400 font-mono text-sm">{subtitle}</p>
              ) : null}
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4"
                  // TODO :title={title || ""}
                >
                  <ExternalLinkIcon className="h-8 w-8 text-green-400 hover:text-purple-400" />
                </a>
              ) : null}
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <p className="text-gray-500 font-mono text-xs mb-2">
              {from}
              {to ? <> - {to}</> : null}
            </p>
            <div className="text-green-300 font-mono text-sm mb-4">
              {children}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  aria-selected={selectedTags.includes(tag || "")}
                  className="bg-purple-700 hover:bg-purple-600 text-white font-mono text-xs aria-selected:bg-green-400 aria-selected:hover:bg-green-600"
                  onClick={() => {
                    onTagClick && tag ? onTagClick(tag) : null;
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BaseEventCard;
