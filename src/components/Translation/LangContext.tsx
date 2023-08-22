import React from "react";

const LangContext = React.createContext<{ lang: "fr" | "en" }>({ lang: "fr" });

export default LangContext;
