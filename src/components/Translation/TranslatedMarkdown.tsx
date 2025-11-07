import React, { useContext } from "react";
import LangContext from "./LangContext";

type TranslatedGraphqlMarkdown = {
  fr: {
    childMarkdownRemark?: Queries.MarkdownRemark;
    childrenMarkdownRemark?: Queries.MarkdownRemark[];
  };
  en: {
    childMarkdownRemark?: Queries.MarkdownRemark;
    childrenMarkdownRemark?: Queries.MarkdownRemark[];
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

export const getTranslatedMarkdownRemark = (
  grphMdw: TranslatedGraphqlMarkdown,
  lang: "fr" | "en"
) =>
  grphMdw[lang] &&
  (grphMdw[lang].childMarkdownRemark ||
    (grphMdw[lang].childrenMarkdownRemark &&
      // @ts-ignore
      grphMdw[lang].childrenMarkdownRemark[0]));

const TranslatedMarkdown = ({ content }: Props) => {
  const { lang } = useContext(LangContext);

  const translatedHtml =
    (content && getTranslatedMarkdownRemark(content, lang)?.html) || null;

  return translatedHtml ? (
    <div
      dangerouslySetInnerHTML={{ __html: translatedHtml }}
      className="text-justify markdown"
    />
  ) : (
    <div>{LOREM}</div>
  );
};

export default TranslatedMarkdown;
