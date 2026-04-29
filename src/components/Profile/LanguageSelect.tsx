import React from "react";

import { FormattedMessage } from "react-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LanguageSelectProps = {
  onChange: (lang: string) => void;
  value: string;
};

const LanguageSelect = ({ onChange, value }: LanguageSelectProps) => (
  <Select onValueChange={onChange} defaultValue={value}>
    <SelectTrigger className="w-[118px] border-border bg-card/90 text-foreground shadow-sm backdrop-blur">
      <SelectValue placeholder="Language" />
    </SelectTrigger>
    <SelectContent className="w-[118px] border-border bg-card text-foreground">
      <SelectItem value="en">
        <FormattedMessage id="language.en" defaultMessage="English" />
      </SelectItem>
      <SelectItem value="fr">
        <FormattedMessage id="language.fr" defaultMessage="Français" />
      </SelectItem>
    </SelectContent>
  </Select>
);

export default LanguageSelect;
