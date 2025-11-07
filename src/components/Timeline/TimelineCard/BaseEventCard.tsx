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
      {/* Icon circle - hidden on mobile, shown on desktop */}
      <div className="hidden md:flex absolute left-5 transform -translate-x-1/2 w-10 h-10 bg-card rounded-full border-4 border-primary items-center justify-center z-10">
        {icon}
      </div>
      <motion.div
        className="w-full"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="bg-card/50 border-border hover:border-primary transition-all duration-300 ease-in-out hover:scale-[1.02] mb-6 ml-0 md:ml-14 relative">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="flex items-center gap-3 w-full">
              {/* Icon shown inline on mobile */}
              <div className="md:hidden flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center">
                {icon}
              </div>
              <div className="flex-1">
                <CardTitle className="text-foreground font-mono text-lg mr-8">
                  {title}
                </CardTitle>
                {subtitle ? (
                  <p className="text-muted-foreground font-mono text-sm">
                    {subtitle}
                  </p>
                ) : null}
              </div>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                  // TODO :title={title || ""}
                >
                  <ExternalLinkIcon className="h-8 w-8 text-primary hover:text-primary/80" />
                </a>
              ) : null}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground font-mono text-xs mb-2">
              {from}
              {to ? <> - {to}</> : null}
            </p>
            <div className="text-foreground font-mono text-sm mb-4">
              {children}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  aria-selected={selectedTags.includes(tag || "")}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-mono text-xs aria-selected:bg-primary aria-selected:hover:bg-primary/80 aria-selected:text-primary-foreground"
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
