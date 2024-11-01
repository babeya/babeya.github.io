import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import { Settings } from "luxon";

import { StaticImage } from "gatsby-plugin-image";

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
        <title>ababey.com</title>
      </Helmet>
      <LangContext.Provider value={{ lang }}>
        <IntlProvider
          locale={lang}
          defaultLocale="fr"
          messages={lang === "fr" ? undefined : messages}
        >
          {/*<div className="border-4 border-solid border-indigo-500">
            <div className="flex row px-8 py-2 items-center">
              <div className="flex-none flex row items-center">
                <StaticImage
                  layout="constrained"
                  src="../../images/icon.jpeg"
                  alt="avatar"
                  className="rounded-full w-10 h-10 mr-2"
                />
                <span>ababey.com</span>
              </div>
              <div className="flex-1"></div>
              <div className="flex-none">
                <LangSelector />
              </div>
            </div>
          </div>*/}

          <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
            {children}
          </div>
        </IntlProvider>
      </LangContext.Provider>
    </>
  );
};

export default Page;
