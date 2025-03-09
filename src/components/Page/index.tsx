import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import { Settings } from "luxon";

import messages from "../../messages";

import { LangContext } from "../Translation";

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
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="29cd043b-a4ce-4f53-85b2-e34984d2392d"
        ></script>
      </Helmet>
      <LangContext.Provider value={{ lang }}>
        <IntlProvider
          locale={lang}
          defaultLocale="fr"
          messages={lang === "fr" ? undefined : messages}
        >
          <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
            {children}
          </div>
        </IntlProvider>
      </LangContext.Provider>
    </>
  );
};

export default Page;
