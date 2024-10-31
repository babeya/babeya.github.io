import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import { Settings } from "luxon";

import messages from "../../messages";

import { LangContext } from "../Translation";
import LangSelector from "../LangSelector";

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>BABEY A.</title>
      </Helmet>
      <LangContext.Provider value={{ lang }}>
        <IntlProvider
          locale={lang}
          defaultLocale="fr"
          messages={lang === "fr" ? undefined : messages}
        >
          <div>
            <div>
              <div>A. Babey</div>
              <LangSelector />
            </div>
          </div>
          <div>
            <div>{children}</div>
          </div>
        </IntlProvider>
      </LangContext.Provider>
    </>
  );
};

export default Page;
