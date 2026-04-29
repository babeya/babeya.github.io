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
      <div className="absolute left-5 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center border border-primary/30 bg-card text-primary shadow-sm md:flex">
        {icon}
      </div>
      <motion.div
        className="w-full"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="relative mb-6 ml-0 border-border bg-card/80 shadow-sm transition-colors duration-200 hover:border-primary/35 md:ml-14">
          <CardHeader className="flex flex-row items-center gap-4 pb-3">
            <div className="flex items-center gap-3 w-full">
              {/* Icon shown inline on mobile */}
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-primary/30 bg-primary/10 text-primary md:hidden">
                {icon}
              </div>
              <div className="flex-1">
                <CardTitle className="mr-8 text-lg font-semibold tracking-normal text-foreground">
                  {title}
                </CardTitle>
                {subtitle ? (
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
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
                  <ExternalLinkIcon className="h-5 w-5 text-primary transition-colors hover:text-primary/80" />
                </a>
              ) : null}
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {from}
              {to ? <> - {to}</> : null}
            </p>
            <div className="mb-4 text-sm leading-7 text-foreground">
              {children}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  aria-selected={selectedTags.includes(tag || "")}
                  className="border border-border bg-secondary/70 text-xs font-medium text-secondary-foreground hover:bg-secondary aria-selected:border-primary aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:hover:bg-primary/85"
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
