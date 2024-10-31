import React, { useContext } from "react";

import { LangContext } from "../Translation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LinkButtonWrapper from "../LinkButtonWrapper";

const LangSelector = () => {
  const { lang } = useContext(LangContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {lang === "en" ? "English 🇬🇧" : "French 🇫🇷"}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSelector;
