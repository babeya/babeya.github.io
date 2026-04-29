import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 border-border bg-card/90 shadow-sm backdrop-blur"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-yellow-500" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-700" />
      )}
    </Button>
  );
};
