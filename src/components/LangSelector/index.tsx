import React, { useContext } from "react";

import { LangContext } from "../Translation";
import LinkButtonWrapper from "../LinkButtonWrapper";

const LangSelector = () => {
  const { lang } = useContext(LangContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        color="inherit"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {lang === "en" ? "🇬🇧" : "🇫🇷"}
      </div>
      {/*<div
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          LinkComponent={LinkButtonWrapper}
          href="/"
          disabled={lang === "fr"}
        >
          <LinkButtonWrapper href="/">Français 🇫🇷</LinkButtonWrapper>
        </MenuItem>
        <MenuItem href="/en/" disabled={lang === "en"}>
          <LinkButtonWrapper href="/en/">English 🇬🇧</LinkButtonWrapper>
        </MenuItem>
      </div>*/}
    </>
  );
};

export default LangSelector;
