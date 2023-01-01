import React, { useContext } from "react";
import LangContext from "./LangContext";

type TranslatedGraphqlMarkdown = {
  fr: {
    childMarkdownRemark: Queries.MarkdownRemark;
  };
  en: {
    childMarkdownRemark: Queries.MarkdownRemark;
  };
};

type Props = {
  content?: TranslatedGraphqlMarkdown | null;
};

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const TranslatedMarkdown = ({ content }: Props) => {
  const { lang } = useContext(LangContext);

  const translatedHtml =
    (content && content[lang] && content[lang].childMarkdownRemark?.html) ||
    null;

  return translatedHtml ? (
    <div dangerouslySetInnerHTML={{ __html: translatedHtml }} />
  ) : (
    LOREM
  );
};

export default TranslatedMarkdown;
