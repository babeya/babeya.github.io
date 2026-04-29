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
    <div className="relative border-b border-border last:border-b-0">
      <motion.div
        className="w-full"
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Card className="relative border-0 bg-transparent shadow-none transition-colors duration-200 hover:bg-muted/35">
          <CardHeader className="p-4 pb-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-primary/25 bg-primary/10 text-primary [&_svg]:h-4 [&_svg]:w-4">
                  {icon}
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base font-semibold leading-6 tracking-normal text-foreground">
                    {title}
                  </CardTitle>
                  {subtitle ? (
                    <p className="mt-0.5 text-sm leading-5 text-muted-foreground">
                      {subtitle}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {from}
                  {to ? <> - {to}</> : null}
                </p>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:text-primary/80"
                    // TODO :title={title || ""}
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="timeline-card-copy mb-3 text-sm leading-6 text-foreground">
              {children}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  aria-selected={selectedTags.includes(tag || "")}
                  className="border border-border bg-secondary/70 px-2 py-0 text-[11px] font-medium text-secondary-foreground shadow-none hover:bg-secondary aria-selected:border-primary aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:hover:bg-primary/85"
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
