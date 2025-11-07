import React, { useState } from "react";

import {
  Briefcase,
  Code,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FormattedMessage } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TimelineFilters, TimelineNode, TimelineTag } from "../types";
import ResumeDownloadLink from "./ResumeDownloadLink";

type Props = {
  tags: TimelineTag[];
  filters: TimelineFilters;
  onFilterChange: (filters: TimelineFilters) => void;
  timelineData: TimelineNode[];
};

export default function TimelineHeader({
  tags,
  filters: { tags: selectedTags, type: typeFilter },
  timelineData,
  onFilterChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible>
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 mb-4">
        <CollapsibleTrigger asChild>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            variant="outline"
            className="w-full sm:w-auto"
          >
            {isOpen ? (
              <ChevronUp className="mr-2 h-4 w-4" />
            ) : (
              <ChevronDown className="mr-2 h-4 w-4" />
            )}
            {isOpen ? (
              <FormattedMessage
                id="timeline.hideFilters"
                defaultMessage="Cacher les filtres"
              />
            ) : (
              <FormattedMessage
                id="timeline.showFilters"
                defaultMessage="Voir les filtres"
              />
            )}
          </Button>
        </CollapsibleTrigger>
        {typeof window !== "undefined" ? (
          <ResumeDownloadLink timelineData={timelineData} />
        ) : null}
      </div>
      <CollapsibleContent className="space-y-4 pt-4 border-t border-border">
        <motion.div
          layout
          className="mb-8 p-6 bg-card rounded-2xl border border-border shadow-lg"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-foreground text-lg font-mono mb-3">
                <FormattedMessage
                  id="timeline.filterByTags"
                  defaultMessage="Filtrer par Tags"
                />
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <AnimatePresence>
                  {tags.map(({ name, count }) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={name}
                        checked={selectedTags.includes(name)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            onFilterChange({
                              tags: [...selectedTags, name],
                              type: typeFilter,
                            });
                          } else {
                            onFilterChange({
                              tags: selectedTags.filter((t) => t !== name),
                              type: typeFilter,
                            });
                          }
                        }}
                        className="border-blue-500 text-blue-500 focus:ring-blue-500"
                      />
                      <label
                        htmlFor={name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground cursor-pointer"
                      >
                        {name}({count})
                      </label>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div>
              <h3 className="text-foreground text-lg font-mono mb-3">
                <FormattedMessage
                  id="timeline.filterByType"
                  defaultMessage="Filtrer par Type"
                />
              </h3>
              <Select
                onValueChange={(value) => {
                  onFilterChange({
                    tags: selectedTags,
                    type: value === "all" ? [] : [value],
                  });
                }}
                defaultValue={typeFilter.length === 1 ? typeFilter[0] : "all"}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="all"
                    className="transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <span className="mr-2">
                        <FormattedMessage
                          id="timeline.filterByType.all"
                          defaultMessage="Tous"
                        />
                      </span>
                    </span>
                  </SelectItem>
                  <SelectItem
                    value="job"
                    className="transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <Briefcase className="mr-2" size={16} />
                      <FormattedMessage
                        id="timeline.filterByType.job"
                        defaultMessage="Expérience professionelle"
                      />
                    </span>
                  </SelectItem>
                  <SelectItem
                    value="project"
                    className="transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <Code className="mr-2" size={16} />
                      <FormattedMessage
                        id="timeline.filterByType.job"
                        defaultMessage="Projet"
                      />
                    </span>
                  </SelectItem>
                  <SelectItem
                    value="education"
                    className="transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <GraduationCap className="mr-2" size={16} />
                      <FormattedMessage
                        id="timeline.filterByType.education"
                        defaultMessage="Diplôme"
                      />
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
}
