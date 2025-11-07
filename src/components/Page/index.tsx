import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import { Settings } from "luxon";

import messages from "../../messages";

import { LangContext } from "../Translation";
import { ThemeProvider } from "../Theme";

type Props = {
  children: React.ReactNode;
  lang: "fr" | "en";
};

const Page = ({ children, lang }: Props) => {
  useEffect(() => {
    Settings.defaultLocale = lang;
  }, [lang]);

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>ababey.com</title>
        <meta name="theme-color" content="hsl(140, 20%, 97%)" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="hsl(222.2, 47.4%, 11.2%)" media="(prefers-color-scheme: dark)" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="29cd043b-a4ce-4f53-85b2-e34984d2392d"
        ></script>
      </Helmet>
      <ThemeProvider>
        <LangContext.Provider value={{ lang }}>
          <IntlProvider
            locale={lang}
            defaultLocale="fr"
            messages={lang === "fr" ? undefined : messages}
          >
            <div className="min-h-screen bg-background text-foreground font-mono">
              {children}
            </div>
          </IntlProvider>
        </LangContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default Page;
