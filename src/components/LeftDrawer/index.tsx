import React, { useMemo } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import HomeIcon from "@mui/icons-material/Home";
import SourceIcon from "@mui/icons-material/Source";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DRAWER_ENTRIES = [
  {
    key: "homepage",
    label: "homepage",
    icon: <HomeIcon />,
    component: null,
  },
  {
    key: "explore",
    label: "Explore",
    icon: <SourceIcon />,
    component: <span>HelloMoto</span>,
  },
  {
    key: "search",
    label: "Search",
    icon: <SearchIcon />,
    component: null,
  },
  {
    key: "github",
    label: "Github",
    icon: <GitHubIcon />,
    component: null,
  },
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [selectedDrawer, setSelectedDrawer] =
    React.useState<string>("homepage");

  const currentDrawer = useMemo(
    () => DRAWER_ENTRIES.find(({ key }) => selectedDrawer === key) || null,
    [selectedDrawer]
  );

  return (
    <Box>
      <List>
        {DRAWER_ENTRIES.map(({ key, label, icon }, index) => (
          <ListItem key={label} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={key === selectedDrawer}
              onClick={() => {
                setSelectedDrawer(selectedDrawer === key ? "" : key);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                }}
              >
                {icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
