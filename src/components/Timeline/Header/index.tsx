import React from "react";

import { Briefcase, Code, GraduationCap } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TimelineFilters, TimelineTag } from "../types";

type Props = {
  tags: TimelineTag[];
  filters: TimelineFilters;
  onFilterChange: (filters: TimelineFilters) => void;
};

export default function TimelineHeader({
  tags,
  filters: { tags: selectedTags, type: typeFilter },
  onFilterChange,
}: Props) {
  /*
  const handleTagChange = (tag: string, checked: boolean) => {
    setSelectedTags((prev) =>
      checked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
  };

  const handleTypeChange = (value: string) => {
    setTypeFilter(value);
  };*/

  return (
    <motion.div
      layout
      className="mb-8 p-6 bg-gray-900 rounded-lg border border-purple-500 shadow-lg animate-glow"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-neon-green text-lg font-mono mb-3">
            Filter by Tags
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
                    className="border-purple-500 text-purple-500 focus:ring-purple-500"
                  />
                  <label
                    htmlFor={name}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neon-green cursor-pointer"
                  >
                    {name}({count})
                  </label>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <h3 className="text-neon-green text-lg font-mono mb-3">
            Filter by Type
          </h3>
          <Select onValueChange={() => {}} defaultValue="all">
            <SelectTrigger className="w-full sm:w-48 bg-gray-800 text-neon-green border-purple-500 focus:border-purple-600 focus:ring focus:ring-purple-300 focus:ring-opacity-50 rounded-md transition-all duration-300 font-mono">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border border-purple-500">
              <SelectItem
                value="all"
                className="text-neon-green hover:bg-purple-700 transition-colors duration-200"
              >
                <span className="flex items-center">
                  <span className="mr-2">All</span>
                </span>
              </SelectItem>
              <SelectItem
                value="job"
                className="text-neon-green hover:bg-purple-700 transition-colors duration-200"
              >
                <span className="flex items-center">
                  <Briefcase className="mr-2" size={16} />
                  <span>Job</span>
                </span>
              </SelectItem>
              <SelectItem
                value="project"
                className="text-neon-green hover:bg-purple-700 transition-colors duration-200"
              >
                <span className="flex items-center">
                  <Code className="mr-2" size={16} />
                  <span>Project</span>
                </span>
              </SelectItem>
              <SelectItem
                value="education"
                className="text-neon-green hover:bg-purple-700 transition-colors duration-200"
              >
                <span className="flex items-center">
                  <GraduationCap className="mr-2" size={16} />
                  <span>Education</span>
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  );
}
