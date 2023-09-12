import React, { useContext } from "react";

const LangContext = React.createContext<{ lang: "fr" | "en" }>({ lang: "fr" });

export const useLangContext = () => useContext(LangContext);

export default LangContext;
