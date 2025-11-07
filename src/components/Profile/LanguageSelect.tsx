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
    <SelectTrigger className="w-[110px] bg-slate-800 text-slate-100 border-slate-700">
      <SelectValue placeholder="Language" />
    </SelectTrigger>
    <SelectContent className="w-[110px] bg-slate-800 text-slate-100 border-slate-700">
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
