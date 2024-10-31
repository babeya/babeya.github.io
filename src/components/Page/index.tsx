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
        <title>BABEY A.</title>
      </Helmet>
      <LangContext.Provider value={{ lang }}>
        <IntlProvider
          locale={lang}
          defaultLocale="fr"
          messages={lang === "fr" ? undefined : messages}
        >
          <div className="flex row px-8">
            <div className="flex-none">ababey.com</div>
            <div className="flex-1"></div>
            <div className="flex-none">
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
